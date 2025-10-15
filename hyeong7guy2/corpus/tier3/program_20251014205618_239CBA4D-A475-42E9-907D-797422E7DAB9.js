class C1 {
    toString(a3) {
        try {
            super.toISOString();
        } catch(e5) {
            function f6(a7, a8, a9) {
                new f6(this, ..."slice", a3);
                return e5;
            }
            try { f6(); } catch (e) {}
        }
    }
}
const v12 = new C1();
const v15 = {
    [v12]() {
        return {};
    },
};
[];
Object.toISOString = Object;
