function f1() {
    return f1;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v6 = { next: f3 };
    function F7(a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function F17(a19, a20, a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                function f23() {
                    return a19;
                }
                function f24(a25) {
                    function f27() {
                        return F7;
                    }
                    WebAssembly.compileStreaming().catch(f27);
                    return globalThis.console.trace();
                }
                Object.defineProperty(this, "e", { get: f23, set: f24 });
                this.e = -1;
            }
            new F17(-1, this, -1, -1);
        }
        new F12();
    }
    new F7(F7, f3, F7);
    return v6;
}
const v36 = Symbol.iterator;
f1.bind(null, ...{ [v36]: f2 });
