function f0() {
    return f0;
}
class C1 extends f0 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
            }
            function f19(a20) {
                function f21(a22, a23, a24) {
                }
                function F25(a27, a28) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f29(a30, a31, a32) {
                        for (let i = 0; i < 5; i++) {
                            const v34 = {};
                            [];
                        }
                        return f21;
                    }
                    [-Infinity,-1.3732131131445796e+308,6.318487400040212,-1000000000000.0,0.7110294938859892,1.0,208901.7668406295,-3.0,1e-15];
                    const v40 = {
                        construct(a38, a39) {
                        },
                    };
                    f29();
                }
                new F25();
                new F25();
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12();
        function F45(a47, a48, a49, a50) {
            if (!new.target) { throw 'must be called with new'; }
            function f51() {
            }
            function f52(a53) {
                ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match(a53);
            }
            Object.defineProperty(this, "e", { get: f51, set: f52 });
        }
        new F45();
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
new F3();
const v59 = new F3();
new F3(v59, f0);
