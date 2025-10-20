function f1() {
    return f1;
}
const v3 = WebAssembly.instantiateStreaming(WebAssembly, WebAssembly, WebAssembly);
const v4 = v3.catch(f1);
function f5(a6, a7, a8) {
    const v10 = Intl.PluralRules;
    new v10("sc", { roundingIncrement: 2 });
    return v3;
}
try { f5(v4, f5, f5); } catch (e) {}
