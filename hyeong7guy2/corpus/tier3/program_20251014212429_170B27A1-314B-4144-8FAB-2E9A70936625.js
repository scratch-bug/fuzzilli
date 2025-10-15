function f0(a1, a2) {
    const v3 = a1.cos();
    try {
        f0(v3, v3);
    } catch(e6) {
        return Int8Array;
    }
    arguments[1] = a2;
    return a1;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
const v12 = new Uint16Array(313);
class C13 extends Uint16Array {
}
try { f0.apply(C13, v12); } catch (e) {}
