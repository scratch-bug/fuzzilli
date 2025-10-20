const v0 = class {
}
const v4 = Symbol.iterator;
const v34 = {
    [v4]() {
        const v7 = [-5.0,3.0,-2.0,0.6214030410428262,1e-15,0.6074033746017355,2.0,2.2250738585072014e-308,2.220446049250313e-16];
        class C8 {
            constructor(a10, a11) {
                a11[3] = a11;
                function F12(a14, a15, a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                    a14[1];
                }
                function f20(a21, a22) {
                    const v24 = new F12(arguments);
                    const t10 = v24.constructor;
                    const v26 = new t10(v7);
                    return v26;
                }
                const t14 = f20(v7, Uint8Array).constructor;
                new t14(F12);
            }
        }
        new C8(Symbol, v7);
        const v33 = {
            next() {
                return { done: 10 };
            },
        };
        return v33;
    },
};
const v36 = new Int16Array();
function f37() {
    new Date(v0, Date, 2, ...v36, ...v34);
    return v4;
}
f37();
%PrepareFunctionForOptimization(f37);
%OptimizeFunctionOnNextCall(f37);
f37();
