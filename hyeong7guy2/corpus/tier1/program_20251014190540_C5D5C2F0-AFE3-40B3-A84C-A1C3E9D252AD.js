const v1 = class {
}
function f2() {
    const v4 = Intl.DateTimeFormat;
    v4("os", { timeZone: "h" });
    return v1;
}
Object.defineProperty(v1, Symbol.iterator, { value: f2 });
try { new Int32Array(v1); } catch (e) {}
