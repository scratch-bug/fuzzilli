function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8(a9, a10, a11) {
                function F13() {
                    if (!new.target) { throw 'must be called with new'; }
                    const v15 = { ...this };
                }
                new F13();
                let v17 = -229684853n;
                v17++;
                const v21 = Symbol.iterator;
                const v31 = {
                    [v21]() {
                        const v30 = {
                            set e(a25) {
                            },
                            set h(a27) {
                            },
                            next() {
                                return { done: 10 };
                            },
                        };
                        return v30;
                    },
                };
                const v34 = new Int16Array();
                function f35() {
                    new Date(WeakSet, Date, 882, ...v34, ...v31);
                    return f6;
                }
                f35();
                %PrepareFunctionForOptimization(f35);
                %OptimizeFunctionOnNextCall(f35);
                f35();
                return BigInt.asUintN(5, v17);
            }
            f8(this, F1, this);
            f8(a7, f6, f8);
            const v44 = class extends Int16Array {
            }
            Object.defineProperty(Int16Array, 5, { configurable: true, value: v44 });
            %OptimizeFunctionOnNextCall(f8);
            f8();
            return a4;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v46 = new F1();
class C47 {
    static [v46](a49, a50, a51) {
    }
}
