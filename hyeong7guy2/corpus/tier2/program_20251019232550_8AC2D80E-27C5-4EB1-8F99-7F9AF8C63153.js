function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                const v14 = Array(262144);
                gc.call();
                function f17(a18) {
                    return F0;
                }
                f17.constructor(v14);
                return v14;
            }
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v20 = new F8();
        class C21 {
            static [v20](a23, a24, a25) {
            }
        }
        return a7;
    }
    const v29 = new Worker(f4, { type: "function" });
    v29.getMessage();
}
new F0(F0);
