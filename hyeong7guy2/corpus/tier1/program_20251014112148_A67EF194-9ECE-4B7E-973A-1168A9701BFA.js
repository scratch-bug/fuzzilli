const v0 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function f5() {
            const v9 = {
                get f() {
                    eval(a3);
                    return f2;
                },
            };
            return v9;
        }
        return { next: f5 };
    }
    const v11 = Symbol.iterator;
    a3.bind(null, ...{ [v11]: f4 });
}
const v17 = { type: "function" };
Object.defineProperty(v17, "arguments", { writable: true, enumerable: true, value: v0 });
new Worker(f2, v17);
for (let i20 = 0;
    (() => {
        let v21 = 20000;
        v21--;
        return i20 < v21;
    })();
    i20++) {
}
