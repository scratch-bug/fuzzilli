function f0(a1, a2, a3) {
    class C5 {
    }
    Symbol.b = C5;
    for (const v6 in Symbol) {
    }
    return C5;
}
const v10 = new Worker(f0, { type: "function" });
v10.getMessage();
