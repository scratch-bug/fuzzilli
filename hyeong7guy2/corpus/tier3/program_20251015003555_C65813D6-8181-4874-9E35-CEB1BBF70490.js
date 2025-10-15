function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 4294967297;
    this.c = 4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new Date();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = Date;
}
const v13 = new F8(v5, v5, v4);
function f14() {
    function F15(a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        function f19() {
            function f20(a21) {
                function F22(a24, a25) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v26 = F22.toString();
                v26.charCodeAt(f20, f20, v26);
            }
            f20.call(F15, a17, f20, F15, f20);
            f20(a18);
            %OptimizeMaglevOnNextCall(f20);
            return f20;
        }
        Object.defineProperty(this, "toString", { get: f19 });
    }
    const v30 = new F15(F15, F15);
    class C31 {
        static [v30](a33, a34, a35) {
        }
    }
    return v13;
}
const v41 = {
    get f() {
        try {
            super.toString();
        } catch(e40) {
        }
        return -616028310n;
    },
};
const v43 = new Int32Array(10);
try { F8.seal(v43); } catch (e) {}
function F46(a48, a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a48;
}
new F46(v5, v3, v3, v5);
new F46(v5, v7, v3, v5);
for (let v55 = 0; v55 < 5; v55++) {
    v55 < 20000;
    v55++;
}
257 !== 0;
const v63 = class {
}
try { v63(); } catch (e) {}
new Uint16Array("318627056");
const v69 = {};
const v70 = {};
268435441n << 268435441n;
