function f2(a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v9 = new F5(undefined, a4);
    const v10 = v9.constructor;
    const v11 = ("symbol").codePointAt(undefined, v10, F5, undefined, ..."symbol");
    typeof v10;
    return v11;
}
const v13 = f2(f2, f2);
f2();
%OptimizeMaglevOnNextCall(f2);
f2(v13, f2);
function f17() {
    return f17;
}
WebAssembly.compileStreaming().catch(f17);
