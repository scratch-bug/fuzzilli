class C0 {
}
class C1 extends C0 {
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new ArrayBuffer();
    new Uint32Array(v10, 7);
}
try { new F2(); } catch (e) {}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    function f18(a19, a20, a21) {
        function F24(a26, a27, a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
            a26.e = a26;
            a28.g = F2;
            C1[0] = null;
            a28.g = a28;
            a29--;
            this.f = a29;
        }
        const v32 = new F24(Int8Array, 1825, F24, 1825);
        new F24(v32, F24, v32);
    }
    f18();
    %OptimizeFunctionOnNextCall(f18);
}
new F14();
new F14();
new F14();
