try {
    const v1 = class extends WeakMap {
    }
    function f2(a3) {
        const v5 = {};
        const v7 = {
            next() {
                return v5;
            },
        };
        let v8;
        try { v8 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match(); } catch (e) {}
        for (const v9 of v8) {
        }
        return v1;
    }
    for (let i11 = 0;
        (() => {
            const v17 = {
                m(a14, a15, a16) {
                    return a14;
                },
            };
            return i11 < 20000;
        })();
        (() => {
            function f20(a21) {
                return f20;
            }
            ++i11;
        })()) {
        try { f2(); } catch (e) {}
    }
} catch(e25) {
}
