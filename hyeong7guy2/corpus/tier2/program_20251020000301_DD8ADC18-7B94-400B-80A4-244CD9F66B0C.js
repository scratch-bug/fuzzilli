class C0 {
}
const v4 = new Float64Array(C0, 255, 9);
function f5() {
}
const v7 = class extends f5 {
}
const v8 = new v7();
v8.h = 255;
function f9() {
    return f9;
}
const v13 = Symbol.iterator;
const v50 = {
    [v13]() {
        const v25 = {
            next() {
                for (const v17 of "7") {
                    const v18 = v13;
                    Symbol.for(v18.description);
                }
                function f21(a22) {
                    return 10;
                }
                class C23 extends f21 {
                }
                v8.h %= 10;
                return { done: 10 };
            },
        };
        const v26 = v25.__lookupGetter__;
        const v27 = v26?.apply;
        let v28;
        try { v28 = v27(v26, C0); } catch (e) {}
        let v29;
        try { v29 = v26(); } catch (e) {}
        let v31;
        try { v31 = Map(C0); } catch (e) {}
        const v32 = new Map();
        function f33(a34, a35, a36, a37) {
            const v38 = { __proto__: v4, 9: C0 };
        }
        f33(C0, C0, v29, 9);
        f33(v26, v29, 10, C0);
        f33(v29, v13, v28, 255);
        f33(C0, v29, 10, 10);
        f33(v27, f33(C0, C0, v26, 10), v31, 10);
        const v45 = v32.values();
        try { v45.some(v26); } catch (e) {}
        let v47;
        try { v47 = v45.reduce(f9); } catch (e) {}
        v47 ?? v47;
        v45.next(v45, v45, v47);
        return v25;
    },
};
function f52() {
    new Date(WeakSet, Date, 882, ...v50, ...v50);
    return C0;
}
f52();
f52.call();
%OptimizeFunctionOnNextCall(f52);
f52();
