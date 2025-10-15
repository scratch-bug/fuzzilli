class C0 {
}
class C1 extends C0 {
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const t7 = F2.constructor;
const t8 = t7(C1);
t8();
