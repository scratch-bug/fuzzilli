const v0 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            `string${536870912n}undefined` && v0;
            return a4;
        }
        f7(a4);
        f7(f6);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v13 = new F2(v0, F2);
v13.toString();
