function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a2;
        }
        const v8 = [-65536,1073741824,512,12];
        function f9(a10) {
            function f11() {
                function F12(a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    globalThis.console.profile();
                    new F12();
                }
                new F12();
            }
            const v21 = Symbol.iterator;
            a10.bind(null, ...{ [v21]: f11 });
            return v21;
        }
        const v27 = { type: "function" };
        Object.defineProperty(v27, "arguments", { writable: true, enumerable: true, value: v8 });
        new Worker(f9, v27);
        for (let v29 = 0; v29 < 25; v29++) {
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0();
v30.toString();
class C32 {
    static [v30](a34, a35, a36) {
    }
}
