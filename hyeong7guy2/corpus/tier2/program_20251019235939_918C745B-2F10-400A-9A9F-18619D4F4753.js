function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [0.3707006462528598];
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9(a10) {
            function f12(a13) {
                return F0;
            }
            this.onmessage = f12;
            return a6;
        }
        const v17 = new Worker(f9, { type: "function" });
        this.b = a6;
        v17.postMessage(v2);
    }
    const v19 = new F3(v2, F3);
    const t17 = v19.b;
    new t17();
}
new F0();
