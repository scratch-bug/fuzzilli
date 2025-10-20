const v1 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9(a10) {
                function F11(a13, a14) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F17(a19, a20, a21, a22) {
                        if (!new.target) { throw 'must be called with new'; }
                        try { new F17(a22, a22, 3691, 1); } catch (e) {}
                        for (let i = 0; i < 5; i++) {
                            function F24(a26, a27) {
                                if (!new.target) { throw 'must be called with new'; }
                                eval();
                            }
                            a20 & a20;
                        }
                    }
                    new F17(3691, 1, F11);
                }
                new F11();
                return F5;
            }
            f9();
        }
        new F5();
    }
    const v35 = Symbol.iterator;
    a3.bind(null, ...{ [v35]: f4 });
}
const v41 = { type: "function" };
Object.defineProperty(v41, "arguments", { writable: true, enumerable: true, value: v1 });
new Worker(f2, v41);
for (let i44 = 0; i44 < 20000; i44++) {
}
