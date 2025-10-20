for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
try {
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        const v18 = `
            class C19 {
                static [F10](a21, a22, a23) {
                    const v25 = {
                        next() {
                            with (d8) {
                            }
                            return a16;
                        },
                    };
                }
            }
        `;
        eval(v18);
    }
    new F14();
} catch(e29) {
}
