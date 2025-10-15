const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            const v6 = {};
            Math.acosh();
            ~f4;
            const v11 = f4 & 2147483647;
            v11 + v11;
            return v6;
        }
        return { next: f5 };
    }
    const v14 = Symbol.iterator;
    a3.bind(null, ...{ [v14]: f4 });
}
const v20 = { type: "function" };
Object.defineProperty(v20, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v20);
for (let i23 = 0; i23 < 20000; i23++) {
}
