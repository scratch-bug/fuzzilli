function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [1.0,3.015336533083463,-5.923338815966488];
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = F3;
        function f9(a10) {
            function f12(a13) {
                return a13;
            }
            this.onmessage = f12;
            return this;
        }
        const v17 = new Worker(f9, { type: "function" });
        v17.postMessage(v2);
    }
    const v19 = new F3(v2, F0, F3, F0);
    const t17 = v19.b;
    new t17();
}
new F0();
