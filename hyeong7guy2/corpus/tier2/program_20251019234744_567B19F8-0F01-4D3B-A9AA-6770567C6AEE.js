const v2 = class {
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const v7 = { timeZone: "-22:00" };
    const v9 = {};
    v9.offset = -1098098658;
    v5.from(v7, v9);
    return f3;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
