function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class {
}
function f5() {
    const v7 = Temporal.ZonedDateTime;
    Reflect.construct(F0, [v7,v7,v7,v7], v7).withCalendar(v7);
    return Int32Array;
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
