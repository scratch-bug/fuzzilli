const v1 = Symbol.iterator;
Symbol.for(v1.description);
const v7 = new Proxy(Symbol, { apply: Symbol, ownKeys: Symbol, set: Symbol, setPrototypeOf: Symbol });
v7.a = v7;
const v15 = {
    [v1]() {
        let v9 = 10;
        const v14 = {
            next() {
                v9--;
                const v13 = { done: 0, value: v9 };
            },
        };
    },
};
const v18 = new Uint8Array(11);
v18.g = v18;
class C19 {
    set a(a21) {
    }
}
try { Symbol.keyFor(v15); } catch (e) {}
const v25 = Symbol.iterator;
const v33 = {
    [v25]() {
        const v32 = {
            next() {
                10 == 0;
                return { value: 10 };
            },
        };
    },
};
const v34 = C19.__defineGetter__;
try { new v34(); } catch (e) {}
new C19();
const v37 = new C19();
v37.__lookupGetter__;
function f39(a40) {
    let v41 = undefined;
    if (a40) {
        v41 = { p1: 1.1 };
    }
    const v44 = {};
    const v45 = { q1: v44 };
    if (a40) {
        v41.p1;
    }
}
for (let i48 = 0;
    (() => {
        const v50 = i48 < 20000;
        v50 || v50;
        return v50;
    })();
    i48++) {
    const v55 = f39();
    v55 ?? v55;
}
f39(true);
