let v0 = 3429;
class C1 {
}
const v2 = new C1();
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    for (let v8 = 0; v8 < 5; v8++) {
        switch (v0++) {
            case v8:
                break;
            case v2:
                function f10(a11) {
                }
                class C12 extends f10 {
                    set e(a14) {
                        super[f10];
                    }
                }
                break;
        }
    }
}
new F3();
