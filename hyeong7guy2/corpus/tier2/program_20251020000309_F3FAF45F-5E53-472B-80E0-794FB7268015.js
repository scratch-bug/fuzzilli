function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v5 = { done: true };
        for (let i7 = 10, i8 = 10;
            (() => {
                const v9 = `
                    function f11() {
                        Date();
                        return Date;
                    }
                    %PrepareFunctionForOptimization(f11);
                    %OptimizeFunctionOnNextCall(f11);
                    f11();
                `;
                eval(v9);
                return i8;
            })();
            i8--) {
        }
        return v5;
    }
    return { next: f3 };
}
const v22 = Symbol.iterator;
f1.bind(null, ...{ [v22]: f2 });
