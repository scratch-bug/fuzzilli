const v1 = new Set();
const v2 = [-642099.7200750165,-362.6627869548058,1000000.0,4.0,-2.220446049250313e-16,1e-15,-1.5609302395146963e+308];
class C3 extends Set {
    [Set](a5, a6) {
        this.clear();
        return v1;
    }
    constructor(a9, a10) {
        super(v2);
        delete a10?.a;
        try {
        } finally {
        }
    }
}
const v14 = new C3(v2, Set);
new C3(v14, Set);
const v16 = new C3(C3, v2);
new C3(C3, C3);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a21;
}
new F19(v14, v16);
new F19(v14, v14);
new Int32Array(30);
const v31 = Symbol.iterator;
const v46 = {
    [v31]() {
        for (let v34 = 0; v34 < 32; v34++) {
            this["p" + v34] = v34;
        }
        const v38 = Object();
        super.g /= 10;
        try {
        } catch(e39) {
        }
        const v40 = Object.setPrototypeOf(Object, v38);
        v38.constructor;
        v40.getPrototypeOf(v38);
        const v45 = {
            next() {
                return { done: 10 };
            },
        };
        return v45;
    },
};
function f48() {
    new Date(WeakSet, Date, 882, ...v46, ...v46);
}
f48.call();
f48();
%OptimizeFunctionOnNextCall(f48);
f48();
