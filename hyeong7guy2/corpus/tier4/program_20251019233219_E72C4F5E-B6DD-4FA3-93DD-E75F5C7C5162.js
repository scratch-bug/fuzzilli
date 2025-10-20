function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        return f6;
    }
    for (let i9 = 0;
        (() => {
            const v11 = i9 < 20000;
            v11 || f6;
            return v11;
        })();
        i9++) {
        104 % i9;
        i9 << Math.abs(i9);
    }
    WebAssembly.instantiateStreaming(this).catch(f0);
}
new F1(F1, f0);
