class C1 {
    [35145](a3, a4) {
    }
}
const v5 = new C1();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(v5, v5, a8, a8); } catch (e) {}
    a10[35145] = a10;
    a11[35145] = a11;
}
new F6(C1, C1, C1, v5);
