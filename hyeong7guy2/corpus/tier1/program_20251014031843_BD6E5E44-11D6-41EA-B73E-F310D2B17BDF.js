for (let i1 = -65535; i1; i1++) {
}
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = `
        function f12() {
            return F7;
        }
        function f13(a14) {
            return a14;
        }
        const v15 = {};
    `;
    eval(v10);
}
new F7();
