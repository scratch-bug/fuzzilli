const v0 = class {
}
function f1(a2) {
    const v4 = Intl.RelativeTimeFormat;
    v4.supportedLocalesOf(a2);
    return v4;
}
Object.defineProperty(v0, "toString", { configurable: true, enumerable: true, value: f1 });
const v8 = new Int32Array(9);
try { v0["toString"](v8); } catch (e) {}
