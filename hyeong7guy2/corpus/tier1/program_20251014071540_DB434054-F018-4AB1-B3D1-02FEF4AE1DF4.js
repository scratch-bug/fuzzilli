function f1() {
}
function f2() {
    function f3() {
        function f5() {
            Error.prepareStackTrace = f5;
            new Set();
            for (let i10 = 0; i10 < 25000; i10++) {
                const v18 = 2 ** 32;
                const v21 = new Uint8Array(8);
                v21[v18] = 1;
            }
            for (let v23 = 0; v23 < 50; v23++) {
            }
            return Error.stack;
        }
        f5();
        return { done: true };
    }
    return { next: f3 };
}
const v28 = Symbol.iterator;
f1.bind(null, ...{ [v28]: f2 });
