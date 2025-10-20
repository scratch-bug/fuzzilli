for (let i1 = 10, i2 = 10; i2; i2--) {
}
class C8 {
}
function f9() {
    function f10() {
        const v11 = [1073741824,3060,257,64667,0,536870888,-2147483647,-11,-1];
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16(a17, a18, a19) {
                v11.keys().next();
                return a14;
            }
            f16(this, v11, F12);
            %OptimizeFunctionOnNextCall(f16);
        }
        const v23 = new F12();
        const t17 = v23.constructor;
        new t17();
        new F12();
    }
    return f10;
}
function f27(a28) {
    return a28;
}
Object.defineProperty(C8, "toString", { configurable: true, enumerable: true, get: f9, set: f27 });
class C29 {
}
const v31 = new BigInt64Array();
v31.slice(C29, C8);
