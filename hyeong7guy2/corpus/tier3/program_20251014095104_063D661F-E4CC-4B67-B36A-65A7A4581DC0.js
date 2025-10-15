function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    with (F5) {
        const v53 = `
            class C54 {
            }
            new C54();
            function F58(a60, a61, a62) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v53);
    }
}
new F12();
