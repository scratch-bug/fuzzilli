class C1 {
}
class C2 {
}
const v4 = class {
}
function f5() {
    ({"DateTimeFormat":C2,} = Intl);
    return C2().formatToParts.call(C1);
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
