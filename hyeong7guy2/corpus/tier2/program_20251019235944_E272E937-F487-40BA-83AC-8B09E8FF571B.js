function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Symbol.iterator;
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function F16(a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f20() {
                        const v21 = { a: v5 };
                        const t12 = JSON.stringify;
                        t12(v21);
                        for (let i27 = 0, i28 = 10; i28; i28--) {
                        }
                        function f34(a35) {
                        }
                        return f34;
                    }
                    Object.defineProperty(this, "toString", { get: f20 });
                }
                const v36 = new F16();
                class C37 {
                    static [v36](a39, a40, a41) {
                    }
                }
            }
            new F12();
            return Date;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v43 = new F7(v5, F0);
    class C44 {
        static [v43](a46, a47, a48) {
        }
    }
}
new F0(F0, F0);
new F0();
