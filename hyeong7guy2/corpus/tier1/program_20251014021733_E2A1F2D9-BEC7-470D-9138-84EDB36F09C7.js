for (let v0 = 0; v0 < 10; v0++) {
}
const v2 = [-65536,1073741824,512,12];
function f4(a5) {
    function f6() {
        function f7() {
            return {};
        }
        return { next: f7 };
    }
    const v10 = Symbol.iterator;
    return a5.bind(null, ...{ [v10]: f6 });
}
const v16 = { type: "function" };
Object.defineProperty(v16, "arguments", { writable: true, enumerable: true, value: v2 });
new Worker(f4, v16);
for (let i19 = 0;
    (() => {
        let v20 = 20000;
        v20--;
        return i19 < v20;
    })();
    i19++) {
}
