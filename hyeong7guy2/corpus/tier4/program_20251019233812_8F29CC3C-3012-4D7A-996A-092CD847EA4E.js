function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9223372036854775807;
}
const v3 = new F0();
async function f4(a5, a6) {
    class C7 {
        constructor(a9, a10, a11) {
            a9.d;
        }
    }
    new C7(v3);
    Uint8Array.bind(f4, F0, Uint8Array, C7, Uint8Array);
    await f4;
    return a5;
}
f4();
f4(F0, F0);
%OptimizeFunctionOnNextCall(f4);
