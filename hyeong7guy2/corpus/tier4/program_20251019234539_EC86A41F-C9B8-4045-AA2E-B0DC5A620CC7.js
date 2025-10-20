let v0 = class {
    get g() {
        try {
            super.formatToParts();
        } catch(e3) {
            e3.stack;
        }
    }
}
const v5 = new v0();
({"g":v0,} = v5);
