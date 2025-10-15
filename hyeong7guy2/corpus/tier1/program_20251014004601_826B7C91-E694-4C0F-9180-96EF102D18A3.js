for (let i1 = 0; i1 < 25000; ++i1) {
    const v11 = {
        toString(a8, a9, a10) {
            return a8;
        },
    };
    function f12(a13, a14, a15, a16) {
        const v21 = {
            m(a18, a19, a20) {
                return a15;
            },
        };
        return v21;
    }
    const v22 = f12();
    f12();
    f12(f12(), v22, v11, v22);
}
