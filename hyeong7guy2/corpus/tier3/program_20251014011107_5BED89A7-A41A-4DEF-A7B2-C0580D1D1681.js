class C1 {
    [0] = 0;
}
const v2 = new C1();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a5.propertyIsEnumerable(0);
}
new F3(v2);
