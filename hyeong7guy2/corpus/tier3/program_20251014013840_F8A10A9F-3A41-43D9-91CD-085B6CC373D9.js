function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F4();
    return a2;
}
new Worker(f0, { type: "function" });
function f13(a14) {
}
new Worker(f13, { type: "function" });
