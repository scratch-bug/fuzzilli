function f2() {
    return 1809;
}
function f3() {
    function f4() {
        Error().stack;
        return { done: 1809 };
    }
    const v10 = {
        get c() {
            return this;
        },
        has: f4,
        next: f4,
    };
    return v10;
}
const v11 = Symbol.iterator;
f2.bind(null, ...{ [v11]: f3 });
