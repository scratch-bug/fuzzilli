const v0 = class {
    m() {
        b = this;
    }
}
const v3 = new v0();
try { v3.m(); } catch (e) {}
try { v3.m(); } catch (e) {}
