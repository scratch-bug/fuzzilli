const v1 = WebAssembly.compile(WebAssembly);
function f2() {
    return f2;
}
const v3 = v1.catch(f2);
function f4(a5, a6, a7) {
    for (let v9 = 0; v9 < 10; v9++) {
        async function f10() {
            return await Symbol;
        }
        f10();
    }
    function f14() {
        return v3;
    }
    function f15() {
        const v16 = {};
        with (WeakSet) {
            typeof v16;
            for (let v18 = 0; v18 < 25; v18++) {
            }
        }
        return v16;
    }
    const v19 = Symbol.iterator;
    f14.bind(null, ...{ [v19]: f15 });
    return null;
}
new Worker(f4, { type: "function" });
function f27(a28, a29) {
    return Worker;
}
new Worker(f27, { type: "function" });
