class C0 {
}
new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8, a9, a10) {
            const v12 = new SharedArrayBuffer();
            const v14 = new DataView(v12);
            try { v14.getInt32(F2); } catch (e) {}
            function F16(a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F16(a4);
            try { v14.getInt32(a5); } catch (e) {}
        }
        f7(F2, f7, F2);
        const v22 = f7();
        %OptimizeMaglevOnNextCall(f7);
        f7(v22, C0, this);
        function f24(a25) {
        }
        return f24;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v26 = new F2(F2, F2);
class C27 {
    static [v26](a29, a30, a31) {
    }
}
