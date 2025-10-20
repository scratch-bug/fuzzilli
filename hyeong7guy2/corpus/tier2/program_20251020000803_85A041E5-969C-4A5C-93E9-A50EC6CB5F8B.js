function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = Array(65536);
    function f10() {
        return Array;
    }
    function f11() {
        function f12() {
            Array(1048576);
            return { done: true };
        }
        return { next: f12 };
    }
    const v19 = Symbol.iterator;
    f10.bind(null, ...{ [v19]: f11 });
    function f23(a24, a25, a26) {
        return a24;
    }
    const v29 = ["object",v8];
    new Worker(f23, { arguments: v29, type: "function" });
    gc(a5);
}
new F0();
for (let i37 = 0, i38 = 10; i38; i38--) {
}
