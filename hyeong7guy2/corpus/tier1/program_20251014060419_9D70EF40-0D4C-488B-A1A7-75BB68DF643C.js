for (let i2 = 0;
    (() => {
        const v4 = i2 < 20000;
        async function f5() {
            for (let v6 = 0; v6 < 100; v6++) {
                const v8 = v6 === 24999;
                let v10 = ({ idx: v8 }).idx;
                for (let v11 = 0; v11 < 5; v11++) {
                    v10 = v10 + 1;
                }
            }
        }
        f5();
        return v4;
    })();
    i2++) {
}
