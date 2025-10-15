for (let i1 = 10, i2 = 10; i2; i2--) {
}
class C8 {
}
function f9() {
    function f10() {
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v15 = [1073741824,3060,257,64667,0,536870888,-2147483647,-11,-1];
        let v16 = 77;
        function F17(a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            function f21(a22, a23, a24) {
                [v16,...F11] = v15;
                return f10;
            }
            f21(a19, a20, F11);
            %OptimizeFunctionOnNextCall(f21);
        }
        const v26 = new F17(f10, f9);
        const v27 = new F17(F11, v26);
        new F17(v27, f9);
    }
    return f10;
}
function f29(a30) {
    return f29;
}
Object.defineProperty(C8, "toString", { configurable: true, enumerable: true, get: f9, set: f29 });
class C31 {
}
const v33 = new BigInt64Array(C8);
v33.slice(C31, C8);
