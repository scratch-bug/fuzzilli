function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function f10(a11) {
            return a7;
        }
        this.onmessage = f10;
        Object.defineProperty(a7, this, { set: f10 });
        return f10;
    }
    const v14 = { type: "function" };
    const v15 = new Worker(f5, v14);
    v15.constructor = f5;
    v15.constructor(v15, v14);
}
const v17 = new F0();
new F0(v17, F0, F0);
