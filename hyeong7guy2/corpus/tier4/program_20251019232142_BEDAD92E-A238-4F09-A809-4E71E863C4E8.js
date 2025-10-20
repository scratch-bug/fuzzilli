function f0(a1, a2, a3) {
    function f4(a5, a6) {
        -a5;
        return a5 >> a5;
    }
    for (let v9 = 0; v9 < 10; v9++) {
        f4();
    }
    return f0;
}
const v14 = new Worker(f0, { type: "function" });
v14.getMessage();
