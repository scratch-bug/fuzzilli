function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [0.3707006462528598];
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9(a10) {
            return F3;
        }
        const v13 = { type: "function" };
        for (let v14 = 0; v14 < 250; v14++) {
        }
        const v15 = new Worker(f9, v13);
        v15.postMessage(v2);
    }
    new F3(F0, F0, this, F0);
}
new F0();
