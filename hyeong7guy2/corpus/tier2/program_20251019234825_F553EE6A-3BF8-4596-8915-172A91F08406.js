class C2 {
}
with (d8) {
    function f5() {
        return 1024;
    }
    test[Symbol.toPrimitive] = f5;
    const t7 = test.FastCAPI;
    const v8 = new t7();
    d8.test *= test;
    v8.add_all_overload(test, C2, test);
}
