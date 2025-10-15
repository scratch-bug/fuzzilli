const v1 = new Map();
const v4 = class extends Map {
}
const v5 = class {
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    let v7 = this;
    function f10(a11, a12, a13) {
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            v1.size = -30202;
            [v7] = v1;
            delete Symbol.unscopables;
            new Int8Array();
            function f24() {
                return a9;
            }
            function f25(a26) {
                const v28 = Temporal.PlainDateTime;
                try { v28(-1, a8); } catch (e) {}
                for (let v30 = 0; v30 < 5; v30++) {
                    v4[536870888];
                    const v35 = new Uint8Array(162);
                    v35.setFromHex("CaD5d407bfEFeDf77616cEEEfb073cB99b50adb8b71aC5E2e6472d3F7De96A");
                    const v38 = {
                        get g() {
                            return a19;
                        },
                    };
                }
                v5.length = 3;
                return F6;
            }
            Object.defineProperty(this, "e", { get: f24, set: f25 });
            this.valueOf = f25;
            this.e = -1;
        }
        new F15();
        function f41() {
            class C42 {
            }
            return C42;
        }
        return f41.call();
    }
    f10();
    %OptimizeFunctionOnNextCall(f10);
}
const v45 = new F6(v4);
new F6(v1, F6);
new F6(v45, -30202);
