function f1() {
    return 2147483649;
}
const v3 = new WeakSet();
v3.toString = f1;
const v4 = [-1e-15,-5.040340349347674,4.0,0.0,Infinity,1000000.0,1e-15];
try { v4.with(v3); } catch (e) {}
