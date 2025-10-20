function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                function f8(a9, a10) {
                    function f12(a13) {
                    }
                    this.onmessage = f12;
                }
                [a2,a2];
                new Worker(f8, { type: "function" });
                return Worker;
            }
            f7();
            return a6;
        }
        f5();
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
v22.toString(v22, F0, v22, v22, F0);
