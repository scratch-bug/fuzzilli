function f1(a2) {
    for (let v3 = 0; v3 < 25; v3++) {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            function f8() {
                function f9(a10) {
                    let v12 = 1643385767;
                    v12--;
                    Math.clz32(v12);
                }
                return f9;
            }
            Object.defineProperty(this, "toString", { get: f8 });
        }
        const v15 = new F4();
        class C16 {
            static [v15](a18, a19, a20) {
            }
        }
    }
}
new Worker(f1, { type: "function" });
function f26(a27, a28, a29) {
}
new Worker(f26, { type: "function" });
