const v1 = [-65536,1073741824,512,12];
function f2(a3) {
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            globalThis.console.profile();
            new F5();
        }
        new F5();
    }
    const v14 = Symbol.iterator;
    a3.bind(null, ...{ [v14]: f4 });
}
const v21 = { type: "function" };
Object.defineProperty(v21, "arguments", { writable: true, enumerable: true, value: v1 });
new Worker(f2, v21);
for (let i24 = 0;
    (() => {
        function F26(a28, a29) {
            if (!new.target) { throw 'must be called with new'; }
        }
        return i24 < 20000;
    })();
    i24++) {
}
