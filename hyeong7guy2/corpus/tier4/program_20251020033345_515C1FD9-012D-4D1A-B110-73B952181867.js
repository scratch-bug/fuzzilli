function f0(a1, a2, a3) {
    /k3^/vi.test(a1);
    return f0;
}
const v9 = new Worker(f0, { type: "function" });
v9.getMessage();
