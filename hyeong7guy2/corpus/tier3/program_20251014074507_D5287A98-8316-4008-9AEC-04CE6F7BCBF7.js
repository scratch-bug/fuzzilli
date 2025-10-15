for (let i2 = 2147;
    (() => {
        for (let v3 = 0; v3 < 50; v3++) {
            const v4 = class {
            }
            let v5;
            try { v5 = v4(); } catch (e) {}
            eval(v5 ?? v5);
        }
        return i2 < 15;
    })();
    ) {
}
