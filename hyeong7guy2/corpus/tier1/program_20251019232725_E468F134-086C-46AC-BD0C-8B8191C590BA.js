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
const v24 = v22.description;
Symbol.for(v24);
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
let v45;
try { v45 = Symbol.keyFor(v36); } catch (e) {}
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
        v45 = 1.1;
        function f65() {
            function f67(a68) {
                /9t?/dygv;
                Array(a61);
                %PrepareFunctionForOptimization(Array);
                Array(a61);
                Array(a61);
                %OptimizeMaglevOnNextCall(Array);
                Array(a61);
            }
            this.onmessage = f67;
            gc();
            %PretenureAllocationSite(v24);
        }
        const v78 = [];
        new Worker(f65, { arguments: v78, type: "function" });
        v62 = { p1: 1.1 };
    }
    const v82 = {};
    const v87 = {
        p: 11,
        p: 1073741824,
        construct: f60,
        p: 11,
        next() {
            v7--;
            return { done: v7, value: v7 };
        },
        q1: v82,
    };
    if (a61) {
        v62.p1;
    }
}
for (let i90 = 0;
    (() => {
        const v92 = i90 < 20000;
        v92 || v92;
        return v92;
    })();
    i90++) {
    const v97 = f60();
    v97 ?? v97;
}
f60(true);
