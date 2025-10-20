let v0 = 1462;
function f1() {
    const v8 = {
        next() {
            eval("function");
            this.c = v0--;
            return eval;
        },
        type: "function",
    };
    new Worker(f1, v8);
    return "function";
}
f1();
