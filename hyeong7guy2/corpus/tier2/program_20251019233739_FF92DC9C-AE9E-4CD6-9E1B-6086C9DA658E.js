const v2 = new Uint32Array(7);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = a9?.constructor;
            try { v10(); } catch (e) {}
            const v12 = a9?.constructor;
            try { v12(); } catch (e) {}
            const v14 = {};
            const v15 = v2[2];
            function f16(a17, a18, a19) {
                eval(v15);
                return f8;
            }
            return v15;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v24 = new F3();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
