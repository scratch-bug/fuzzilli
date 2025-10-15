function f0(a1, a2) {
    return f0;
}
const v5 = { type: "function" };
const v6 = new Worker(f0, v5);
const v7 = v6.getMessage;
try { new v7(v5, v7, "function"); } catch (e) {}
