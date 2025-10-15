function f1() {
    const t1 = (64).constructor;
    t1(2147483649n);
}
class C6 extends Set {
}
for (let v7 = 0; v7 < 50; v7++) {
    f1();
}
[-0.0076588076814161354,846.8147469512944,613.0582036291662];
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = this.constructor;
    try { new v14(this); } catch (e) {}
    ~a13;
}
new F11();
const v18 = new F11();
const t18 = v18.constructor;
new t18();
const v21 = class {
}
v21.g = v21;
new Int16Array();
