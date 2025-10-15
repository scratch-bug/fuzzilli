let v3 = 13;
function f5(a6, a7, a8) {
    const v10 = "p" + 473;
    const v11 = v3--;
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v16 = {};
    for (let v17 = 0; v17 < 5; v17++) {
        const v18 = v17 ? F12 : v16;
        v17 = v10;
        const v40 = {
            set a(a20) {
                function f21(a22, a23) {
                    return f5;
                }
                try { f21(1024, v11); } catch (e) {}
                function f25(a26, a27, a28) {
                    const v35 = {
                        [a26](a30, a31, a32) {
                            const t0 = "p";
                            t0.toString = f5;
                        },
                        set a(a34) {
                        },
                    };
                    return f21;
                }
                f25(473, a7, v10);
                f25(v11, 1000.0, v18);
                f25(1e-15, 1000.0, 1e-15);
                f25(v17);
            },
        };
    }
    return 1024;
}
new Worker(f5, { type: "function" });
