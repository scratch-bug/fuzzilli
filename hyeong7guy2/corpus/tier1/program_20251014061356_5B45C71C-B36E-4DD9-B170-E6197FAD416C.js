function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
    }
    new Worker(f9, { type: "function" });
}
new F3("number", "bigint");
new F3();
