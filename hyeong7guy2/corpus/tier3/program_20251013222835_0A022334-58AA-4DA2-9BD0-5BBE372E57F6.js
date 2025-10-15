function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
    }
    new Worker(f5, { type: "function" });
}
new F1();
