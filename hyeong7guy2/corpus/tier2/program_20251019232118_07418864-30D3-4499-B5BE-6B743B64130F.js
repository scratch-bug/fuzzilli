function f0() {
}
[-2,28448];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10(a11, a12, a13) {
        function f14() {
        }
        function f15() {
            function f16() {
                gc();
                const v22 = {
                    done: true,
                    set h(a21) {
                    },
                };
                return v22;
            }
            return { next: f16 };
        }
        const v25 = Symbol.iterator;
        f14.bind(null, ...{ [v25]: f15 });
        const v29 = {};
    }
    f10(a8, a8);
}
const v32 = new F6(F6, F6);
v32.constructor;
