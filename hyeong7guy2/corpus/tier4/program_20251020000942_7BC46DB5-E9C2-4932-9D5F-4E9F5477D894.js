function f0(a1, a2, a3) {
    function f4(a5, a6) {
        a5.push(...a6);
        return a5;
    }
    for (let v8 = 0; v8 < 25; v8++) {
        f4([v8], []);
    }
    return f0;
}
const v15 = new Worker(f0, { type: "function" });
v15.getMessage(Worker);
