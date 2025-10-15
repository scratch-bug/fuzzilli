function hot_func(a1) {
    let val = { p: 42 };
    let i = 0;
    do {
        if (a1) {
            val = 1.1;
        }
    } while (i++ < 0)
    return val.p;
}
for (let i13 = 0; i13 < 100000; ++i13) {
    hot_func(false);
}
hot_func(true);
