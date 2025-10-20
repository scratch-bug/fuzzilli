function f1(a2) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let v5 = 0; v5 < 250; v5++) {
    }
    class C6 {
    }
    try { new C6(F3, ...F3); } catch (e) {}
    for (let [i12, i13] = (() => {
            Symbol?.iterator;
            return [0, 10];
        })();
        i13;
        ) {
    }
    return f1;
}
new Worker(f1, { type: "function" });
function f21(a22, a23, a24) {
    return "function";
}
new Worker(f21, { type: "function" });
