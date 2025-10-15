for (let i1 = 0; i1 < 25000; ++i1) {
    const v12 = {
        toString(a8, a9, a10) {
            return a10;
        },
        next() {
            return i1;
        },
    };
    function f13(a14, a15, a16, a17) {
        const v22 = {
            m(a19, a20, a21) {
                return a16;
            },
        };
        return v22;
    }
    const v23 = f13(f13, i1, v12, v12);
    f13(f13(v23, v23, i1, v23), v23, v12, v23);
}
[];
