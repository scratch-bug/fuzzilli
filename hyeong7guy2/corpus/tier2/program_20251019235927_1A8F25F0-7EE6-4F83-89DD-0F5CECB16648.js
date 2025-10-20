const v3 = Symbol.iterator;
const v32 = {
    [v3]() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9() {
                function f10(a11) {
                    function F12(a14, a15, a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f19() {
                            return a8;
                        }
                        WebAssembly.compileStreaming(a11).catch(f19);
                        globalThis.console.trace(this, this);
                    }
                    new F12(f10, F12, a8, F12);
                }
                return f10;
            }
            Object.defineProperty(this, "toString", { get: f9 });
        }
        const v26 = new F5(this, F5);
        v26.hasOwnProperty(v26);
        const v31 = {
            next() {
                return { done: 10 };
            },
        };
        return v31;
    },
};
const v35 = new Int16Array();
new Date(WeakSet, Date, 882, ...v35, ...v32);
