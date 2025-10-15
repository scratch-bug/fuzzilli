class C1 {
}
class C2 {
    [-7.265054821147164] = C1;
}
const v3 = new C2();
const v4 = new C2();
const v5 = new C2();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = a8.constructor;
    new v11(a10, v11, -7.265054821147164, C2, F6);
    const t12 = a10.constructor;
    new t12();
}
new F6(v4, -7.265054821147164, -7.265054821147164);
const v16 = new F6(v3, v5, v5);
new F6(-7.265054821147164, v16, v5);
const v18 = { ...v4 };
