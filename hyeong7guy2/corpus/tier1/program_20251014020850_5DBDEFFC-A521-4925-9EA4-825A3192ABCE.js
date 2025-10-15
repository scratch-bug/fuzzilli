for (let i2 = 0; i2 < 20000; i2++) {
    const v8 = { a: i2 };
    i2 ? v8 : WeakSet;
    function f10(a11) {
        function f12(a13, a14, a15) {
            const v16 = { 2: v8 };
            return a14;
        }
        return f12(i2);
    }
}
