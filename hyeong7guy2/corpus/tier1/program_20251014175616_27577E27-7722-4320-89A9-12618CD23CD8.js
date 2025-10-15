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
            try { this(a18); } catch (e) {}
            function f25() {
                return v5;
            }
            function f26(a27) {
                const v29 = Temporal.PlainDateTime;
                try { v29(-1, a8, -1, a9); } catch (e) {}
                for (let v31 = 0; v31 < 5; v31++) {
                    v4[536870888];
                    const v36 = new Uint8Array(162);
                    v36.setFromHex("CaD5d407bfEFeDf77616cEEEfb073cB99b50adb8b71aC5E2e6472d3F7De96A");
                    const v39 = {
                        get g() {
                            return a19;
                        },
                    };
                }
                v5.length = 3;
                return F6;
            }
            Object.defineProperty(this, "e", { get: f25, set: f26 });
            this.e = -1;
        }
        const v41 = new F15();
        v41.e = v41;
        function f42() {
            class C43 {
            }
            return C43;
        }
        f42.call(-30202);
        return f10;
    }
    f10();
    %OptimizeFunctionOnNextCall(f10);
}
new F6(v4, v4);
new F6();
new F6();
