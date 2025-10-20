function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6) {
        return F0;
    }
    const v9 = { type: "function" };
    const v10 = new Worker(f3, v9);
    v10.terminateAndWait(v9, F0);
    v10.getMessage(v9);
}
new F0(F0);
