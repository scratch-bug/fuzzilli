const v1 = [140973992,1073741825,-1193213196,1073741824,-15];
class C2 {
}
const v3 = new C2();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(-325186702, a9, a8, -325186702); } catch (e) {}
    const t8 = a6.constructor;
    t8();
    const t9 = a7.constructor;
    new t9();
    try { a9.toString(); } catch (e) {}
}
new F4(C2, v3, C2, C2);
new F4(v1, C2);
