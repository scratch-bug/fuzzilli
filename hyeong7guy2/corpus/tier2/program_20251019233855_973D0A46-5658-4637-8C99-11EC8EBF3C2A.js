function f1() {
    return -268435456;
}
with (d8) {
    Object.defineProperty(test, "toString", { configurable: true, value: f1 });
    const v4 = test.FastCAPI;
    const v5 = new v4(v4, v4, f1, f1, -268435456);
    d8.test *= test;
    v5.add_all_overload(test, test);
}
