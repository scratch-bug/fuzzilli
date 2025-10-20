const v2 = class {
    constructor(a4) {
        const v5 = {};
        v5.e = -5.0;
        v5.g = a4;
        v5.d = a4;
        const v6 = {};
        v6.e = -5.0;
        v6.g = a4;
        v6.c = -1000000000000.0;
    }
}
new v2(-5.0);
const v8 = new v2(-1000000000000.0);
const v10 = Symbol.iterator;
const v19 = {
    [v10]() {
        let v12 = 10;
        const v18 = {
            next() {
                v12--;
                const v16 = v12 == -12;
                return { done: v16 };
            },
        };
        return v18;
    },
};
const v21 = new Uint32Array();
function f22() {
    return v21;
}
class C23 extends f22 {
}
const v24 = new C23();
const t35 = v24.constructor;
const v26 = new t35(v19);
v26.join(v2, v24, -1000000000000.0).toLowerCase(v8);
