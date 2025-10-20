function f0(a1, a2, a3) {
    const v5 = new Date();
    v5.toLocaleString();
    return f0;
}
const v10 = new Worker(f0, { type: "function" });
v10.getMessage();
