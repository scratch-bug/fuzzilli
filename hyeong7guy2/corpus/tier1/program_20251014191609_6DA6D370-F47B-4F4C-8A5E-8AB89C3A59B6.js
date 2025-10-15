function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return a6;
    }
    this[Symbol.toPrimitive] = f7;
}
const v10 = new F2(-4096n, 4n, -4096n);
const v12 = class {
}
function f13() {
    const v15 = Intl.DateTimeFormat;
    return v15("os", { timeZone: v10 });
}
Object.defineProperty(v12, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f13 });
try { new Int32Array(v12); } catch (e) {}
