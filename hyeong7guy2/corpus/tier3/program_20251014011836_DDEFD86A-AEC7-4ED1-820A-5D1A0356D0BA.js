const v2 = class {
    static [3n](a4) {
        let v5 = 0;
        v5++;
    }
}
const v7 = [2147483648,v2];
const v9 = new Int32Array();
const v10 = v9.join();
try { v10.match(v7); } catch (e) {}
const t10 = Intl.ListFormat;
new t10("mai");
gc();
