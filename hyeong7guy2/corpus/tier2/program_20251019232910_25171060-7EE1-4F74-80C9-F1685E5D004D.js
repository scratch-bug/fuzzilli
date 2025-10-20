function f0() {
    function f1(a2, a3) {
        return f0;
    }
    const v7 = new Worker(f1, { type: "function" });
    for (let v8 = 0; v8 < 50; v8++) {
    }
    v7.terminateAndWait();
    return f0;
}
const v10 = { next: f0 };
v10.next(v10, v10);
const t11 = v10.next;
const t13 = t11();
t13();
