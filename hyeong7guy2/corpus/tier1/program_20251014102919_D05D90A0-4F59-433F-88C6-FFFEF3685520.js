const v1 = class extends Map {
}
const v2 = [v1,v1,v1];
const v4 = Symbol.iterator;
const v6 = {
    [v4]() {
    },
};
function f8() {
    function f9(a10, a11) {
        const v15 = {
            ...v6,
            [v1](a13, a14) {
            },
        };
        return a10;
    }
    return f9(v2);
}
const v18 = class extends Float32Array {
}
function f19() {
    function F21(a23) {
        if (!new.target) { throw 'must be called with new'; }
        gc({ execution: "async" });
        const t24 = Temporal.PlainYearMonth;
        new t24(0, 0, 1024);
    }
    const v32 = new F21(0);
    return v32;
}
v18.constructor = f19;
try { v18.constructor(); } catch (e) {}
const v35 = {};
Object.defineProperty(v35, Symbol.iterator, { writable: true, enumerable: true, value: f8 });
const v39 = new Int16Array(Symbol, 0, 882);
function f41() {
    return Float32Array;
}
function f42() {
    new Date(WeakSet, Date, 882, ...v39, ...v35);
    return f41;
}
f41[Symbol.toPrimitive] = f42;
for (const v47 in [0]) {
    try { v47.propertyIsEnumerable(f41); } catch (e) {}
}
