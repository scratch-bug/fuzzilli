function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = `
        const v11 = {
            toString(a8, a9, a10) {
                return F0;
            },
        };
    `;
    eval(v6);
}
new F0(F0, F0, F0, F0);
