let v0 = 1462;
function f1() {
    const v6 = {
        next() {
            this.c = v0--;
            return this;
        },
        type: "function",
    };
    new Worker(f1, v6);
    return v0;
}
f1();
