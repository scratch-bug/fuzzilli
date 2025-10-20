function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [a2];
    function f5(a6) {
        return a2;
    }
    Object.defineProperty(v4, 1176, { configurable: true, set: f5 });
    function F7(a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v12 = new F7();
    v12.toJSON = v4;
    const v13 = [a3,a3];
    for (let i15 = 0; i15 < 20000; ++i15) {
        v4[i15] = i15;
    }
    v13.push(v12);
    const v24 = JSON.stringify({ b: v13 });
    const v25 = JSON.parse;
    v25.apply(JSON, [v24]);
}
new F0();
