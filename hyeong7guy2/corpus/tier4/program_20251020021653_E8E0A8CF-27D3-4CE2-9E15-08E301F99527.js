function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [1.0,3.015336533083463,-5.923338815966488];
    v2[1] = v2;
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = F3;
        function f9(a10) {
            function f12(a13) {
                return a13;
            }
            this.onmessage = f12;
            return a10;
        }
        const v17 = new Worker(f9, { type: "function" });
        v17.postMessage(v2);
    }
    const v19 = new F3();
    const t18 = v19.b;
    new t18(v2);
}
new F0();
