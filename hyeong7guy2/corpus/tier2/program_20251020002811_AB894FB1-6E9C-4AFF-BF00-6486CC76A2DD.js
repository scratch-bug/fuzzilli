try {
    const v0 = {};
    function f1(a2, a3, a4, a5) {
        return a5;
    }
    class C7 {
    }
    const v8 = new C7();
    function f10(a11, a12) {
        a11.toISOString = a12;
    }
    for (let i19 = (() => {
            f1(v0, C7);
            function f15(a16, a17) {
                return a17;
            }
            f15(v8);
            return 0;
        })();
        i19 < 20000;
        i19++) {
        const v26 = { a: 1 };
        const v29 = i19 % 2 ? v26 : Object;
        f10(v29, {}, 0, C7, v8);
    }
} catch(e32) {
}
