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
                    return F9;
                }
                WebAssembly.compileStreaming(this, this).catch(f14);
                function f17(a18) {
                    return a18;
                }
                const v21 = new Proxy(this, {});
                try { v21.toString(f13, Proxy, v3, v21, f8); } catch (e) {}
                return f17;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v23 = new F9();
        v23.toString(a6, a6, v3, a6);
        WebAssembly.compileStreaming(v23).catch(f8);
    }
}
new v3();
