const v4 = Symbol.iterator;
const v43 = {
    [v4]() {
        with (d8) {
            const t1 = test.FastCAPI;
            const v9 = new t1();
            function F10(a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = class extends F10 {
                constructor(a15, a16) {
                    super();
                    function f17(a18, a19) {
                        function F20(a22, a23) {
                            if (!new.target) { throw 'must be called with new'; }
                            a22.name;
                            function f25(a26, a27, a28) {
                                return f25;
                            }
                            f25(a19);
                        }
                        new F20(F20);
                        return f17;
                    }
                    f17();
                    %PrepareFunctionForOptimization(f17);
                    %OptimizeMaglevOnNextCall(f17);
                    f17();
                    function f34() {
                        return f34;
                    }
                    WebAssembly.compileStreaming().catch(f34);
                }
            }
            new v13();
            v9.copy_string();
        }
        const v42 = {
            next() {
                return { done: 10000 };
            },
        };
        return v42;
    },
};
const v45 = new Int16Array();
function f46() {
    new Date(WeakSet, Date, -128, ...v45, ...v43);
    return Int16Array;
}
f46();
%PrepareFunctionForOptimization(f46);
%OptimizeFunctionOnNextCall(f46);
f46();
