const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        const v7 = {};
        function f8(a9) {
            let v10 = a9 >>> a9;
            v10++;
            const v12 = v1.constructor;
            const t10 = v12(f6, v12, v7, v10)[1];
            t10(v10, v0);
        }
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v16 = new F2();
class C17 {
    static [v16](a19, a20, a21) {
    }
    static [v16](a23, a24, a25) {
    }
}
