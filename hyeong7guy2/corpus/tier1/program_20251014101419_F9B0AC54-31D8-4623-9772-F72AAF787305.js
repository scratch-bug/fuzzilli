const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            function F6(a8, a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                gc();
            }
            new F6();
        }
        return { next: f5 };
    }
    const v16 = Symbol.iterator;
    a3.bind(null, ...{ [v16]: f4 });
}
const v22 = { type: "function" };
Object.defineProperty(v22, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v22);
for (let i25 = 0;
    i25 < 20000;
    (() => {
        const v29 = i25++;
        v29 / v29;
    })()) {
}
