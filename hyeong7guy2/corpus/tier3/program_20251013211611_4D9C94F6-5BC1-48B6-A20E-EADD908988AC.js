for (let i1 = 0; i1 < 10000; ++i1) {
    function f7() {
        return arguments;
    }
    const v9 = f7();
    f7(1.1, 2.2);
    v9[0];
}
