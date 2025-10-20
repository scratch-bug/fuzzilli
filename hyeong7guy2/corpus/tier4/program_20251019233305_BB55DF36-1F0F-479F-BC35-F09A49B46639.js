try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = `
            /Ma$(?<=a)+/usygm;
        `;
        eval(v4);
    }
    new F0(F0, F0);
} catch(e9) {
}
