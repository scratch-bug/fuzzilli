function f0() {
    return f0;
}
function f2(a3, a4, a5) {
    return f0;
}
const v8 = [f0,f0,true];
new Worker(f2, { arguments: v8, type: "function" });
