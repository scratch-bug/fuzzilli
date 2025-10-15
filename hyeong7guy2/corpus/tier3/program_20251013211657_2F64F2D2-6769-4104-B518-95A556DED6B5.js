class C1 {
    static [0.2913870206350583]() {
        for (let v3 = 0; v3 < 5; v3++) {
            [] = v3;
        }
    }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = F4.__lookupGetter__;
try { new v8(); } catch (e) {}
