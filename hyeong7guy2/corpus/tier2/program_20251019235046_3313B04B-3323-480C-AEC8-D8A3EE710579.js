function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 644156532;
}
const v3 = new F0();
const v6 = Array(3636);
v6.fill(v3);
function f8(a9, a10, a11) {
    return F0;
}
new Worker(f8, { arguments: v6, type: "function" });
