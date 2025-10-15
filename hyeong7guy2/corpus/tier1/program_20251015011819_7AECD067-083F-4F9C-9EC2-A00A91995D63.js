function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2(a3) {
        return f2;
    }
    new Worker(f2, { type: "function" });
}
new F0();
