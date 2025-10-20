function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = WebAssembly.compile();
    function f6() {
        for (let v7 = 0; v7 < 25; v7++) {
            const v8 = v7 << v7;
            const v11 = ([v8,v8]).join(1000000.0);
            v11 * v11;
        }
        return f6;
    }
    v5.catch(f6);
}
new F0(F0, F0);
