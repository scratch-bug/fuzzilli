const v0 = class {
    toString(a2, a3) {
        a2.f = a2;
    }
}
const v4 = new v0();
const v6 = Intl.PluralRules;
try { v6.apply(v0); } catch (e) {}
const v8 = new v6();
try { v8.select(v4); } catch (e) {}
