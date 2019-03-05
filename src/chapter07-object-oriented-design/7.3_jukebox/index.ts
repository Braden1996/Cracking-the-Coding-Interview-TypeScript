interface ISong {
  filePath: string;
}

const playFile = (filePath: ISong['filePath']) =>
  // tslint:disable-next-line no-console
  console.log(`Playing: ${filePath}`);

class Jukebox {
  static songs: ISong[] = [
    { filePath: 'poop.mp3' },
    { filePath: 'testing.mp3' },
  ];

  readonly playPrice = 2;
  private selectedSongIdx = 0;
  private balance = 0;

  selectNext() {
    this.selectedSongIdx = Math.min(
      this.selectedSongIdx,
      Jukebox.songs.length - 1,
    );
  }

  selectPrev() {
    this.selectedSongIdx = Math.max(this.selectedSongIdx, 0);
  }

  pay(amount: number) {
    this.balance += amount;
  }

  play() {
    if (!this.canPlay()) throw new Error('Not enough balance to pay.');
    this.balance -= this.playPrice;
    playFile(this.getSelectedSong().filePath);
  }

  canPlay = () => this.balance >= this.playPrice;

  getSelectedSong = () => Jukebox.songs[this.selectedSongIdx];
}
