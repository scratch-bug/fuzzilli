function f0(a1, a2, a3) {
    const v23 = {
        construct(a5, a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        return f12;
                    }
                    const v14 = {};
                    v14.set = f12;
                    function f15(a16, a17) {
                        return f15;
                    }
                    this.toString = f15;
                    const v19 = new Proxy(this, v14);
                    try { v19.toString(); } catch (e) {}
                    return f12;
                }
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v21 = new F7();
            v21.toString(a6, a2);
            return f0;
        },
    };
    v23.construct();
    return f0;
}
f0.call(f0, f0, f0, f0);
