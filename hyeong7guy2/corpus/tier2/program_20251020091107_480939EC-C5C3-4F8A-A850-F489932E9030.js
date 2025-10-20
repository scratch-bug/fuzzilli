const v0 = `
    /a\fb\nc\rd\te\vf/dusygm;
`;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f16() {
                    return f16;
                }
                WebAssembly.compileStreaming().catch(f16);
                globalThis.console.trace();
            }
            return F9;
        }
        for (let i24 = 0, i25 = 10; i25; i25--) {
        }
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const t23 = Reflect.construct(F2, F2).toString();
new t23(v0);
