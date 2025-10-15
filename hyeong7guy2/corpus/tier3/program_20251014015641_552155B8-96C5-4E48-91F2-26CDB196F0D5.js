function hot_func(a1) {
    return hot_func;
}
hot_func(true);
function hot_func(a5) {
    let v7 = { p: 42 };
    if (a5) {
        v7 = 1.1;
    }
    v7.p;
    return hot_func;
}
for (let i11 = 0; i11 < 100000; ++i11) {
    hot_func();
}
