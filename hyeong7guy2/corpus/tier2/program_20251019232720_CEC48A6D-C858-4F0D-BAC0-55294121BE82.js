function f0() {
    return f0;
}
const v4 = Symbol.iterator;
const v14 = {
    [v4]() {
        Object.setPrototypeOf(Object, Object());
        Object.defineProperty([-886799.3532255791,-5.0,-133943.78511945962,-80.9159366568806,Infinity,0.0,1e-15,3.3068205033477778,-2.220446049250313e-16,-1.7976931348623157e+308], "valueOf", { writable: true, enumerable: true, value: f0 });
        Object.__proto__ = Date;
        const v13 = {
            next() {
                return { done: 10 };
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    new Date(WeakSet, Date, 882, ...v17, ...v14);
    return 882;
}
f18.call(f0, Date, v4);
f18();
%OptimizeFunctionOnNextCall(f18);
f18();
