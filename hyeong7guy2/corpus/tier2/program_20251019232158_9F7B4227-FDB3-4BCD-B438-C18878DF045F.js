function f0() {
    function f1(a2, a3) {
        const v5 = eval();
        f1(f1++);
        return v5;
    }
    new Worker(f1, { type: "function" });
    return f1;
}
({ next: f0 }).next();
