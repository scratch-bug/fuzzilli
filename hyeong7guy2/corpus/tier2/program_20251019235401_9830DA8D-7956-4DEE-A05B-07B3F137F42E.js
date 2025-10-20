const v1 = [-65536,1073741824,512,12];
function f3(a4) {
    function f5() {
        class C6 {
        }
        function f8(a9, a10) {
            const v11 = new a9(...a10);
            return v11;
        }
        const v13 = new Proxy(C6, { construct: f8 });
        function f14() {
            new v13();
        }
        for (let i17 = 0; i17 < 25000; ++i17) {
            f14();
        }
        for (let i25 = 0; 100000;) {
        }
    }
    const v29 = Symbol.iterator;
    a4.bind(null, ...{ [v29]: f5 });
}
const v35 = { type: "function" };
Object.defineProperty(v35, "arguments", { writable: true, enumerable: true, value: v1 });
new Worker(f3, v35);
for (let i38 = 0;
    (() => {
        let v39 = 20000;
        v39--;
        return i38 < v39;
    })();
    i38++) {
}
