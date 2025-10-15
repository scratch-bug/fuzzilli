function f0(a1, a2, a3) {
    function f4(a5) {
        const t2 = a5[1];
        delete t2?.a;
        return f4;
    }
    for (let i10 = 0; 25000;) {
        f4(true);
    }
}
new Worker(f0, { type: "function" });
function f20(a21) {
    return Worker;
}
new Worker(f20, { type: "function" });
