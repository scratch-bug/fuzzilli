function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
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
        }
        const v27 = { type: "function" };
        Object.defineProperty(v27, "arguments", { writable: true, enumerable: true, value: v8 });
        new Worker(f9, v27);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v29 = new F0();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
function f36() {
    function f37(a38, a39) {
        function f40(a41, a42, a43) {
        }
        new Worker(f40, { type: "function" });
    }
    f37(f37, f37);
    const v49 = {};
    function f50(a51) {
    }
    return f50;
}
({ construct: f36 }).construct();
