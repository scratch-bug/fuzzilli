function f0(a1, a2, a3) {
    return a1;
}
const v7 = new Worker(f0, { type: "function" });
for (let v8 = 0; v8 < 250; v8++) {
}
v7.getMessage();
