function f0(a1) {
    function f3(a4) {
        return a1;
    }
    this.onmessage = f3;
    return this;
}
const v8 = new Worker(f0, { type: "function" });
function f9(a10) {
    return v8;
}
const v13 = new Worker(f9, { type: "function" });
v13.terminateAndWait();
