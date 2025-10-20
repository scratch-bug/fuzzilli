function f1() {
    return Math.acos();
}
Int32Array.toString = f1;
const v4 = [2.0,-1000000000.0,NaN,260.8233719107061,56.36899314383413];
v4.fill(Int32Array);
Intl.getCanonicalLocales(v4);
