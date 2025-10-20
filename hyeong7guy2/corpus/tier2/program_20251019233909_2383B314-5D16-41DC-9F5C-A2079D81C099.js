let v2 = new Float64Array();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v12 = `string${536870912n}undefined`;
            ({"h":v2,"length":a7,} = v12);
            v12[v12] /= 6910;
            Symbol(Symbol, f9);
            return 6910;
        }
        f10(f10());
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v16 = new F5();
v16.toString();
