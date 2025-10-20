function f0() {
    function f1(a2, a3) {
        return a3;
    }
    const v7 = new Worker(f1, { type: "function" });
    const v8 = v7.terminateAndWait;
    for (let i10 = -39646; i10; i10++) {
    }
    v7.terminateAndWait(f1, v7, v8, v8);
    return f0;
}
const t11 = ({ next: f0 }).next;
t11();
