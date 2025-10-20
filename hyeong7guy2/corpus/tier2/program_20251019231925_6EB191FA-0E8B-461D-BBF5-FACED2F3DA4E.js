class C2 {
}
function f3() {
    return C2;
}
const v5 = class extends f3 {
}
const v9 = Symbol.iterator;
const v31 = {
    [v9]() {
        const v23 = {
            next() {
                for (const v13 of "7") {
                    try { v13.padStart(1118213952); } catch (e) {}
                    const v15 = v9;
                    const v16 = v15.description;
                    try { v16.substr(this, this); } catch (e) {}
                    Symbol.for(v16);
                }
                function f19(a20) {
                    return 1118213952;
                }
                class C21 extends f19 {
                }
                v5.h %= 10;
                return { done: 10 };
            },
        };
        try { v23.next(); } catch (e) {}
        const v25 = v23?.apply;
        let v26;
        try { v26 = v25(v23, C2); } catch (e) {}
        try { v23(v26, v25, v26); } catch (e) {}
        try { Map.bind(670574787n); } catch (e) {}
        try { Map(C2); } catch (e) {}
        return v23;
    },
};
function f33() {
    new Date(WeakSet, Date, 882, ...v31, ...v31);
    return C2;
}
f33();
f33.call(v5, f33, 882, Date);
%OptimizeFunctionOnNextCall(f33);
f33();
