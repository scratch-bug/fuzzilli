function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            eval();
        }
        function f20(a21) {
            return f20;
        }
        const v23 = {};
        const v25 = `3${536870888n}valueOf${Array}boolean`;
        function f26(a27, a28, a29) {
            return a29;
        }
        const v31 = [Array,Array];
        Reflect.apply(v25.match, F0, v31);
        const v34 = async (a35, a36, a37) => {
            return a35;
        };
        return a9;
    }
    f8(F4, F4, f8);
    %OptimizeFunctionOnNextCall(f8);
}
const v39 = new F4(F4, F0);
const t29 = v39.constructor;
new t29();
new F4(F4, F4);
