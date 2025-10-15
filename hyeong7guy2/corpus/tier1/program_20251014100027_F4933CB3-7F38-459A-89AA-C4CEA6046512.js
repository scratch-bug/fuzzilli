const v0 = `
    v0.toLowerCase;
`;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
const v7 = {};
for (let i9 = 0; i9 < 20000; i9++) {
    for (const v15 of v0) {
    }
    const v18 = i9 % 2 ? v6 : v7;
    v18.f = v18;
    v18.toISOString = v6;
}
