function f1() {
    return f1;
}
function f2() {
    const v4 = Temporal.PlainDate;
    const v6 = { calendar: "indian", eraYear: -9007199254740990 };
    v4.from(v6, { overflow: "reject" });
    return f1;
}
function f10(a11) {
    return a11;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f10 });
try { new Uint16Array(f1); } catch (e) {}
