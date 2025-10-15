for (let v0 = 0; v0 < 100; v0++) {
    function f2(a3) {
        return a3;
    }
    this.onmessage = f2;
    delete this.onmessage;
}
