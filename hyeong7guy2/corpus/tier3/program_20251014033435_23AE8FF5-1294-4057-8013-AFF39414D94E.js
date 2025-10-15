function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
F3.prototype = F3;
const v7 = new F3();
class C9 extends Date {
}
const v10 = C9.UTC;
try { v10(512, v10, -9007199254740990, "268435440", -9007199254740990, -9007199254740990, v7); } catch (e) {}
