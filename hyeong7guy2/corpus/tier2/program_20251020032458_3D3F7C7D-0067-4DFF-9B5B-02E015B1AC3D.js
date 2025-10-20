function f0() {
    return f0;
}
const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        try { this(); } catch (e) {}
        const v8 = [0.412802920877953];
        v8.length = 10;
        v8.find(f0);
        const v12 = {
            next() {
                return { done: 10 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array(v13, 882, 882);
function f17() {
    const v18 = new Date(WeakSet, Date, 882, ...v16, ...v13);
    try { v18.setUTCMinutes(882, 882); } catch (e) {}
}
f17.call();
f17();
%OptimizeFunctionOnNextCall(f17);
for (let i24 = 0, i25 = 10; i25; i25--) {
}
f17();
