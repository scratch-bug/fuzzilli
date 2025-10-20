function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = [1.0,3.015336533083463,-5.923338815966488];
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = F4;
        function f10(a11) {
            function f13(a14) {
                return 122;
            }
            this.onmessage = f13;
            return 122;
        }
        const v18 = new Worker(f10, { type: "function" });
        v18.postMessage(v3);
    }
    const v20 = new F4(F1, F1, this, this);
    const t17 = v20.b;
    new t17(v20, v3, 122);
}
new F1();
