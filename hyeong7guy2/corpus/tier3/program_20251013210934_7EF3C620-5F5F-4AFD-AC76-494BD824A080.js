const v0 = class {
    static f;
}
Symbol.iterator;
function hot_func(a4) {
    const v5 = {};
    return 1.1;
}
for (let i8 = 0; i8 < 100000; ++i8) {
    hot_func(false);
}
hot_func(true);
new Set();
[-20107,16];
function hot_func(a23) {
    let v25 = { p: 42 };
    let v26 = 0;
    do {
        if (a23) {
            v25 = 1.1;
        }
    } while (v26++ < 0)
    return v25.p;
}
for (let i33 = 0; i33 < 100000; ++i33) {
    hot_func(false);
}
