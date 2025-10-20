function f2() {
    return Float32Array;
}
function f3(a4) {
    return f3;
}
Object.defineProperty(Set, "calendarName", { enumerable: true, get: f2, set: f3 });
const t7 = Temporal.PlainDateTime;
const v8 = new t7(4, 4, 4);
try { v8.toString(Set); } catch (e) {}
