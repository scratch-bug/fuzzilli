const v0 = /a\sc/ugi;
function f1(a2) {
    return v0;
}
v0[Symbol.toPrimitive] = f1;
const v5 = [v0];
Object.defineProperty(v5, "raw", { writable: true, value: v5 });
try { String.raw(v5); } catch (e) {}
