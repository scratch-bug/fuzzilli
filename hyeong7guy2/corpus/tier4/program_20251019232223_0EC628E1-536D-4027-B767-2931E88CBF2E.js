try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = `
            function f5() {
            }
            [1,16,4294967295,-14,12,1701207812,-583472438,-13457];
            function F8() {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F8();
            new F8();
            function F13(a15, a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C19 extends BigUint64Array {
            }
            new WeakMap();
            const v23 = [Array];
            function f24(a25) {
                return WeakMap;
            }
            class C26 extends f24 {
                get h() {
                    return 43911;
                }
            }
            new C19();
            for (let v29 = 0; v29 < 5; v29++) {
            }
            for (let v31 = 0; v31 < 5; v31++) {
                -13 < 200;
            }
            class C34 extends f5 {
                static p(a36, a37) {
                }
            }
            /Wa6\p{Script_Extensions=Greek}/dygmv;
            v23.__proto__ = "b";
        `;
        eval(v4);
    }
    new F0();
} catch(e42) {
}
