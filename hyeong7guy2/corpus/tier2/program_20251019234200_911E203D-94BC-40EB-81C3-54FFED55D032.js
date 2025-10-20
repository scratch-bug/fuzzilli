for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v10 = new Map();
const v14 = Symbol.iterator;
const v31 = {
    [v14]() {
        for (let v17 = 0; v17 < 5; v17++) {
        }
        const v26 = {
            next() {
                const v19 = { done: 10 };
                let v20 = v10.has(10);
                function F21(a23, a24) {
                    if (!new.target) { throw 'must be called with new'; }
                    v20--;
                }
                return v19;
            },
        };
        try {
        const t0 = "🙌🏿";
        t0("🙌🏿", v26, v14, Map);
        } catch (e) {}
        let v29;
        try { v29 = ("🙌🏿").filter(); } catch (e) {}
        v29 ?? v29;
        return v26;
    },
};
function f33() {
    const v34 = new Date(WeakSet, Date, 882, ...v10, ...v31);
    let v35;
    try { v35 = v34.getUTCSeconds(); } catch (e) {}
    return v35;
}
f33.call();
f33();
%OptimizeFunctionOnNextCall(f33);
f33();
