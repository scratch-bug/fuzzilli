Symbol.iterator;
const v2 = [-65536,1073741824,512,12];
function f3(a4) {
    function f5() {
        function f6() {
            return {};
        }
        return { next: f6 };
    }
    const v9 = Symbol.iterator;
    a4.bind(null, ...{ [v9]: f5 });
    return v9;
}
const v15 = { type: "function" };
Object.defineProperty(v15, "arguments", { writable: true, enumerable: true, value: v2 });
new Worker(f3, v15);
for (let i18 = 0;
    (() => {
        let v19 = 20000;
        v19--;
        return i18 < v19;
    })();
    i18++) {
}
