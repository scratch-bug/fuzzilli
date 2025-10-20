function f1() {
    return Symbol;
}
f1[Symbol.toPrimitive] = Symbol;
const v4 = new Date();
try { v4.setUTCMinutes(f1); } catch (e) {}
