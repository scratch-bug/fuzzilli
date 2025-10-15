function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        new F0();
    } catch(e5) {
        function f6(a7, a8) {
            return this;
        }
        new Worker(f6, { type: "function" });
    }
}
new F0();
