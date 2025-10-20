function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v7 = {
            done: true,
            set d(a6) {
            },
        };
        return v7;
    }
    const v8 = {};
    v8.getPrototypeOf = f3;
    const v10 = new Proxy(f3, v8);
    for (const v11 in v10) {
    }
    return { next: f3 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
