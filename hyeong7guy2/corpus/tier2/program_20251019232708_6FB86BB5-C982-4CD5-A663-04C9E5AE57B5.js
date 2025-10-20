function f0() {
    function f1(a2, a3) {
        return a2;
    }
    const v6 = { type: "function" };
    const v7 = new Worker(f1, v6);
    v7.terminateAndWait(f0, Worker, f1, v6, f0);
    return v7;
}
const v9 = { next: f0 };
const v10 = v9.next();
v10.terminateAndWait(v10, v9);
