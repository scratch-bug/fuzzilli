try {
    const v1 = [Date];
    function f3() {
        return f3;
    }
    const v6 = {
        get c() {
            super.c;
            return -65537n;
        },
    };
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        v1.constructor;
    }
    const v12 = new F7(f3, -65537n);
    let v13 = new F7();
    new F7(v12, v1);
    for (let i16 = 0;
        (() => {
            const v17 = v13++;
            ++v13;
            v13 - v17;
            return i16 < 25000;
        })();
        ) {
        for (let [i27, i28] = (() => {
                let v25 = 10;
                v25++;
                return [0, v25];
            })();
            i27;
            ) {
        }
        ++i16;
    }
} catch(e34) {
}
