for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = class extends F9 {
    constructor(a14, a15) {
        super();
        function f16(a17, a18) {
            function f20() {
                function f22(a23) {
                    arguments[this] &= a14;
                    let v25 = 4096;
                    !v25;
                    a23 / -4294967296;
                    v25--;
                    return v25;
                }
                this.onmessage = f22;
                return a17;
            }
            const v32 = new Worker(f20, { type: "function" });
            return v32;
        }
        f16();
        function f35() {
            return v12;
        }
        WebAssembly.compileStreaming(this, a15).catch(f35);
    }
}
new v12(v12, v12);
