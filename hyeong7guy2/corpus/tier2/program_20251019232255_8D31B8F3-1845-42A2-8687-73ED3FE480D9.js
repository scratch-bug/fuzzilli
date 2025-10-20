function f0() {
    const t1 = Intl.Segmenter;
    const v3 = new t1();
    let v4 = 0;
    for (let i = 0; i < 5; i++) {
        v4++;
    }
    const v6 = v3.segment();
    v6.containing(v4);
    const v9 = new Uint16Array(v6);
    return v9;
}
({ construct: f0 }).construct();
