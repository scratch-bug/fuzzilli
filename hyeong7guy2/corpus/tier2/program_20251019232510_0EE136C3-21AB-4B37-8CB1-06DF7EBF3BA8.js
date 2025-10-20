const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v13 = new ArrayBuffer(5, { maxByteLength: 3795 });
            const v15 = new Uint32Array(v13);
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                a19.reverse(v0, F1, F1, 3795, a19);
            }
            const v21 = new F16(-1098098658, v0);
            const t12 = v21.constructor;
            new t12(v15, v15);
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v24 = new F1(v0, v0);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
