function f1() {
    return -1.0;
}
Object.defineProperty(f1, "hour", { writable: true, enumerable: true, value: -1.0 });
class C2 extends f1 {
}
try {
    Temporal.PlainDateTime.from(C2);
} catch(e6) {
}
