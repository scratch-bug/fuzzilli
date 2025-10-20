function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
try {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = `
            function f9() {
                return f9;
            }
            class C11 extends Float32Array {
                static get h() {
                }
            }
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C17 {
                static [F13](a19, a20, a21) {
                }
                static [F0](a23, a24, a25) {
                }
                static [F0](a27, a28, a29) {
                }
                constructor(a31, a32) {
                    super();
                }
            }
        `;
        eval(v8);
    }
    new F4();
} catch(e36) {
}
