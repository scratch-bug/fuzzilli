try {
    for (let i1 = 0; i1 < 20000; i1++) {
        const v7 = /(fp*)/vi;
        for (const v8 in v7) {
            v7?.[v8];
            let v10;
            try { v10 = v7.test(); } catch (e) {}
            function f11() {
                return v10;
            }
            for (let v12 = 0; v12 < 5; v12++) {
            }
        }
    }
} catch(e13) {
}
