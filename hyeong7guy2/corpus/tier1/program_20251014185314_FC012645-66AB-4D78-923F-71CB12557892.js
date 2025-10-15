const v2 = new Uint32Array(7);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            let v10 = v2[2];
            v10++;
            return a6;
        }
        f8();
        f8(7);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v14 = new F3();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
