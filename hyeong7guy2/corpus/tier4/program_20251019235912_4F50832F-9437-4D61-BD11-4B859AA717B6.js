for (let v0 = 0; v0 < 250; v0++) {
}
function f1(a2, a3, a4) {
    function f5(a6) {
        const t4 = a6[1];
        delete t4?.a;
    }
    for (let i11 = 0; 25000;) {
        f5(true);
    }
}
new Worker(f1, { type: "function" });
