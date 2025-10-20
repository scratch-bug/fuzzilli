class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function F15(a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            function f19(a20, a21, a22) {
                function F23(a25, a26, a27, a28) {
                    if (!new.target) { throw 'must be called with new'; }
                    try { f19(F9, C0, ...f5); } catch (e) {}
                    function f30() {
                        return F23;
                    }
                    function f31(a32) {
                        function F33(a35, a36) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f37(a38, a39, a40) {
                                class C41 {
                                }
                                C41.h = a36;
                                C41.h = C41;
                                return a35;
                            }
                            f37();
                        }
                        new F33();
                        for (let i46 = 0, i47 = 10; i47; i47--) {
                            const v53 = [10000,1073741825,41722,-9007199254740990,562871514,14,-1073741824,-7,4294967296];
                            function f54(a55) {
                                return f54[4];
                            }
                            const v57 = [4.220462202799492e+307,960699.3672768152,0.0,1.6415958081540465e+308,1.0,-200442.0773325779,-0.0,0.6534319666643899,0.06433014274350057];
                            v57.concat(v53);
                            function F59(a61) {
                                if (!new.target) { throw 'must be called with new'; }
                                try { this(v57); } catch (e) {}
                            }
                            new F59();
                        }
                        return a6;
                    }
                    Object.defineProperty(this, "e", { get: f30, set: f31 });
                }
                const v64 = new F23();
                v64.e = v64;
                return F1;
            }
            f19(F15, F9, F1);
            %OptimizeFunctionOnNextCall(f19);
        }
        new F15(F1, F15);
        return this;
    }
    f5();
}
const v68 = new F1();
new F1();
new F1(v68, C0);
