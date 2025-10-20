function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -47309;
    this.c = -47309;
    this.b = -47309;
}
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
}
const v10 = new F6();
new F6(-4n, v10);
function f12() {
    return true;
}
[-2147483648,255,-3,-11,-4096,8,-65535];
/z\u{12345}/gvi;
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    function f20() {
        function f21(a22) {
            const v23 = [693913.4712015034,-314050.5385797281];
            function F24(a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                function f28(a29, a30, a31) {
                }
                new Worker(f28, { type: "function" });
                function f36() {
                    function f37(a38) {
                        const v40 = -639820461 * a26;
                        const t31 = v23.constructor;
                        t31(v40, F24);
                    }
                    %OptimizeMaglevOnNextCall(f37);
                    return f37;
                }
                Object.defineProperty(this, "toString", { get: f36 });
            }
            const v43 = new F24();
            v43.toString();
            function f45(a46) {
            }
            for (let i48 = 0;
                (() => {
                    const v50 = i48 < 20000;
                    v50 || f45;
                    return v50;
                })();
                i48++) {
                function f55(a56, a57, a58, a59) {
                    function f60(a61, a62, a63) {
                    }
                    return f45;
                }
                f55(a19, v43);
            }
            eval();
        }
        f21();
        return f21;
    }
    Object.defineProperty(this, "toString", { get: f20 });
}
const v68 = new F16();
class C69 {
    static [v68](a71, a72, a73) {
    }
}
