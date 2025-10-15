const v0 = class {
    set c(a2) {
        try {
            super.n();
        } catch(e4) {
            e4.stack;
        }
    }
}
const v6 = new v0();
v6.c = v6;
