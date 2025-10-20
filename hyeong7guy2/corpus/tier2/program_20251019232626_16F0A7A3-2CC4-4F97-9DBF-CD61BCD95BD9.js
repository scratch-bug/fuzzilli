function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        for (let i = 0; i < 5; i++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                function f8(a9, a10, a11) {
                    const t9 = ("257").constructor;
                    return t9(a6).length;
                }
                f8(F4, f3, f2);
                %OptimizeFunctionOnNextCall(f8);
            }
            const v17 = new F4(f2);
            const t16 = v17.constructor;
            new t16();
        }
        return { done: true };
    }
    return { next: f3 };
}
const v23 = Symbol.iterator;
f1.bind(null, ...{ [v23]: f2 });
