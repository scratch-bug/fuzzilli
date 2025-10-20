function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        for (let i = 0; i < 5; i++) {
            function F5(a7, a8) {
                if (!new.target) { throw 'must be called with new'; }
                function f9(a10, a11, a12) {
                    function f13(a14, a15, a16) {
                        a15 in a15;
                        return F5;
                    }
                    try { f13(F5, "function"); } catch (e) {}
                    return this;
                }
                f9();
                %OptimizeFunctionOnNextCall(f9);
            }
            new F5(F5, Symbol);
        }
        return { done: true };
    }
    return { next: f4 };
}
const v24 = Symbol.iterator;
f2.bind(null, ...{ [v24]: f3 });
