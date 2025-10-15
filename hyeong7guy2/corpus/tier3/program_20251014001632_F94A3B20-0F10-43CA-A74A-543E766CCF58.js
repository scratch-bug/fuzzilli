const v0 = class {
}
class C2 {
}
C2.constructor = Date;
const v3 = C2.constructor;
const v4 = new v3(C2, Date, C2, v3, v0);
const t7 = v4.constructor;
const v6 = new t7(v0);
v6.getSeconds(v0);
