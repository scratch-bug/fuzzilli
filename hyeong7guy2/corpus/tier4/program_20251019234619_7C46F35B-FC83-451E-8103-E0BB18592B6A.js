function f0(a1) {
    for (let v2 = 0; v2 < 10; v2++) {
        gc();
        const v5 = {};
    }
    return a1;
}
new Worker(f0, { type: "function" });
function f10(a11) {
    return a11;
}
new Worker(f10, { type: "function" });
