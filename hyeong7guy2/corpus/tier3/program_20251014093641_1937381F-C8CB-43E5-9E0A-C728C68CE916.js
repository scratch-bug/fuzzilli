function f1(a2, a3, a4) {
    function f5(a6, a7) {
        return a4 - 15;
    }
    for (let v9 = 0; v9 < 10; v9++) {
        f5();
    }
    return a3;
}
const v14 = new Worker(f1, { type: "function" });
v14.getMessage();
