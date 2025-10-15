class C3 {
    static get b() {
        ("concat").LinkError;
        return "log";
    }
    get a() {
        return "concat";
    }
}
C3.name;
const v8 = new C3();
const v9 = new C3();
const v10 = v9?.constructor;
try { new v10(); } catch (e) {}
function f12() {
    return "log";
}
function f14() {
    return C3;
}
f14.name = f14;
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    try { a17.substring(a17, v8); } catch (e) {}
    this.c = a18;
}
new F15(F15, "concat", f14, f14);
const v23 = new F15(v9, "log", v8, "concat");
const v24 = new F15(v23, 65537, C3, F15);
const v25 = new F15(f12, F15, "log", v24);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
    const v28 = this?.constructor;
    try { new v28(); } catch (e) {}
}
const v30 = new F26();
v30.c = v30;
new F26(F26);
const v32 = new F26();
v32.h = v32;
class C33 {
    static #o(a35, a36) {
    }
    #m(a38) {
    }
}
let trigger = false;
!trigger;
class C42 {
}
C42.name = C42;
const v45 = new Proxy(C42, {});
v45.byteOffset = v45;
const p = v45;
try { p.call(v25); } catch (e) {}
+0;
for (let v50 = 0; v50 < 1000; v50++) {
    v50 != 25000;
    let v54 = undefined;
    v54 & v54;
    let x = 1;
    new p();
    eval.length;
    eval("");
    3 >>> 3;
    let z = 3;
    v54 = x;
    -v50;
}
