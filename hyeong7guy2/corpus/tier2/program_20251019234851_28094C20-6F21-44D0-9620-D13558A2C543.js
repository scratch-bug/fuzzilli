class C0 {
}
const v4 = new Float64Array();
function f5() {
    return 255;
}
const v7 = class extends f5 {
}
const v8 = new v7();
v8.h = 255;
function f9() {
    return Float64Array;
}
const v13 = Symbol.iterator;
const v49 = {
    [v13]() {
        const v25 = {
            next() {
                for (const v17 of "7") {
                    const v18 = v13;
                    const v19 = v18.description;
                    Symbol.for(v19, this, v19);
                }
                function f21(a22) {
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
            return a35;
        }
        f33(C0, C0, v29, 9);
        f33(v26, v29, 10, C0);
        f33(v29, v13, v28, 255);
        f33(C0, v29, 10, 10);
        f33(v27, f33(C0, C0, v26, 10), v31, 10);
        const v45 = v32.values();
        v45.some(v26);
        let v47;
        try { v47 = v45.reduce(f9); } catch (e) {}
        v45.next(v45, v45, v47);
        return v25;
    },
};
function f51() {
    const v52 = new Date(WeakSet, Date, 882, ...v49, ...v49);
    return v52;
}
f51.call(f5, f51, f51(), Symbol);
%OptimizeFunctionOnNextCall(f51);
f51();
