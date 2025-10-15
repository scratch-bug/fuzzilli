function f2() {
    return Uint16Array;
}
function f3() {
    function f4(a5) {
        const v6 = [Symbol,Symbol,Symbol];
        function f7() {
            return f2;
        }
        function f8(a9) {
            return f8;
        }
        Object.defineProperty(v6, "toJSON", { get: f7, set: f8 });
        return f7;
    }
    f4();
    return f4;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f11 });
try { new Uint16Array(f2); } catch (e) {}
