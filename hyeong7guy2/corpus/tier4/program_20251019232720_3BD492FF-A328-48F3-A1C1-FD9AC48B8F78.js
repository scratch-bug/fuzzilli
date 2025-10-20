class C0 {
}
async function* f1(a2, a3, a4) {
    await a4;
    let v6;
    try { v6 = C0.flatMap(); } catch (e) {}
    return v6;
}
const v7 = f1();
v7.next(v7);
