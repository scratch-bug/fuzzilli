function f0() {
    function f1(a2) {
        return f0;
    }
    new Worker(f1, { type: "function" });
    return f0;
}
f0();
const v8 = f0();
v8.call();
v8();
