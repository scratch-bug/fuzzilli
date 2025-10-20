function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a6;
        }
        const v8 = [-65536,1073741824,512,12];
        function f9(a10) {
            function f11() {
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v17 = globalThis.console;
                    v17.profile(v17, a14);
                    new F12(F12, a15);
                }
                new F12();
                return F12;
            }
            const v21 = Symbol.iterator;
            const v22 = { [v21]: f11 };
            a10.bind(null, ...v22);
            return v22;
        }
        const v27 = { type: "function" };
        Object.defineProperty(v27, "arguments", { writable: true, enumerable: true, value: v8 });
        new Worker(f9, v27);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v29 = new F0();
v29.toString();
class C31 {
    static [v29](a33, a34, a35) {
    }
}
