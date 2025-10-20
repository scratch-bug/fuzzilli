function f0(a1, a2, a3, a4) {
    return a4;
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    const v9 = `
        ("").includes(f0);
        const v13 = eval("");
        v13 ?? v13;
    `;
    eval(v9);
}
new F5();
