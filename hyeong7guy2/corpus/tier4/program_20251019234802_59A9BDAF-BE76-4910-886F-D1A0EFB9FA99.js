function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        const v5 = `
            function f6(a7, a8, a9, a10) {
                return a3;
            }
            f6();
        `;
        eval(v5);
    }
}
new F1();
