class C0 {
}
const v3 = class {
}
function f4() {
    ({"DateTimeFormat":C0,} = Intl);
    const t6 = C0(v3).formatToParts;
    t6();
    return Intl;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
