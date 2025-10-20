function f1() {
    return f1;
}
function f2() {
    function f3() {
        for (let i = 0; i < 5; i++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                function f8(a9, a10, a11) {
                    const t9 = ("257").constructor;
                    const v15 = t9(a6).length;
                    const v16 = v15 / v15;
                    v16 / v16;
                    return F4;
                }
                f8(a7, F4, a6);
                %OptimizeFunctionOnNextCall(f8);
            }
            new F4(f2, F4);
        }
        return { done: true };
    }
    return { next: f3 };
}
const v23 = Symbol.iterator;
f1.bind(null, ...{ [v23]: f2 });
