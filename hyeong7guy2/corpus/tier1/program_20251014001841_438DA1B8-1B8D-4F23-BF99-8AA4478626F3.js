const v0 = [2147483649,-11,9,-1398041301,-413878303,-2147483648,-4096,1776369310,205596321,24904];
class C1 {
    #n(a3, a4, a5, a6) {
    }
}
class C7 extends C1 {
    o(a9, a10, a11, a12) {
        Object.defineProperty(this, "toJSON", { writable: true, value: v0 });
    }
}
const v13 = new C7();
v13.o();
