function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [-631.2779217677911];
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            return F0;
        }
        const v10 = `
            try {
                const v13 = class extends Date {
                }
                \`-63824\`;
            } catch(e15) {
                new f9(e15, Uint8ClampedArray, ...v2, ...v10);
            }
            const v17 = { 154760190: a6 };
        `;
        eval(v10);
    }
    new F3(F0, v2, F0, F0);
}
new F0();
