class C1 extends Int16Array {
}
const v2 = new C1();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(v2); } catch (e) {}
    for (let v12 = 0; v12 < 5; v12++) {
        const v13 = a6[0];
        a6 = [v13,v13,v13];
    }
}
new F4(Object);
