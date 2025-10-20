class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                function f16(a17) {
                    function f18() {
                        let v20 = ("🙌🏿").constructor;
                        const v21 = v20.fromCharCode(f18);
                        function f22(a23, a24, a25) {
                            f18();
                            Object.defineProperty(this, "b", { writable: true, configurable: true, enumerable: true, get: f18 });
                            [,v20,f18,...a25] = a14;
                            function f27(a28, a29) {
                                return a29;
                            }
                            try { f27(v21, C0); } catch (e) {}
                            return f22;
                        }
                        const v33 = [v21];
                        new Worker(f22, { arguments: v33, type: "function" });
                        return this;
                    }
                    ({ construct: f18 }).construct();
                }
                return f16;
            }
            Object.defineProperty(this, "toString", { get: f15 });
        }
        const v38 = new F11(this, this);
        class C39 {
            static [v38](a41, a42, a43) {
            }
        }
    }
    new F5(this, this, C0, this);
}
new F1();
