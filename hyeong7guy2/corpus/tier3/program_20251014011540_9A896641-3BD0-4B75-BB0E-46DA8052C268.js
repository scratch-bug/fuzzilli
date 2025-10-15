function f0() {
    return f0;
}
async function f1(a2, a3) {
    let v5;
    try { v5 = new Symbol(a3); } catch (e) {}
    return v5;
}
f1().then(f1).then(f0);
