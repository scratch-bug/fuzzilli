for (let i14 = (() => {
        function f1(a2, a3, a4) {
            this.postMessage(a3);
            this.toString = f1;
            function f7(a8) {
                return a3;
            }
            Object.defineProperty(Float32Array, this, { set: f7 });
            return f7;
        }
        new Worker(f1, { type: "function" });
        return 0;
    })();
    i14 < 20000;
    i14++) {
}
