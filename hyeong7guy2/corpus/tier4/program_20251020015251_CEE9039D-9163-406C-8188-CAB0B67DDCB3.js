function f1(a2) {
    function f4(a5) {
        return a5;
    }
    this.onmessage = f4;
    return a2;
}
try {
    Reflect.construct(f1, Worker, Worker);
} catch(e8) {
}
