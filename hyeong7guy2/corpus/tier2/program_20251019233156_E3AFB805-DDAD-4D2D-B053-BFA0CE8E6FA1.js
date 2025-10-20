function f0() {
    return f0;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6++;
    this.e = a6;
}
const v8 = new F3("2147483647", -3612);
new F3(v8, v8);
Object.defineProperty(v8, F3, { configurable: true, enumerable: true, set: f0 });
