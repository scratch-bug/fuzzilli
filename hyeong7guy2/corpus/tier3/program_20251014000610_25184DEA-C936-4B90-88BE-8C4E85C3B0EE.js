function f0(a1, a2, a3) {
    a1 == a1;
    return a1;
}
const v7 = { type: "function" };
v7.type;
const v9 = new Worker(f0, v7);
v9.getMessage();
gc();
