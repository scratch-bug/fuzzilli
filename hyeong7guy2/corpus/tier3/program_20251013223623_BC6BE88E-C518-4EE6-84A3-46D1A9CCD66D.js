function f1() {
    return f1;
}
const v4 = { type: "function" };
v4.flushDenormals = 1;
new Worker(f1, v4);
