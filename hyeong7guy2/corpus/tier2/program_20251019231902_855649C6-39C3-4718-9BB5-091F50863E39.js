const v1 = Date();
function f2() {
}
const v4 = class extends f2 {
}
const v5 = new v4();
function f6() {
    return f6;
}
const v9 = Symbol.iterator;
const v32 = {
    [v9]() {
        const v22 = {
            next() {
                for (const v13 of "7") {
                    try { v13.toLocaleUpperCase(); } catch (e) {}
                    const v15 = v9;
                }
                function f16(a17) {
                    return 10;
                }
                try { f16(v1); } catch (e) {}
                class C19 extends f16 {
                }
                try { C19.call(); } catch (e) {}
                v5.h %= 10;
                const v21 = { done: 10 };
                v21.d = v21;
                return v21;
            },
        };
        const v23 = v22.__lookupGetter__;
        let v24;
        try { v24 = v23.apply(10, "7"); } catch (e) {}
        try { v23(Symbol); } catch (e) {}
        const v27 = new Map();
        const v28 = v27.values();
        try { v28.toArray(); } catch (e) {}
        try { v28.reduce(f6); } catch (e) {}
        v28.next(v22, this, v24);
        return v22;
    },
};
function f34() {
    new Date(WeakSet, Date, 882, ...v32, ...v32);
    return f2;
}
f34();
f34.call();
%OptimizeFunctionOnNextCall(f34);
f34();
