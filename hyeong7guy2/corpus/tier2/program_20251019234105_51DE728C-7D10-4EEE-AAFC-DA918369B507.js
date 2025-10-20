function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8(a9, a10, a11) {
            function F12(a14, a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function f18() {
                    return F12;
                }
                function f19(a20) {
                    function F21(a23, a24) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f25(a26, a27, a28) {
                            class C29 {
                            }
                            C29.h = f18;
                            C29.h = a24;
                            return a23;
                        }
                        f25();
                    }
                    new F21();
                    for (let i34 = 0, i35 = 10; i35; i35--) {
                        const v41 = [10000,1073741825,41722,-9007199254740990,562871514,14,-1073741824,-7,4294967296];
                        function f42(a43) {
                            return a14;
                        }
                        const v44 = [4.220462202799492e+307,960699.3672768152,0.0,1.6415958081540465e+308,1.0,-200442.0773325779,-0.0,0.6534319666643899,0.06433014274350057];
                        function f45(a46, a47) {
                            a20(f42);
                        }
                        v44.concat(v41);
                        function F50(a52) {
                            if (!new.target) { throw 'must be called with new'; }
                            try { this(v44); } catch (e) {}
                        }
                        new F50(a10);
                    }
                    return a10;
                }
                Object.defineProperty(this, "e", { get: f18, set: f19 });
            }
            const v55 = new F12();
            v55.e = v55;
            return F0;
        }
        f8(F0, this, f8);
        %OptimizeFunctionOnNextCall(f8);
    }
    new F4();
}
const v58 = new F0(F0, F0);
new F0(F0, v58);
new F0();
