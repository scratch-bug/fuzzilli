function f0(a1, a2, a3) {
    for (let v4 = 0; v4 < 250; v4++) {
        "p" + v4;
    }
    return a1;
}
const v10 = new Worker(f0, { type: "function" });
v10.getMessage(Worker);
