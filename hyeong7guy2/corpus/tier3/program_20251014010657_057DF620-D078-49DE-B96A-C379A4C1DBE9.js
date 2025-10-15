function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 {
    }
    for (let i10 = 0;
        i10 < 20000;
        (() => {
            const v14 = i10++;
            v14 >> v14;
        })()) {
        const v17 = {};
        const v19 = i10 % 2;
        const t12 = [v19];
        t12[Symbol.dispose] = C7;
        v19 ? v17 : Object;
    }
}
new F1();
