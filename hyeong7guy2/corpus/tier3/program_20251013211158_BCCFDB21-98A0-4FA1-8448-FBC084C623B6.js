function poc() {
    class C1 {
        static {
            const v3 = () => {
                eval("");
            };
            const f = v3;
            f();
        }
    }
}
for (let i10 = 0; i10 < 200; i10++) {
    poc.call(i10);
}
const v17 = {};
