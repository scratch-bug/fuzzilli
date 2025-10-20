const v2 = class {
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const v7 = { timeZone: "-22:00" };
    const v8 = {};
    v8.disambiguation = v8;
    v5.from(v7, v8);
    return v5;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
