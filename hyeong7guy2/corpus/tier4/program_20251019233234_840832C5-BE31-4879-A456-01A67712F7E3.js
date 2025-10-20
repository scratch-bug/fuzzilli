function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = `
                function f10() {
                    return a2;
                }
                class C11 extends f10 {
                    #n(a13, a14) {
                    }
                    static p(a16, a17) {
                        /a\p{Script=Greek}/uym;
                    }
                }
            `;
            eval(v9);
        }
        new F5();
        return F5;
    }
    try { f4(); } catch (e) {}
}
new F0(F0, F0);
