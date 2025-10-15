function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v6 = new t2();
    class C9 {
    }
    let v10;
    try { v10 = Float32Array(v6, a2); } catch (e) {}
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i14 = 0;
        i14 < 10000;
        (() => {
            const v18 = i14++;
            v18 + v18;
        })()) {
        F11[9] >>= v10;
    }
    const v21 = WebAssembly.compile(this, a3);
    function f22() {
    }
    v21.catch(f22);
}
new F0();
