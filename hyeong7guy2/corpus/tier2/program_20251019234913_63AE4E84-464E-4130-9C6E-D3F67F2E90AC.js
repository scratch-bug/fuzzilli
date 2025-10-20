function f0() {
    function f1(a2, a3, a4) {
        function F5(a7, a8, a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const v11 = `
                /a\fb\nc\rd\te\vf/dusygm;
            `;
            eval(v11);
        }
        new F5();
        return f0;
    }
    let v16;
    try { v16 = f1(); } catch (e) {}
    return v16;
}
({ construct: f0 }).construct();
