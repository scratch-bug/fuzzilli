const v1 = class {
}
function f2() {
    const v4 = Intl.DateTimeFormat;
    const v11 = {
        calendar: "coptic",
        hour12: false,
        hourCycle: "h23",
        numberingSystem: "gujr",
        timeZone: "numeric",
    };
    v4("os", v11);
    return "numeric";
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
