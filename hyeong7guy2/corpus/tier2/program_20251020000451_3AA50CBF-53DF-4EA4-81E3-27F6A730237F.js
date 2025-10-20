function f0() {
    function f1() {
        return f0;
    }
    function f2() {
        function f3(a4) {
            const v5 = [];
            function f6() {
                return f2;
            }
            function f7(a8) {
                return f0;
            }
            Object.defineProperty(v5, "toJSON", { configurable: true, get: f6, set: f7 });
            Object.defineProperty(v5, 1, { writable: true, value: a4 });
            return f3;
        }
        return f3;
    }
    function f9(a10) {
        return a10;
    }
    Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
    let v14;
    try { v14 = new Uint16Array(f1); } catch (e) {}
    return v14;
}
class C15 extends f0 {
}
new C15();
new C15();
