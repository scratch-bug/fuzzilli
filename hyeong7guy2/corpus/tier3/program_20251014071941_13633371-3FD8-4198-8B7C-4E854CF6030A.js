function f0(a1, a2, a3) {
    return a2;
}
const v6 = { type: "function" };
const v7 = new Worker(f0, v6);
v7.getMessage("function", v7.terminate(v7, Worker, v6), Worker, Worker);
