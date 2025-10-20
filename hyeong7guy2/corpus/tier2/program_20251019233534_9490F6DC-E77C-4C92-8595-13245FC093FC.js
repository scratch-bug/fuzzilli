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
                    try { f19(F9, C0, ...f5, this); } catch (e) {}
                    function f30() {
                        return a28;
                    }
                    function f31(a32) {
                        for (let i35 = 0, i36 = 10; i36; i36--) {
                            const v42 = [10000,1073741825,41722,-9007199254740990,562871514,14,-1073741824,-7,4294967296];
                            const v43 = [4.220462202799492e+307,960699.3672768152,0.0,1.6415958081540465e+308,1.0,-200442.0773325779,-0.0,0.6534319666643899,0.06433014274350057];
                            v43.concat(v42);
                            function F45(a47) {
                                if (!new.target) { throw 'must be called with new'; }
                                try { this(v43); } catch (e) {}
                            }
                            new F45();
                        }
                        return a8;
                    }
                    Object.defineProperty(this, "e", { get: f30, set: f31 });
                }
                const v50 = new F23();
                v50.e = v50;
                return F15;
            }
            f19();
            %OptimizeFunctionOnNextCall(f19);
        }
        new F15();
        return F15;
    }
    f5();
}
new F1();
new F1();
new F1();
