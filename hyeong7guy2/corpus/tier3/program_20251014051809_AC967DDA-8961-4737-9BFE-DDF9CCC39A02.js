const v2 = [0.3355499447371395];
const v3 = [-3.1736707519614746e+307,-2.2250738585072014e-308];
v3.valueOf = Symbol;
class C4 extends Date {
}
const v5 = C4.UTC;
try { v5(v2, Date, v3); } catch (e) {}
