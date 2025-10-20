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
                    const v14 = new t9();
                    v14[1090] = v14;
                    return v14.length;
                }
                f8(f3, f8, a7);
                %OptimizeFunctionOnNextCall(f8);
            }
            new F4();
        }
        return { done: true };
    }
    return { next: f3 };
}
const v21 = Symbol.iterator;
f1.bind(null, ...{ [v21]: f2 });
