function f0() {
    return f0;
}
const v2 = class extends f0 {
}
class C3 extends v2 {
    static [Infinity](a5, a6, a7) {
    }
}
const v8 = {};
function f9() {
    Object.defineProperty(d8, "toString", { configurable: true, value: f9 });
    with (d8) {
        const v12 = test.installConditionalFeatures(test, C3, test);
        const t13 = test.FastCAPI;
        const v14 = new t13();
        v14.add_all_overload(v12);
        v14.call_to_number(d8);
    }
    return v8;
}
try { f9(); } catch (e) {}
