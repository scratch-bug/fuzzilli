for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = class extends F9 {
    constructor(a14, a15) {
        super();
        function f16() {
            function f17(a18) {
                function f20() {
                    function f21(a22, a23) {
                        return a22;
                    }
                    return f21(f17);
                }
                eval();
                return a15;
            }
            return f17;
        }
        new Worker(f16, { type: "function" });
        function f31() {
            return Worker;
        }
        WebAssembly.compileStreaming().catch(f31);
    }
}
new v12(F9, v12);
