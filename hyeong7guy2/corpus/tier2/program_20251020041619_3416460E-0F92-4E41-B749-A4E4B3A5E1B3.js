function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = {};
    function f6() {
    }
    function f7() {
        while (9) {
            eval("");
        }
    }
    new Worker(f7, { type: "function" });
    Reflect.construct(f6, Proxy);
}
new F0();
