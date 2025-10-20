function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f8() {
            return f8;
        }
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function f13() {
                function f14() {
                    return F0;
                }
                WebAssembly.compileStreaming(this).catch(f14);
                function f17(a18) {
                    return a12;
                }
                const v21 = new Proxy(this, {});
                try { v21.toString(v21, WebAssembly, v21, v3, this); } catch (e) {}
                return f17;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v23 = new F9(this, WebAssembly);
        v23.toString();
        WebAssembly.compileStreaming().catch(f8);
    }
}
new v3(F0, F0);
