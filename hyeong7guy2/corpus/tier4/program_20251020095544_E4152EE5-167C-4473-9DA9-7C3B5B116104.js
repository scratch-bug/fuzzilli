for (let i1 = 0;
    i1 < 20000;
    (() => {
        ++i1;
        const v6 = {};
        function f7(a8, a9) {
            return a8 === v6 ? a8 : v6;
        }
        new Promise(f7);
        v6.a = i1;
        const t7 = {};
        t7.a = i1;
    })()) {
}
