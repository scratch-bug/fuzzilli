function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
new F1();
("")[7];
0 < 10;
class C13 {
}
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    const t10 = Temporal.PlainTime;
    const v21 = new t10();
    let v24;
    try { v24 = Float32Array(v21); } catch (e) {}
    function F25() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i28 = 0;
        i28 < 10000;
        (() => {
            const v32 = i28++;
            v32 + v32;
        })()) {
        F25[9] >>= v24;
    }
    const v35 = WebAssembly.compile();
    function f36() {
    }
    v35.catch(f36);
}
for (let v38 = 0; v38 < 50; v38++) {
    v38 < 25000;
}
