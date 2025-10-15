function f0(a1) {
    function f3(a4) {
        return a4;
    }
    this.onmessage = f3;
    function f5(a6, a7) {
        return f3;
    }
    new Worker(f5, { type: "function" });
}
new Worker(f0, { type: "function" });
function f16(a17) {
}
class C18 extends f16 {
}
gc();
