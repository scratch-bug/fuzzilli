const v3 = Symbol.iterator;
const v16 = {
    [v3]() {
        function f7() {
            function f8() {
                const t2 = 10;
                new t2(...arguments);
                return arguments;
            }
            let v11;
            try { v11 = f8(); } catch (e) {}
            return v11;
        }
        f7();
        %OptimizeFunctionOnNextCall(f7);
        const v15 = {
            next() {
                return { done: 10 };
            },
        };
        return v15;
    },
};
const v19 = new Int16Array();
function f20() {
    const v21 = new Date(WeakSet, Date, 882, ...v19, ...v16);
    return v21;
}
f20();
f20();
f20();
