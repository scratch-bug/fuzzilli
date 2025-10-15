function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 extends Float32Array {
    }
    const v7 = new C6();
    const v10 = Symbol.iterator;
    const v16 = {
        [v10]() {
            const v15 = {
                next() {
                    return { done: 10 };
                },
            };
            return v15;
        },
    };
    function f18() {
        new Date(WeakSet, Date, 882, ...v7, ...v16);
        return this;
    }
    f18();
    %OptimizeFunctionOnNextCall(f18);
    f18();
}
const v22 = new F0();
const v23 = new F0();
function f24() {
    try { ("🙌🏿").lastIndexOf(); } catch (e) {}
    return ("🙌🏿").fontsize(f24, f24)[178].localeCompare("🙌🏿");
}
({ construct: f24 }).construct(v23, F0, F0, v22);
