let v0 = {};
({"prototype":v0,} = Object);
v0.a = {};
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        for (const v9 in this) {
        }
        return F3;
    }
    Object.defineProperty(this, "g", { configurable: true, set: f7 });
    this.g = a6;
}
new F3();
new F3(F3, v0);
