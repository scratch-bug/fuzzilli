let v0 = 51661n;
const v1 = [v0,v0];
function f2() {
    function f3() {
        v0 <<= v0;
        return v0;
    }
    return f3;
}
Object.defineProperty(v1, "toString", { configurable: true, enumerable: true, get: f2 });
class C4 {
    static [v1](a6, a7) {
    }
}
