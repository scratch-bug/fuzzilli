function f0() {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            return f6;
        }
        WebAssembly.instantiateStreaming().catch(f6);
        const v9 = `
            parseInt("und🤯efined");
        `;
        const v14 = JSON.parse;
        try { v14(v9); } catch (e) {}
    }
    new F1();
    return F1;
}
f0();
