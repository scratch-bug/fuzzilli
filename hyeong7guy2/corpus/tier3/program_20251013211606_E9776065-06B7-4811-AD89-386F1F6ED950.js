function hot_func(a1) {
    let x = { a: 1 };
    const v5 = () => {
        return x;
    };
    const inner = v5;
    if (a1) {
        eval("let x = 2;");
    }
    return inner();
}
for (let i12 = 0; i12 < 100; i12++) {
    hot_func(false);
}
hot_func(true);
