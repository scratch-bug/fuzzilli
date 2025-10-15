function f0(a1, a2, a3) {
    function f4(a5, a6) {
        return a6;
    }
    for (let v7 = 0; v7 < 25; v7++) {
        f4(v7, a2);
    }
    return a2;
}
const v12 = new Worker(f0, { type: "function" });
v12.getMessage();
