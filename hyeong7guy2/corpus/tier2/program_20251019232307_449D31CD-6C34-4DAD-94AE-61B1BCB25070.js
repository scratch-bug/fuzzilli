try {
    const v4 = {};
    const v11 = {
        construct(a7, a8) {
            const t0 = a8?.[0];
            t0[0] = 1.1;
            return a7;
        },
    };
    function f13() {
    }
    let v14;
    try { v14 = new Proxy(f13, v11); } catch (e) {}
    for (let i16 = 0;
        (() => {
            const v19 = [];
            ++Uint16Array;
            61798 ^ Uint16Array;
            function f23() {
                v19[0] = 1.1;
            }
            const v25 = {};
            return i16 < 25000;
        })();
        i16++) {
        const v30 = [];
        const v33 = [v30];
        try { Reflect.construct(v14, v33); } catch (e) {}
        v30?.[0];
    }
    for (const v37 in v14) {
    }
    function f41(a42) {
    }
} catch(e43) {
}
