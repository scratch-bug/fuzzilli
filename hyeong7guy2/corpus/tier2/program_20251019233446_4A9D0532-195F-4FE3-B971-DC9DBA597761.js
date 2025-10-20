const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            let v9 = 0;
            v9--;
            const v11 = v9 >>> v9;
            v11 >>> v11;
            let v13 = 64;
            const v14 = v13 >>> v13;
            v13--;
            v1.has(v14);
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2(Map, Map);
v17.toString(v17, v17, F2, v17, Map);
class C19 {
    static [v17](a21, a22, a23) {
    }
}
