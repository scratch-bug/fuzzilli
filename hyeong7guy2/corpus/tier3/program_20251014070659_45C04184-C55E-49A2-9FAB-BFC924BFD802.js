function f0(a1, a2, a3) {
    function f5(a6) {
        return f0;
    }
    this.onmessage = f5;
    do {
    } while (8)
}
new Worker(f0, { type: "function" });
for (let i13 = 0; i13 < 100000; ++i13) {
}
const v19 = {};
