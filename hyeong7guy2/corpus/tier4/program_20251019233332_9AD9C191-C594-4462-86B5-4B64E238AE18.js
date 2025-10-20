try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = `
            function f5() {
                return f5;
            }
            function f6() {
                function f7() {
                    return F0;
                }
                async function* f8(a9) {
                    await using v11 = {};
                }
                [-1,27926,-15,-46155,-61381,-536870912,16,-1548281518,-4];
                function f13(a14) {
                }
                function f15(a16) {
                }
                ({ next: f7 }).hasOwnProperty();
                function F19(a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            }
            class C23 extends f5 {
                static p(a25, a26) {
                    /a\n/uym;
                }
            }
        `;
        eval(v4);
    }
    new F0(F0, F0);
} catch(e31) {
}
