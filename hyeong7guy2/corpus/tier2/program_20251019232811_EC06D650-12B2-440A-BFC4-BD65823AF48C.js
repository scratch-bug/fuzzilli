function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f8() {
            return F0;
        }
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function f13() {
                function f14() {
                    return f14;
                }
                WebAssembly.compileStreaming(this).catch(f14);
                function f17(a18) {
                    return a12;
                }
                return f17;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v19 = new F9(this, WebAssembly);
        const v21 = v19.toString(a5, F9, this, F9, this).Exception;
        try { new v21(this); } catch (e) {}
        const v23 = WebAssembly.compileStreaming(this, v3);
        const v24 = v23.constructor;
        try { new v24(); } catch (e) {}
        v23.catch(f8);
    }
}
new v3();
