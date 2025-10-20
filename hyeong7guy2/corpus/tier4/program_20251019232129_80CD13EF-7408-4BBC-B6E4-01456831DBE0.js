class C0 {
}
function f1() {
    function f2() {
        function f4(a5) {
            return this;
        }
        this.onmessage = f4;
        delete this.onmessage;
        return f2;
    }
    const v10 = new Worker(f2, { type: "function" });
    v10.getMessage();
    return C0;
}
C0.constructor = f1;
const v12 = C0.constructor;
v12(v12, f1, v12);
