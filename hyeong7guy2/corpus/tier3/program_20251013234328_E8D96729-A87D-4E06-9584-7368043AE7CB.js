function f1(a2, a3, a4) {
    for (const v5 of a4) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F6();
    }
}
new Worker(f1, { type: "function" });
gc();
function f17(a18) {
}
new Worker(f17, { type: "function" });
