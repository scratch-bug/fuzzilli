const v1 = Symbol.iterator;
const v2 = v1.description;
const v3 = {};
Object.defineProperty(v3, "relativeTo", { enumerable: true, value: v2 });
function f4() {
    return v1;
}
function f5() {
    const t8 = Temporal.Duration;
    const v8 = new t8();
    v8.round(v3);
    return Temporal;
}
function f10(a11) {
    return a11;
}
Object.defineProperty(f4, Symbol.iterator, { configurable: true, enumerable: true, get: f5, set: f10 });
try { new Uint16Array(f4); } catch (e) {}
