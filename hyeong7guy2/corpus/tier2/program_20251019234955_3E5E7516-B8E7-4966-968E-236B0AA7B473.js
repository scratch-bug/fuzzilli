function f1() {
    return Uint32Array;
}
Set.toString = f1;
const v4 = class {
}
function f5() {
    const v7 = Intl.DateTimeFormat;
    v7("os", { hourCycle: Set });
    return f1;
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
