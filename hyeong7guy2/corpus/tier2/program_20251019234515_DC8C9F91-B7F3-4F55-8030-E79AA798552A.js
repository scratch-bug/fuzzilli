function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                return F0;
            }
            Object.defineProperty(this, "constructor", { configurable: true, enumerable: true, value: f7 });
            Object.defineProperty(this, "constructor", { writable: true, enumerable: true, value: f4 });
            return a2;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v8 = new F0();
v8.toString();
