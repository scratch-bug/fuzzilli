const v4 = {};
const v11 = {
    construct(a7, a8) {
        const t0 = a8[0];
        t0[0] = 1.1;
        return a7;
    },
};
function f13() {
}
const v14 = new Proxy(f13, v11);
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
    Reflect.construct(v14, [v30]);
    v30[0];
}
for (const v37 in v14) {
}
function f41(a42) {
}
