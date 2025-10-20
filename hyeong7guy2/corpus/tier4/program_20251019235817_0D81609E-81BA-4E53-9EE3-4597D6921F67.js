const v2 = Symbol.iterator;
const v7 = {
    set c(a4) {
    },
    [v2]() {
        const v6 = { ...this };
    },
};
const v10 = new Int16Array();
function f12() {
    return Symbol;
}
function f13() {
    const v14 = new Date(WeakSet, Date, 882, ...v10, ...v7);
    return v14;
}
f12[Symbol.toPrimitive] = f13;
for (const v18 in [0]) {
    try { v18.propertyIsEnumerable(f12); } catch (e) {}
}
