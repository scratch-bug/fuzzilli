class C0 {
}
for (let i2 = 10, i3 = 10; i3; i3--) {
}
class C9 {
}
function f10() {
    function f11() {
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
        }
        Object.defineProperty(F12, "entries", { value: C0 });
        const v16 = [1972049685,65535,536870889,4294967295,268435440,47326,-65536];
        let v17 = 431693104;
        function F18(a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            a21.prototype = a21;
            function f22(a23, a24, a25) {
                a23.entries;
                a24.caller;
                [v17,...F12] = v16;
                return F18;
            }
            f22(v16, f11);
            f22(a20, a21);
            %OptimizeFunctionOnNextCall(f22);
        }
        const v30 = new F18(F12, F18);
        const v31 = v30.constructor;
        new v31(f11, f11);
        new v31(F12, F12);
        new F18(v30, f10);
    }
    return f11;
}
function f35(a36) {
    return C0;
}
Object.defineProperty(C9, "toString", { configurable: true, enumerable: true, get: f10, set: f35 });
class C37 {
}
const v39 = new BigInt64Array();
v39.slice(C37, C9);
