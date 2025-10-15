const v1 = class {
    static set b(a3) {
    }
    static f;
    static get e() {
        return this;
    }
}
new v1();
const v6 = new v1();
const v7 = /[\p{Script=Greek}]/iu;
v7 !== 65535 ? v7 : 65535;
const v13 = Symbol.iterator;
const v22 = {
    [v13]() {
        let v15 = 10;
        const v21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                return { done: v19, value: v15 };
            },
        };
        return v21;
    },
};
function hot_func(a25) {
    let val = { p: 42 };
    let i = 0;
    do {
        if (a25) {
            val = 1.1;
        }
    } while (i++ < 0)
    return val.p;
}
let v36 = 0;
while (v36 < 8) {
    const v39 = v36++;
    function* f40(a41, a42, a43, a44) {
        yield* [v6,a43,a41,a42,v7];
        return undefined;
    }
    try { f40(v39, v39, v36, hot_func); } catch (e) {}
}
for (let i48 = 0; i48 < 100000; ++i48) {
    hot_func(false);
}
hot_func(true);
[-1000.0,1.0];
new Set();
new Int32Array(1647);
[-20107,16];
/p(a\1)*/vgyd;
function hot_func(a68) {
    let val = { p: 42 };
    let i = 0;
    do {
        if (a68) {
            val = 1.1;
        }
    } while (i++ < 0)
    return val.p;
}
for (let i80 = 0; i80 < 100000; ++i80) {
}
