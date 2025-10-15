function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a7;
}
const v8 = new F3(128, -2147483648, 128);
new F3(128, 64, -2147483648);
const v10 = { ...v8 };
