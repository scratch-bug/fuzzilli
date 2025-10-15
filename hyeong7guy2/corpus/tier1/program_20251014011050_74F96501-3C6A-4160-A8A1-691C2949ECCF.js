function f1() {
    return 4928n;
}
const v2 = [0.3355499447371395];
const v4 = new Date(Date);
v4.valueOf = f1;
const v5 = [-3.1736707519614746e+307,-2.2250738585072014e-308];
class C6 extends Date {
}
const v7 = C6.UTC;
try { v7(v2, Date, v5, v4); } catch (e) {}
