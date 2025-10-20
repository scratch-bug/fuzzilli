function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        function f4(a5) {
            const v6 = { __proto__: this, [F0]: this };
        }
        this.onmessage = f4;
        new SharedArrayBuffer();
    }
    new Worker(f2, { type: "function" });
}
new F0();
