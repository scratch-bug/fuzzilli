const v2 = [456.6273520076486,4.0,-7.944749415305164e+307];
function f3() {
    return 127;
}
new Array(255);
let v7 = 9007199254740992;
const v8 = class extends f3 {
    static get d() {
        return this;
    }
    #b;
}
new v8();
class C12 {
    static set g(a14) {
        v8.__proto__ = this;
    }
    static g;
    static get a() {
        return v2;
    }
}
globalThis.obj = { a: 1.1 };
globalThis.obj;
new C12();
const v22 = Symbol.iterator;
Symbol.for(v22.description);
const v28 = new Proxy(Symbol, { apply: Symbol, ownKeys: Symbol, set: Symbol, setPrototypeOf: Symbol });
v28.a = v28;
const v36 = {
    [v22]() {
        let v30 = 10;
        const v35 = {
            next() {
                v30--;
                const v34 = { done: 0, value: v30 };
            },
        };
    },
};
const v39 = new Uint8Array(11);
v39.g = v39;
class C40 {
    set a(a42) {
    }
}
try { Symbol.keyFor(v36); } catch (e) {}
const v46 = Symbol.iterator;
const v54 = {
    [v46]() {
        const v53 = {
            next() {
                10 == 0;
                return { value: 10 };
            },
        };
    },
};
const v55 = C40.__defineGetter__;
try { new v55(); } catch (e) {}
new C40();
const v58 = new C40();
v58.__lookupGetter__;
function f60(a61) {
    let v62 = undefined;
    if (a61) {
        v62 = { p1: 1.1 };
    }
    const v65 = {};
    const v70 = {
        p: 11,
        p: 1073741824,
        construct: f60,
        p: 11,
        next() {
            v7--;
            return { done: v7, value: v7 };
        },
        q1: v65,
    };
    if (a61) {
        v62.p1;
    }
}
for (let i73 = 0;
    (() => {
        const v75 = i73 < 20000;
        v75 || v75;
        return v75;
    })();
    i73++) {
    const v80 = f60();
    v80 ?? v80;
}
f60(true);
