function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f8() {
            return f8;
        }
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                function f15(a16) {
                    this.f = "NFC";
                    return a16;
                }
                const v17 = {};
                function f18(a19, a20) {
                }
                v17.set = f18;
                const v22 = new Proxy(this, v17);
                try { v22.toString(f18, f18); } catch (e) {}
                return f15;
            }
            Object.defineProperty(this, "toString", { get: f14 });
        }
        const v24 = new F10();
        v24.toString();
        WebAssembly.compileStreaming().catch(f8);
    }
}
new v3(F0, v3);
