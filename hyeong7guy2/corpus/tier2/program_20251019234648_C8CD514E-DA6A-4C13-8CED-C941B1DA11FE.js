class C0 {
}
const v2 = Symbol.toPrimitive;
const v3 = new C0();
v3.length = v2;
function f4() {
    return f4;
}
function f5() {
    function f6(a7) {
        const v8 = [-932954.1094889219,-7.615109204182191e+307,1.0,-2.2250738585072014e-308,-3.0,-7.337253831310883e+307,0.37773432911516613];
        const v10 = [f6,f6,f6,f6];
        Reflect.apply(v8.pop, v3, v10);
        return Reflect;
    }
    return f6;
}
function f13(a14) {
    return a14;
}
Object.defineProperty(f4, Symbol.iterator, { configurable: true, enumerable: true, get: f5, set: f13 });
try { new Uint16Array(f4); } catch (e) {}
