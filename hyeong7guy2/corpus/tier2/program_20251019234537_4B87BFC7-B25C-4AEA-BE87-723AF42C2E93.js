const v9 = {
    construct(a1, a2) {
        const t0 = Intl.Segmenter;
        const v5 = new t0(a2);
        const v7 = v5.segment().containing;
        let v8;
        try { v8 = v7(); } catch (e) {}
        return v8;
    },
};
v9.construct(v9, v9);
