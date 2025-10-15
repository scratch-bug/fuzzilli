function f21() {
    return WeakSet;
}
const v22 = class extends f21 {
    static {
        function f42() {
            return 0;
        }
        class C44 extends f42 {
            set h(a46) {
                super[a46] = f42;
            }
            #p(a49, a50, a51) {
            }
        }
        class C52 extends f42 {
            set d(a54) {
                async function* f55(a56, a57, a58) {
                    yield;
                    return "number";
                }
            }
            constructor(a62, a63) {
                super();
            }
        }
        const v75 = class {
        }
        function F78(a80, a81) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F78(v75, v75);
        async function f83(a84, a85) {
            await using v88 = {};
            return v88;
        }
        function f97() {
            eval();
            return Uint16Array;
        }
        const v112 = { [Symbol]: f97 };
        function f118(a119) {
            let v131 = 10;
            v131--;
            return 268435456;
        }
    }
}
