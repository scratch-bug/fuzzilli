function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8) {
        return a7;
    }
    const v11 = [F1];
    v11.length = 257;
    new Worker(f6, { arguments: v11, type: "function" });
}
new F1();
