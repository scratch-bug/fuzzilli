function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
for (let i4 = 0;
    (() => {
        typeof C2;
        const v7 = `
        `;
        eval();
        return i4 < 20000;
    })();
    i4++) {
}
