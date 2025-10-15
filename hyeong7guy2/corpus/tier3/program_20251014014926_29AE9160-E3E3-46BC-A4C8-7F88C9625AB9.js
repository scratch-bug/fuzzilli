const v1 = [Symbol,Symbol,Symbol,Symbol];
function f2() {
    const v4 = Symbol.dispose;
    const v6 = {
        [v4]() {
        },
    };
    using v7 = v6;
    for (let i8 = 1000;
        (() => {
            const v9 = {};
            const v11 = [];
            Reflect.apply(v1.values, v9, v11);
            return i8 < 20000;
        })();
        ++i8) {
    }
    return v7;
}
f2();
