const v1 = class {
    static {
        function f3(a4, a5) {
            const v7 = {};
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = {
                a: 12234,
                done: F8,
                [12234]() {
                },
                next() {
                    return v7;
                },
            };
            Object.assign(v7, v14);
            const v17 = { ...a5, a: a5 };
            return f3;
        }
        f3(this, 1000000000000.0);
        f3();
    }
}
