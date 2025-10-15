function f1() {
    const v3 = class extends Array {
        constructor(a5, a6, a7) {
            super();
            for (let v8 = 0; v8 < 50; v8++) {
            }
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = new F9();
            class C14 {
                static [v13](a16, a17, a18) {
                }
            }
        }
    }
    new v3();
    return Array;
}
new Worker(f1, { type: "function" });
