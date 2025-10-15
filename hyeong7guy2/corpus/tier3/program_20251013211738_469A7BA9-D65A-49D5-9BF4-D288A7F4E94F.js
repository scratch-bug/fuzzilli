try {
    let v1;
    try { v1 = WebAssembly(); } catch (e) {}
    const v2 = v1?.exports;
    const v4 = { p: 1 };
    function f5(a6) {
        a6.p;
    }
    let v8 = false;
    for (let i10 = 0; i10 < 25000; i10++) {
        const v16 = {};
        const v17 = v8 ? v2 : v4;
        try { Object.setPrototypeOf(v16, v17); } catch (e) {}
        f5(v16);
        if (i10 === 24998) {
            v8 = true;
        }
    }
} catch(e24) {
}
