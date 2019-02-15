export class Time {
  constructor(value = null) {
    this.value = value;
  }

  // valueOf() {
  //   return this.toString();
  // }

  toString() {
    if (this.value === null) {
      return '--:--:--';
    } else {
      const {m, s, cs} = this.MSCsFormat;
      const format = (number) => number.toString().padStart(2, '0');
      return `${format(m)}:${format(s)}:${format(cs)}`;
    }
  }

  get MSCsFormat() {
    let diff = Math.round((this.value) / 10);
    const cs = diff % 100;
    diff = (diff - cs) / 100;
    const s = diff % 60;
    const m = (diff - s) / 60;
    return {m, s, cs};
  }
}
