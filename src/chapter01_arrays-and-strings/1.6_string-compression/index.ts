export function compress(str: string) {
  let outStr = '';
  let counter = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) counter++;
    if (str[i] !== str[i - 1] || i === str.length - 1) {
      outStr += str[i - 1] + counter;
      counter = 1;
    }
  }
  return outStr.length === str.length * 2 ? str : outStr;
}
