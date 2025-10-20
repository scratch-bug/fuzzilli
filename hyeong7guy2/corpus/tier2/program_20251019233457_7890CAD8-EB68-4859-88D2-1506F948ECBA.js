const v0 = [5,2147483648,-20498,-4294967295,1024];
function f2() {
    return v0;
}
function f3() {
    function f4(a5) {
        v0.length /= 127;
        return f4;
    }
    return f4;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f6 });
try { new Uint16Array(f2); } catch (e) {}
