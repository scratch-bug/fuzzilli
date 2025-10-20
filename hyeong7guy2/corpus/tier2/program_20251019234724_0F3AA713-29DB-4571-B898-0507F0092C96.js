[-259673.0973328139,0.0,1000000000.0,4.6665253080741955,-47958.978357632644];
new Int16Array();
function f3() {
    function f4(a5, a6) {
        function f7(a8, a9, a10) {
            function F11(a13, a14, a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                const v17 = `
                    try {
                        const v19 = class extends Date {
                        }
                        \`-63824\`;
                    } catch(e21) {
                    }
                `;
                eval(v17);
            }
            new F11();
            gc();
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F27(f7, f7);
            return f7;
        }
        new Worker(f7, { type: "function" });
        return Worker;
    }
    f4();
    f4();
}
({ construct: f3 }).construct();
