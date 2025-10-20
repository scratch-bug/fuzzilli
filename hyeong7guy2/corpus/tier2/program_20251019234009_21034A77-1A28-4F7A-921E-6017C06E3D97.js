function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
        }
        function f12(a13) {
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function f18(a19, a20, a21) {
                    function F23(a25, a26, a27, a28) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f29() {
                        }
                        function f30(a31) {
                            function f32(a33, a34, a35) {
                                function f36() {
                                    return f36;
                                }
                                function F38(a40, a41) {
                                    if (!new.target) { throw 'must be called with new'; }
                                    String.prototype.concat.apply("function", []);
                                }
                                const v47 = new F38();
                                return v47;
                            }
                            function F48(a50, a51) {
                                if (!new.target) { throw 'must be called with new'; }
                                function f52(a53) {
                                    return a50;
                                }
                                f52(F48);
                            }
                            new F48();
                            f32();
                            f32();
                        }
                        Object.defineProperty(this, "e", { get: f29, set: f30 });
                        this.e = -1;
                    }
                    new F23();
                }
                f18();
                %OptimizeFunctionOnNextCall(f18);
            }
            const v60 = new F14();
            new F14(F0, v60);
        }
        Object.defineProperty(this, "e", { get: f11, set: f12 });
        this.e = -1;
    }
    new F5();
}
new F0();
new F0();
