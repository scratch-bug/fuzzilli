const v0 = class {
}
const v1 = class {
}
function f2(a3, a4) {
    let v5 = "0O3z";
    v5 |= v5;
    return v5;
}
v1.constructor = f2;
const v9 = Symbol.iterator;
const v17 = {
    [v9]() {
        const v16 = {
            next() {
                const v13 = { done: 10000 };
                const v14 = v1.constructor;
                v14(this, v14, v13);
                return v13;
            },
        };
        return v16;
    },
};
const v19 = new Int16Array();
function f20() {
    const v21 = new Date(v0, Date, -128, ...v19, ...v17);
    return v21;
}
f20();
f20();
%OptimizeFunctionOnNextCall(f20);
f20();
