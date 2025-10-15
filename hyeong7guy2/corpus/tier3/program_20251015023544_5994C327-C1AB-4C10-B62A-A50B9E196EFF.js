const v0 = [1e-15];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a3;
    this.c = v0;
}
const v4 = new F1();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a7.g = a7;
}
async function f12(a13, a14) {
    new a13(v4);
    new F5(arguments);
    return await f12;
}
f12(F5);
f12(Uint8Array);
%OptimizeFunctionOnNextCall(f12);
