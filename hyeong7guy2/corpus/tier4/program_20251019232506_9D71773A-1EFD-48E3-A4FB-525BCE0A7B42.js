function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v5 = `
            function F6(a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v5);
        return this;
    }
    new Worker(f4, { type: "function" });
}
const v16 = new F0(F0, F0);
new F0(F0, v16);
