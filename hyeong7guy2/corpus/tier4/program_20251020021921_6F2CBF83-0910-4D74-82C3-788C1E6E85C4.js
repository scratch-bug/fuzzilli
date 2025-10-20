const v0 = [-631.2779217677911];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return a4;
    }
    const v8 = `
        try {
            const v10 = class extends Date {
            }
            \`-63824\`;
            let v12 = 257;
            for (let v13 = 0; v13 < 5; v13++) {
                v12 ** 65535;
                v12 = v13;
            }
        } catch(e16) {
            new f7(e16, v8, ...v0, ...v8);
        }
    `;
    eval(v8);
}
new F1();
