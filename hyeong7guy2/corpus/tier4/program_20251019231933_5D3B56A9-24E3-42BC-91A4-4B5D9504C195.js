function f1(a2) {
    const v3 = Symbol.iterator;
    throw v3.__proto__;
    return v3;
}
const v7 = { type: "function" };
new Worker(f1, v7);
function f9(a10) {
    return v7;
}
new Worker(f9, { type: "function" });
