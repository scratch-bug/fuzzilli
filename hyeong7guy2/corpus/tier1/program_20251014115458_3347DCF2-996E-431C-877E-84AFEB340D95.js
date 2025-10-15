const v1 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            class C7 {
                [Uint16Array];
            }
            new C7();
            new C7();
            function f10(a11, a12) {
            }
            f10([]);
        }
        return { next: f5 };
    }
    const v16 = Symbol.iterator;
    a3.bind(null, ...{ [v16]: f4 });
    return v1;
}
const v22 = { type: "function" };
Object.defineProperty(v22, "arguments", { writable: true, enumerable: true, value: v1 });
new Worker(f2, v22);
for (let i25 = 0; i25 < 20000; i25++) {
}
