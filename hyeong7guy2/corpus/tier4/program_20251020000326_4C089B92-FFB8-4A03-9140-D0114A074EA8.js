function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = [0.3707006462528598];
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11) {
            this.onmessage = Map;
            return v3;
        }
        const v16 = new Worker(f10, { type: "function" });
        this.b = a7;
        v16.postMessage(v3);
    }
    const v18 = new F4(v3, F4);
    const v19 = v18.b;
    new v19(Map, v19, v19, this, F1);
}
new F1();
