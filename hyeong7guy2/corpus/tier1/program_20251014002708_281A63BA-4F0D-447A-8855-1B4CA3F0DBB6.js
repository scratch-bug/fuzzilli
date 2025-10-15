const v1 = new Date();
function f2(a3) {
    return a3;
}
v1.valueOf = f2;
function f4(a5, a6, a7) {
    return a6;
}
const v10 = [v1];
new Worker(f4, { arguments: v10, type: "function" });
