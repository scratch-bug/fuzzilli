for (let i1 = 10, i2 = 10; i2; i2--) {
}
class C8 {
}
function f9() {
    function f10() {
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v15 = [1972049685,65535,536870889,4294967295,268435440,47326,-65536];
        let v16 = 431693104;
        function F17(a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            a20.prototype = a20;
            function f21(a22, a23, a24) {
                const v25 = a22.length;
                a23.caller;
                [v16,...F11] = v15;
                return v25;
            }
            f21(v15, f10);
            f21(a19, a20);
            %OptimizeFunctionOnNextCall(f21);
        }
        const v29 = new F17(F11, F17);
        const t25 = v29.constructor;
        new t25(F11, F11);
        new F17(v29, f9);
    }
    return f10;
}
function f33(a34) {
    return a34;
}
Object.defineProperty(C8, "toString", { configurable: true, enumerable: true, get: f9, set: f33 });
class C35 {
}
const v37 = new BigInt64Array(C35, f9, BigInt64Array);
v37.slice(C35, C8);
