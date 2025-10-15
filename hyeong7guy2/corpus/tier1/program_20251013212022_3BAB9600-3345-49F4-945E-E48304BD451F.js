const v1 = {};
v1.toString = Symbol;
function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        const v11 = {
            [v1](a7, a8, a9, a10) {
            },
            done: true,
        };
        return v11;
    }
    return { next: f4 };
}
const v13 = Symbol.iterator;
f2.bind(null, ...{ [v13]: f3 });
