let v0 = 2147483649;
v0++;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f9(a10) {
            `string${a10}undefined`;
            for (const v12 in arguments) {
            }
            return Array(v0);
        }
        f9(a5);
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v16 = new F3(Array, v0);
v16.toString();
