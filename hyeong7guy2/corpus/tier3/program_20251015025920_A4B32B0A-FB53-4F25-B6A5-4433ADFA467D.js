const v5 = {
    [Symbol]() {
        const v4 = {
            next() {
                const t0 = "🙌🏿";
                t0[2] = "🙌🏿";
                return this;
            },
        };
    },
};
function f6() {
    for (let v7 = 0; v7 < 5; v7++) {
        v7 / v7;
    }
    return f6;
}
this.escape(f6);
