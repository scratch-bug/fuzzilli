const v1 = Array.length;
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = `
        try { v1(); } catch (e) {}
    `;
    eval(v5);
}
new F2(Array);
