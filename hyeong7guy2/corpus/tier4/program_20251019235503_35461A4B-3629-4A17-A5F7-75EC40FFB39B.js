function f0(a1) {
    function f2() {
        eval(a1);
        return f0();
    }
    eval(a1);
    return f0;
}
new Worker(f0, { type: "function" });
