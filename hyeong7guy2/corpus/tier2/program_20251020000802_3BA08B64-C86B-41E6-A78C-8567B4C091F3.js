const v0 = [-8170,-2620,-1365103549];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            for (let v10 = 0; v10 < 5; v10++) {
                v10 << v10;
            }
            const v12 = `string${536870912n}undefined`;
            new ArrayBuffer(Float64Array, a6, Float64Array, 0, 3436, ...v0);
            v12.charAt();
            return f7;
        }
        f8(f8);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    f7();
    Object.defineProperty(this, "toString", { get: f7 });
}
const v20 = new F3(v0, 536870912n);
v20.toString(536870912n);
