class C2 extends Uint32Array {
}
function f3(a4, a5) {
    return 1.0;
}
Object.defineProperty(C2, "valueOf", { writable: true, configurable: true, enumerable: true, value: f3 });
const t6 = Intl.RelativeTimeFormat;
const v8 = new t6();
try { v8.format(C2); } catch (e) {}
