class C2 {
}
function f3(a4) {
    const t3 = Temporal.PlainDateTime;
    new t3(3439, 65536, 3439, 3439, a4);
    return a4;
}
C2.constructor = f3;
const v8 = C2.constructor;
try { v8(C2); } catch (e) {}
