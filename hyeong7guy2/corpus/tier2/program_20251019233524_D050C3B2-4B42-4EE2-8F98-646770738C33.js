let v0 = 2147483649;
v0++;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = `string${a9}undefined`;
            Array(v0);
            const t6 = Array();
            t6[0] = 0.18788900528768115;
            v10.normalize();
            return a6;
        }
        f8();
        f8(a6);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v17 = new F3();
v17.toString(F3, v0, v17, v17, v0);
