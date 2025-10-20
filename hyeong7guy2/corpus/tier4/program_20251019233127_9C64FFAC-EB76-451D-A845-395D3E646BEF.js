try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        const v4 = `
            function f5() {
                return f5;
            }
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = class {
                    [11](a16, a17, a18) {
                        super.h = a16;
                    }
                }
            }
            class C20 extends BigUint64Array {
            }
            new WeakMap();
            const v24 = [Array];
            function f25(a26) {
                return WeakMap;
            }
            class C27 extends f25 {
                get h() {
                    return 43911;
                }
            }
            new C20();
            for (let v30 = 0; v30 < 5; v30++) {
            }
            for (let v32 = 0; v32 < 5; v32++) {
                -13 < 200;
            }
            class C35 extends f5 {
                static p(a37, a38) {
                }
            }
            /Wa6\p{Script_Extensions=Greek}/dygmv;
            v24.__proto__ = "b";
        `;
        eval(v4);
    }
    new F0(F0, F0);
} catch(e43) {
}
