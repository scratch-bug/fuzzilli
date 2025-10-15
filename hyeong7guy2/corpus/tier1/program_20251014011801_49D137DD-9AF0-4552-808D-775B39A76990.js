let v1 = -9007199254740991n;
v1++;
function f4(a5) {
}
class C6 extends f4 {
}
const v8 = ("4").normalize();
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor;
}
const t11 = ("257")?.constructor;
new t11();
function f16(a17, a18) {
    Reflect.construct(a18, a17);
    a17[0];
}
const v30 = {
    construct(a23, a24) {
        a23.d = a23;
        const t1 = a24[0];
        t1[0] = 1.1;
        const v28 = Reflect.construct(a23, a24, a23);
        v28.constructor();
        return v28;
    },
};
try { v30.construct(v8); } catch (e) {}
function f33() {
}
const v34 = new Proxy(f33, v30);
const proxy = v34;
for (let v37 = 0; v37 < 100; v37++) {
    for (let v39 = 0; v39 < 32; v39++) {
        "p" + v39;
    }
    f16([1,2], proxy);
    v37++;
}
const v49 = [0,2];
try { v49.fill(proxy); } catch (e) {}
f16(v49, proxy);
