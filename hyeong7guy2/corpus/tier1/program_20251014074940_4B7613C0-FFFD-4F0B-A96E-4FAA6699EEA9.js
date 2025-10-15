const v1 = class {
}
function f2() {
    return Temporal.PlainDate.from("long");
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
