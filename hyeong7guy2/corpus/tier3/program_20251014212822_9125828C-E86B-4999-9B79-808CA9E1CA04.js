function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [-631.2779217677911];
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            return v2;
        }
        const v10 = `
            try {
                const v13 = class extends Date {
                }
                \`-63824\`;
            } catch(e15) {
                new f9(e15, Uint8ClampedArray, ...v2, ...v10);
            }
        `;
        eval(v10);
    }
    new F3();
}
new F0();
