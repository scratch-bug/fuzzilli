const v0 = [-4294967297,7,1299183458,13759,1073741823];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = new Int8Array();
            for (const v10 in v9) {
                for (let [v11,v12,v13] of v0) {
                }
            }
        }
        f6(this);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
