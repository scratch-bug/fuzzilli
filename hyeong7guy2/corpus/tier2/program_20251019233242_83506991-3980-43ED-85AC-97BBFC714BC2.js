const v3 = Symbol.iterator;
const v16 = {
    [v3]() {
        function f6() {
            return ("🙌🏿").replaceAll("🙌🏿", "🙌🏿").toUpperCase().codePointAt(10);
        }
        ({ construct: f6 }).construct();
        const v15 = {
            next() {
                return { done: 10 };
            },
        };
        return v15;
    },
};
function f18() {
    const v19 = new Date(WeakSet, Date, 882, ...v16, ...v16);
    return v19;
}
f18();
f18.call();
%OptimizeFunctionOnNextCall(f18);
f18();
