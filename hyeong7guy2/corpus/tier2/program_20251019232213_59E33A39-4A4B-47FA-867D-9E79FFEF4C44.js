function f0() {
    return f0;
}
const v3 = class {
}
function f4() {
    const v6 = Temporal.ZonedDateTime;
    const v8 = { timeZone: "-22:00" };
    const v9 = { overflow: f0 };
    v6.from(v8, v9);
    return v9;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
