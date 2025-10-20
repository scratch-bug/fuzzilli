try {
    function F0(a2) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = class extends F0 {
        constructor(a5, a6) {
            function f7(a8, a9) {
                function F11(a13, a14) {
                    if (!new.target) { throw 'must be called with new'; }
                    arguments.callee;
                }
                new F11();
                return v3;
            }
            f7();
        }
    }
    new v3();
} catch(e19) {
}
