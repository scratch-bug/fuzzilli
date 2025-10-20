const v1 = class {
    [11](a3, a4, a5) {
        super.h = a3;
    }
}
const v6 = new v1();
const v7 = v6[11];
try { v7.call(11); } catch (e) {}
