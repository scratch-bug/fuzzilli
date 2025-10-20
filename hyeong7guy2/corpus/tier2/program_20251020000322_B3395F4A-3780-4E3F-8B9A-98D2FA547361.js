const v3 = Symbol.iterator;
const v28 = {
    [v3]() {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            function F7(a9) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v10 = class extends F7 {
                constructor(a12, a13) {
                    super();
                    const v14 = Symbol.dispose;
                    const v16 = {
                        [v14]() {
                        },
                    };
                    using v17 = v16;
                    function f19() {
                        return f19;
                    }
                    WebAssembly.compileStreaming().catch(f19);
                }
            }
            new v10(v10, this);
        }
        new F5();
        const v27 = {
            next() {
                return { done: 10 };
            },
        };
        return v27;
    },
};
const v31 = new Int16Array();
function f32() {
    const v33 = new Date(WeakSet, Date, 882, ...v31, ...v28);
    return v33;
}
f32();
%PrepareFunctionForOptimization(f32);
%OptimizeFunctionOnNextCall(f32);
f32();
