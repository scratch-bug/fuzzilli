function f1() {
    throw 256;
    return 256;
}
const v4 = { type: "function" };
const v5 = new Worker(f1, v4);
v5.getMessage(v5, Worker, v4);
