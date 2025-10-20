const v4 = Symbol.iterator;
const v32 = {
    [v4]() {
        const v7 = [-5.0,3.0,-2.0,0.6214030410428262,1e-15,0.6074033746017355,2.0,2.2250738585072014e-308,2.220446049250313e-16];
        class C8 {
            constructor(a10, a11) {
                function F12(a14, a15, a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                    a14[1];
                }
                function f20(a21, a22) {
                    const v24 = new F12(arguments);
                    const t9 = v24.constructor;
                    new t9(v7);
                    return a10;
                }
                f20(v7, Uint8Array);
            }
        }
        new C8();
        const v31 = {
            next() {
                return { done: 10 };
            },
        };
        return v31;
    },
};
const v34 = new Int16Array();
function f35() {
    const v36 = new Date(WeakSet, Date, 882, ...v34, ...v32);
    return v36;
}
f35();
%PrepareFunctionForOptimization(f35);
%OptimizeFunctionOnNextCall(f35);
f35();
