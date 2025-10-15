let k = 0;
for (let i = 0; i < 10000; i++) {
    k = i;
}

if (k === 9999) {
    let o = {};
    for (let i = 0; i < 22; i++) {
        o["p" + i] = i;
    }

    delete o.p21;

    o[0] = 1.1;
    o.a = {};

    structuredClone(o);
}