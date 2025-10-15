function f0(a1, a2) {
    return a1;
}
new Worker(f0, { type: "function" });
function f8(a9, a10) {
    const v14 = {
        [Symbol]() {
            eval();
        },
    };
}
new Worker(f8, { type: "function" });
