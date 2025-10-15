function f1() {
    return f1;
}
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a7(); } catch (e) {}
    const v11 = `
        const v12 = {};
        \`-63824${f1}7191\`;
        const v15 = v12.toString;
        v15.d = v15;
    `;
    eval(v11);
}
new F4(7, F4);
