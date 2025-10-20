class C0 {
}
function f1() {
    return C0;
}
function f2() {
    function f4() {
        return f4;
    }
    const v6 = Symbol.toPrimitive;
    f4[v6] = f1;
    WebAssembly.compileStreaming(v6, f2).catch(f4);
    const v10 = globalThis.console;
    v10.debug(f4);
    return v10;
}
try { f2(); } catch (e) {}
