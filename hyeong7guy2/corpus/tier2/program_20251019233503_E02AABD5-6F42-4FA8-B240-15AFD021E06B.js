const v2 = [-65536,1073741824,512,12];
function f3(a4) {
    function f5() {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            Date.parse("5");
        }
        new F6(f5, Symbol);
        return v2;
    }
    const v13 = Symbol.iterator;
    a4.bind(null, ...{ [v13]: f5 });
    return Symbol;
}
const v19 = { type: "function" };
Object.defineProperty(v19, "arguments", { writable: true, enumerable: true, value: v2 });
new Worker(f3, v19);
for (let i22 = 0;
    (() => {
        let v23 = 20000;
        v23--;
        return i22 < v23;
    })();
    i22++) {
}
