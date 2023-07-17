export class Color {
  r: number;
  g: number;
  b: number;
  a?: number;

  constructor(_r: number, _g: number, _b: number, _a?: number) {
    if (_r > 255 || _g > 255 || _b > 255 || _r < 0 || _g < 0 || _b < 0) throw "Invalid color values out of range [0,256)";
    this.r = _r;
    this.g = _g;
    this.b = _b;
    this.a = _a;
  }

  toHex(): string {
    let _r = this.r.toString(16);
    let _g = this.g.toString(16);
    let _b = this.b.toString(16);
    _r = _r.length < 2 ? "0" + _r : _r;
    _g = _g.length < 2 ? "0" + _g : _g;
    _b = _b.length < 2 ? "0" + _b : _b;
    return "#" + _r + _g + _b;
  }

  toString(): string {
    return `(${this.r},${this.g},${this.b}${this.a ? "," + this.a + ")" : ")"}`;
  }
}
