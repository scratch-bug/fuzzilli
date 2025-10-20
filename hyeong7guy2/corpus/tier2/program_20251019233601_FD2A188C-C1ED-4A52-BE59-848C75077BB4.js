new Float64Array(2117);
const v4 = Symbol.iterator;
const v39 = {
    [v4]() {
        let v6 = 10;
        const v38 = {
            next() {
                v6--;
                function F9(a11, a12) {
                    if (!new.target) { throw 'must be called with new'; }
                    a12++;
                    this.e = a12;
                }
                function F14(a16, a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v20 = Symbol.iterator;
                    const v21 = {};
                    function F22(a24, a25) {
                        if (!new.target) { throw 'must be called with new'; }
                        Symbol.for(a25.description, a24, a18);
                        const v28 = this.constructor;
                        try { new v28(v20, F22); } catch (e) {}
                    }
                    new F22(v21, v20);
                }
                new F14();
                const v33 = v6 == 0;
                return { done: v33, value: v6 };
            },
            year: 2117,
            p(a36, a37) {
            },
        };
        return v38;
    },
};
v4[0] = Symbol;
for (let i41 = 0; i41 < 20000; i41++) {
    1 > "bigint";
}
const v51 = new WeakMap();
const v52 = [-27310,-10,702386031,-536870912,1073741824,12,8,13921,1073741825];
function F53(a55, a56, a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v51;
    function F59(a61, a62) {
        if (!new.target) { throw 'must be called with new'; }
        function f63(a64, a65, a66) {
            for (let v67 = 0; v67 < 5; v67++) {
                const v69 = v67 % 7;
                v69 / v69;
                v67++;
            }
            return a61;
        }
        f63(a61, f63, a62);
        %OptimizeFunctionOnNextCall(f63);
    }
    const v73 = new F59();
    const t59 = v73.constructor;
    new t59();
    this.e = WeakMap;
    this.b = a55;
}
new F53(F53, v51, Float64Array, v51);
function F78(a80, a81) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v52;
    this.f = a81;
}
new F78(WeakMap, v52);
new BigInt64Array(4);
class C86 {
}
function F88(a90, a91) {
    if (!new.target) { throw 'must be called with new'; }
    const v93 = globalThis.console;
    for (let i96 = 0; i96 < 25000; i96++) {
        Array.prototype.at.apply(true);
    }
    v93.profileEnd();
    try { Temporal(); } catch (e) {}
    v93.profile();
}
new F88();
