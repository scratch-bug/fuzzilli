class C1 {
}
const v3 = [-65536,1073741824,512,12];
function f5(a6) {
    function f7() {
        function f8() {
            for (let v9 = 0; v9 < 5; v9++) {
                function F10(a12, a13, a14, a15) {
                    if (!new.target) { throw 'must be called with new'; }
                    gc();
                }
                new F10();
            }
            const v19 = {};
        }
        return { next: f8 };
    }
    ([257,8,884999005,-65537,1267384689])["join"]();
    const v24 = Symbol.iterator;
    a6.bind(null, ...{ [v24]: f7 });
}
const v30 = { type: "function" };
Object.defineProperty(v30, "arguments", { writable: true, enumerable: true, value: v3 });
new Worker(f5, v30);
for (let i33 = 0;
    i33 < 20000;
    (() => {
        const v37 = i33++;
        v37 / v37;
    })()) {
}
