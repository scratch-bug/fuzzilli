function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5[262143] = a5;
    this.e = a4;
    this.b = a5;
}
const v6 = new F2(257, 257);
const v7 = new F2(-762.7408538706644, v6);
v7.e = v7;
function f8(a9) {
    return a9;
}
Object.defineProperty(v7, 262143, { configurable: true, set: f8 });
