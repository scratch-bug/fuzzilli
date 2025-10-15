class C0 {
}
function f1() {
    function f2() {
        const v3 = `
            function f6() {
                return f2;
            }
            function f7() {
                function f8() {
                    Error(v3).stack;
                    return { done: 1809 };
                }
                return { next: f8 };
            }
            const v14 = Symbol.iterator;
            f6.bind(null, ...{ [v14]: f7 });
        `;
        eval(v3);
    }
    return f2;
}
function f20(a21) {
    return a21;
}
Object.defineProperty(C0, "toString", { configurable: true, enumerable: true, get: f1, set: f20 });
class C22 {
}
const v24 = new BigInt64Array();
v24.slice(C22, C0);
