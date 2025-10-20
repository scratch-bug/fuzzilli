function f1() {
    return f1;
}
function f2() {
    function f3() {
        for (let i = 0; i < 5; i++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                function f8(a9, a10, a11) {
                    const v13 = ("257").constructor;
                    const v14 = new v13(v13, a11);
                    v14.length;
                    v14[1090] = v14;
                    v14.length;
                    return a7;
                }
                f8();
                %OptimizeFunctionOnNextCall(f8);
            }
            new F4();
        }
        return { done: f3 };
    }
    return { next: f3 };
}
const v21 = Symbol.iterator;
f1.bind(null, ...{ [v21]: f2 });
