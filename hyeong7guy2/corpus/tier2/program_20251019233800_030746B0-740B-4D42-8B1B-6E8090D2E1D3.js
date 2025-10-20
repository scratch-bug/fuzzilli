const v3 = Symbol.iterator;
const v31 = {
    [v3]() {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            function F7(a9) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v10 = class extends F7 {
                constructor(a12, a13) {
                    super();
                    function f15(a16) {
                        function f18() {
                            return 4;
                        }
                        f18.apply(4, arguments);
                        return 4;
                    }
                    f15();
                    function f22() {
                        return f22;
                    }
                    WebAssembly.compileStreaming(v10, v10).catch(f22);
                }
            }
            new v10();
        }
        new F5();
        const v30 = {
            next() {
                return { done: 10 };
            },
        };
        return v30;
    },
};
const v34 = new Int16Array();
function f35() {
    const v36 = new Date(WeakSet, Date, 882, ...v34, ...v31);
    return v36;
}
f35();
%PrepareFunctionForOptimization(f35);
%OptimizeFunctionOnNextCall(f35);
f35();
