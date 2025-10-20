for (let i2 = 10, i3 = 10; i3; i3--) {
}
class C9 {
}
function f10() {
    function f11() {
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function F16(a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v20 = [1073741824,3060,257,64667,0,536870888,-2147483647,-11,-1];
        let v21 = 77;
        function F22(a24, a25) {
            if (!new.target) { throw 'must be called with new'; }
            function f26(a27, a28, a29) {
                a27.apply;
                [v21,...F12] = v20;
                return f26;
            }
            f26(C9);
            f26(a24);
            %OptimizeFunctionOnNextCall(f26);
        }
        const v33 = new F22(f11);
        const t26 = v33.constructor;
        new t26(Int32Array);
        const v36 = new F22(F12);
        const t29 = v36.constructor;
        new t29(F16);
    }
    return f11;
}
function f39(a40) {
    return a40;
}
Object.defineProperty(C9, "toString", { configurable: true, enumerable: true, get: f10, set: f39 });
class C41 {
}
const v43 = new BigInt64Array(C41, f39, C41);
v43.slice(C41, C9);
