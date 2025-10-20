const v1 = {};
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9(a10, a11, a12) {
                function F14() {
                    if (!new.target) { throw 'must be called with new'; }
                    const v16 = { ...v1 };
                }
                new F14();
                let v18 = -229684853n;
                v18++;
                const v22 = Symbol.iterator;
                const v32 = {
                    [v22]() {
                        const v31 = {
                            set e(a26) {
                            },
                            set h(a28) {
                            },
                            next() {
                                return { done: 10 };
                            },
                        };
                        return v31;
                    },
                };
                const v35 = new Int16Array();
                function f36() {
                    new Date(WeakSet, Date, 882, ...v35, ...v32);
                    return v1;
                }
                f36();
                %PrepareFunctionForOptimization(f36);
                %OptimizeFunctionOnNextCall(f36);
                f36();
                return BigInt.asUintN(5, v18);
            }
            f9(this, f7, F2);
            f9();
            const v45 = class extends Int16Array {
            }
            Object.defineProperty(Int16Array, 5, { configurable: true, value: v45 });
            %OptimizeFunctionOnNextCall(f9);
            f9();
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v47 = new F2(F2, Symbol);
class C48 {
    static [v47](a50, a51, a52) {
    }
}
