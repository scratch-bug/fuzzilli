class C1 extends BigUint64Array {
}
function f3() {
    return C1;
}
function f4() {
    function f5(a6) {
        delete Intl.ListFormat;
        return Intl;
    }
    f5 >= C1;
    return f5;
}
function f10(a11) {
    return f10;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f10 });
f4();
f4();
%OptimizeMaglevOnNextCall(f4);
try { new Uint16Array(f3); } catch (e) {}
