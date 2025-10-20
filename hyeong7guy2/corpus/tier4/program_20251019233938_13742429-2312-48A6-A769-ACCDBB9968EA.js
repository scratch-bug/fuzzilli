const v0 = [-631.2779217677911];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return v0;
    }
    const v8 = `
        class C10 extends Int32Array {
        }
        try {
            const v12 = class extends Date {
            }
            \`-63824\`;
            for (let v14 = 0; v14 < 5; v14++) {
                function F15(a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            }
        } catch(e18) {
            new f7(e18, v8, ...v0, ...v8);
        }
    `;
    eval(v8);
}
new F1();
