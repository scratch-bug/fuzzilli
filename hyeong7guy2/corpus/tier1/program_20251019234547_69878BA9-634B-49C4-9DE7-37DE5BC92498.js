const v3 = Symbol.iterator;
const v36 = {
    [v3]() {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            function F7(a9) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v10 = class extends F7 {
                constructor(a12, a13) {
                    super();
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    function F18() {
                        if (!new.target) { throw 'must be called with new'; }
                        for (let v20 = 0; v20 < 5; v20++) {
                            Object.defineProperty(F14, F14, { writable: true, enumerable: true, value: { a: 1 } });
                        }
                        const v24 = { a: 1.1 };
                    }
                    new F18();
                    function f27() {
                        return v10;
                    }
                    WebAssembly.compileStreaming(this, a13).catch(f27);
                }
            }
            new v10(this, F7);
        }
        new F5();
        const v35 = {
            next() {
                return { done: 10 };
            },
        };
        return v35;
    },
};
const v39 = new Int16Array();
function f40() {
    new Date(WeakSet, Date, 882, ...v39, ...v36);
    return v39;
}
f40();
%PrepareFunctionForOptimization(f40);
%OptimizeFunctionOnNextCall(f40);
f40();
