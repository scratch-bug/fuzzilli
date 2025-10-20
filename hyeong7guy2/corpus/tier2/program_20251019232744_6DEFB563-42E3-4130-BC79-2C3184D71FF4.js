class C2 extends Int32Array {
}
const v5 = Symbol.iterator;
const v21 = {
    [v5]() {
        for (let v8 = 0; v8 < 5; v8++) {
            try { C2(v8, v5, C2, ...Int32Array); } catch (e) {}
        }
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        function F13() {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f15(a16, a17, a18) {
            const t12 = -1;
            t12(F13);
            return a18;
        }
        return v12;
    },
};
function f23() {
    const v24 = new Date(WeakSet, Date, 882, ...v21, ...v21);
    return v24;
}
f23();
f23();
%OptimizeFunctionOnNextCall(f23);
f23();
