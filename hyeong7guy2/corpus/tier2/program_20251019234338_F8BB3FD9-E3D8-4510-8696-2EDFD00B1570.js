class C2 extends Uint8Array {
}
const v3 = new C2();
function f4() {
    return C2;
}
function f5(a6) {
    if (undefined != f4) {
    }
    return C2;
}
const v10 = [v3];
new Worker(f5, { arguments: v10, type: "function" });
