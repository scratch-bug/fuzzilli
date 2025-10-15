function f1(a2) {
    if (a2) {
        const v3 = Symbol.dispose;
        const v5 = {
            [v3]() {
            },
        };
        const v6 = {};
        function f7() {
            return f7;
        }
        function f8() {
            eval(a2);
        }
        class C11 extends f8 {
        }
        const v12 = Symbol.iterator;
        const v13 = v12.description;
        const v14 = {};
        const v16 = {
            [v12]() {
            },
        };
        class C17 {
        }
        const v18 = {};
        function f19(a20) {
            return a20;
        }
        for (let [v21,,v22] of v13) {
        }
        function f23(a24, a25, a26) {
            return a2;
        }
    }
    return a2;
}
for (let i28 = 0; i28 < 20000; i28++) {
    f1();
}
