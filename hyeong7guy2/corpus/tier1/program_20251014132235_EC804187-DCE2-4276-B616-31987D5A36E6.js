const v1 = class {
}
function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    v5.from({ monthCode: "M06L" });
    return v1;
}
f2.next = f3;
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
