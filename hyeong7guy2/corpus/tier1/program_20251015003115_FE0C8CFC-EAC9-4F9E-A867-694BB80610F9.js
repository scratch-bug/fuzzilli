const v0 = [10];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    let v5;
    try { v5 = new a4(); } catch (e) {}
    function f6() {
        function f7(a8) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                const v16 = WebAssembly.LinkError;
                new v16(a12);
                function f18() {
                    return v16;
                }
                WebAssembly.compileStreaming(v0, a3).catch(f18);
                globalThis.console.trace();
            }
            const v24 = new F9();
            const t18 = v24.constructor;
            new t18(v0, v5, F9);
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v27 = new F1(F1, F1);
v27.hasOwnProperty(v27);
