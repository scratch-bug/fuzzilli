for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function f16() {
        function f17(a18) {
            const v19 = `string${536870912n}undefined`;
            const t6 = [0.39346707945810944,-991803.8963643727];
            t6[15] |= 256;
            ("S")["concat"](Float64Array, f17, v19);
            return Float64Array;
        }
        f17(a14);
        f17(a15);
        %OptimizeMaglevOnNextCall(f17);
        return f17;
    }
    Object.defineProperty(this, "toString", { get: f16 });
}
const v26 = new F12(F12, 536870912n);
v26.toString();
