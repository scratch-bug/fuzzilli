function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
function f7(a8) {
    return a8;
}
const v9 = class extends f7 {
    [255n];
}
const v10 = new F3("o", "o");
const v11 = new F3(F3, 0.2736719853518359);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = "o";
}
const v18 = new F12(0.2736719853518359, v11, v10, "o");
const v19 = new F12(0.2736719853518359, v10, v18, "o");
const v20 = new F12(v10, F3, F3, v19);
new F12(v19, v20, v20, "o");
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    function* f26(a27, a28, a29, a30) {
        %PretenureAllocationSite(this);
        yield F12;
        return a28;
    }
    try { f26("o", F12, v18, v9); } catch (e) {}
}
new F22(F22, F22);
const v34 = {};
for (let i39 = (() => {
        function f36(a37, a38) {
            return F22;
        }
        return 0;
    })();
    i39 < 20000;
    i39++) {
    const a = 2;
    String.prototype;
    const v49 = {};
}
