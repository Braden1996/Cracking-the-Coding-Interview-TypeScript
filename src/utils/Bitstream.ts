type bit = 0 | 1;

// The following class describes bit manipulation operations as they are
// done by hand. This has no practical use.
type BitstreamArg = Bitstream | number | string | bit[];
export class Bitstream {
  static one = new Bitstream('1');
  static zero = new Bitstream('0');

  private static valueGuard(arr: any[]) {
    if (arr.some(v => v !== 0 && v !== 1)) {
      throw new Error(
        `${arr} is not a valid Bitstream - can only contain numbers 0 and 1.`,
      );
    }
    return arr;
  }

  private static toBitArray(binaryInput: number | string | bit[]) {
    switch (typeof binaryInput) {
      case 'number':
        binaryInput = binaryInput.toString(2);
      case 'string':
        binaryInput = (binaryInput
          .split('')
          .map(v => Number(v)) as unknown) as bit[];
      default:
        return Bitstream.valueGuard(binaryInput);
    }
  }

  private static toBitstream(bsArg: Bitstream | number | string | bit[]) {
    return bsArg instanceof Bitstream ? bsArg : new Bitstream(bsArg);
  }

  private readonly value: bit[];
  get length() {
    return this.value.length;
  }

  constructor(binaryInput: number | string | bit[]) {
    this.value = Bitstream.toBitArray(binaryInput);
  }

  toDecimal = () => parseInt(this.toString(), 2);
  toString = () => this.value.join('');

  getBit = (i: number) =>
    this.and(new Bitstream(`1${i > 0 ? '0'.repeat(i) : ''}`)).value.some(
      v => v === 1,
    )
      ? Bitstream.one
      : Bitstream.zero;

  add(bsArg: BitstreamArg) {
    const bs = Bitstream.toBitstream(bsArg);
    const [a, b] = this.equalize(bs);

    const bits: bit[] = [];
    let carry = new Bitstream([0]);

    for (let i = 0; i < a.length; i++) {
      const ai = a.getBit(i);
      const bi = b.getBit(i);
      const and = ai.and(bi);
      const xor = ai.xor(bi);
      bits.unshift(xor.xor(carry).value[0]);
      carry = and.or(xor.and(carry));
    }

    if (carry.toDecimal() === 1) bits.unshift(1);

    return new Bitstream(bits);
  }

  addMany = (...args: Bitstream[]) =>
    args.reduce((sum, bs) => sum.add(bs), this);

  mutliply(bsArg: BitstreamArg) {
    const bs = Bitstream.toBitstream(bsArg);
    if (bs.toDecimal() === 0) return Bitstream.zero;

    const parts: Bitstream[] = [];
    let rightPad = 0;
    for (const b1 of this.value.slice().reverse()) {
      if (b1 === 1) parts.push(bs.padRight(rightPad));
      rightPad++;
    }

    return parts[0]!.addMany(...parts.slice(1));
  }

  and(bsArg: BitstreamArg) {
    const bs = Bitstream.toBitstream(bsArg);
    const [a, b] = this.equalize(bs);
    const bits: bit[] = a.value.map((av, i) => (av === b.value[i] ? av : 0));
    return new Bitstream(bits);
  }

  or(bsArg: BitstreamArg) {
    const bs = Bitstream.toBitstream(bsArg);
    const [a, b] = this.equalize(bs);
    const bits: bit[] = a.value.map((av, i) =>
      [av, b.value[i]].includes(1) ? 1 : 0,
    );
    return new Bitstream(bits);
  }

  not = () => new Bitstream(this.value.map(v => (v === 0 ? 1 : 0)));

  nand = (bsArg: BitstreamArg) => this.and(Bitstream.toBitstream(bsArg)).not();

  nor = (bsArg: BitstreamArg) => this.or(Bitstream.toBitstream(bsArg)).not();

  xor(bsArg: BitstreamArg) {
    const bs = Bitstream.toBitstream(bsArg);
    return this.nand(this)
      .nand(bs)
      .nand(bs.nand(bs).nand(this));
  }

  complement = () =>
    this.not()
      .add(new Bitstream([1]))
      .padUntil(this.length);

  equalize(bsArg: BitstreamArg) {
    const bs = Bitstream.toBitstream(bsArg);
    const length = Math.max(this.length, bs.length);
    return [this.padUntil(length), bs.padUntil(length)];
  }

  pad = (amount: number) =>
    new Bitstream(
      Array(amount)
        .fill(0)
        .concat(this.value),
    );

  padRight = (amount: number) =>
    new Bitstream(this.value.concat(Array(amount).fill(0)));

  padUntil(length: number) {
    const diff = length - this.length;
    if (diff < 0) {
      throw new Error(
        `Unable to pad as Bitstream has length greater than ${length}.`,
      );
    } else if (diff === 0) {
      return this;
    } else {
      return new Bitstream(
        Array(diff)
          .fill(0)
          .concat(this.value),
      );
    }
  }
}

const bsf = (binaryInput: number | string | bit[]) =>
  new Bitstream(binaryInput);
export default bsf;
