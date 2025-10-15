function f2() {
    return f2;
}
WebAssembly.instantiateStreaming(Symbol).catch(f2);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11(a12) {
        return a8;
    }
    const v13 = [a8,a8];
    for (let i15 = (() => {
            v13[Symbol] = Symbol;
            return 0;
        })();
        i15 < 30000;
        i15++) {
        v13.forEach(f11);
    }
}
new F5(f2, Symbol, f2, F5);
