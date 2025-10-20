const v1 = Symbol.iterator;
const v3 = {
    [v1]() {
    },
};
function f4() {
    return v3;
}
class C5 extends f4 {
    constructor(a7, a8) {
        super();
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                const v15 = { type: "🙌🏿", e: v3 };
                const t15 = JSON.stringify;
                t15(v15);
                for (let i21 = 0, i22 = 10; i22; i22--) {
                }
                function f28(a29) {
                }
                return f28;
            }
            Object.defineProperty(this, "toString", { get: f14 });
        }
        const v30 = new F10(a7, a7);
        class C31 {
            static [v30](a33, a34, a35) {
            }
        }
        function f37() {
            return f4;
        }
        WebAssembly.compileStreaming(WebAssembly).catch(f37);
    }
}
new C5(C5, Symbol);
new C5();
