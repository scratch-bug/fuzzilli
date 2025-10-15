const v1 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v2 = class {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            F11 ?? a15;
            function f18() {
                return a15;
            }
            function f19(a20) {
                const v23 = Temporal.PlainDateTime;
                try { v23(); } catch (e) {}
                for (let v25 = 0; v25 < 5; v25++) {
                    v25 - v25;
                    let v28 = undefined;
                    const v30 = {
                        get g() {
                            v28 = undefined;
                            return v23;
                        },
                    };
                }
                const v40 = {
                    [1]() {
                    },
                    n(a33, a34, a35) {
                        return a33;
                    },
                    set b(a37) {
                    },
                    [Symbol]() {
                    },
                    next() {
                        return v23;
                    },
                };
                async function* f41(a42, a43, a44, a45) {
                    [DataView,v1,v2,f41];
                    return a8;
                }
                f41(1, a6, Temporal, Temporal);
                for (let v49 = 0; v49 < 5; v49++) {
                    v49 < 20000;
                    v49++;
                }
                class C53 {
                    static get d() {
                    }
                }
                return a8;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
        }
        const v55 = new F11();
        v55.e = v55;
        return F3;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
new F3();
new F3();
new F3();
