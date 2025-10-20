try {
    let v0 = [-65536];
    const P = Object;
    for (let i4 = 0; i4 < 25000; ++i4) {
        const v16 = [1.1,2.2,3.3];
        const v18 = new P(true, undefined);
        for (let v19 = 0; v19 < 5; v19++) {
            v0 = v18 + 1;
        }
        v16[v0] = 6.6;
    }
} catch(e23) {
}
