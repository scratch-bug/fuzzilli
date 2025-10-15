function f1() {
    return 4928n;
}
const v2 = [0.3355499447371395];
v2[Symbol.toPrimitive] = f1;
class C6 extends Date {
}
const v7 = C6.UTC;
try { v7(v2); } catch (e) {}
