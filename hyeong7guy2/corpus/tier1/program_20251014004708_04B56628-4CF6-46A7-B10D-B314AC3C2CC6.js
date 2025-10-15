function f2() {
    class C3 {
        static {
            function f5() {
                throw Symbol;
                return Symbol;
            }
            Object.defineProperty(this, "toString", { writable: true, enumerable: true, value: f5 });
        }
    }
    try { C3.toString(Array, Symbol); } catch (e) {}
    return Array;
}
for (let v8 = 0; v8 < 250; v8++) {
    f2.call(200);
}
