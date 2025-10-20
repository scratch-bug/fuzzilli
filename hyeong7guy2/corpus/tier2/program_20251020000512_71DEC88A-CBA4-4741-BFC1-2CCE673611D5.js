function f2() {
    return 16;
}
function f3() {
    return 5.470659487305236;
}
const v5 = class extends f2 {
    static #n(a7) {
        try {
            new f3();
        } catch(e9) {
        }
        return 5.470659487305236;
    }
}
v5.prototype = v5;
const v10 = new v5();
const v11 = class {
    #valueOf(a13, a14, a15) {
        for (const v16 in this) {
        }
        return this;
    }
}
v11.d = v11;
const v18 = new v11();
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const v23 = this?.constructor;
    try { new v23(f2, f2); } catch (e) {}
    this.h = a22;
}
const v25 = new F19(f3, v18);
const v26 = v25?.constructor;
try { new v26(v5, f2); } catch (e) {}
const v28 = new F19(f3, v10);
const v29 = v28?.constructor;
try { new v29(v28, -2147483647); } catch (e) {}
const v31 = new F19(v11, v25);
const v32 = new F19(f3, v31);
class C33 extends f2 {
    static set g(a35) {
        this[Symbol.dispose] = v32;
    }
}
new C33();
new C33();
function f42() {
    return 2559;
}
f42.valueOf = f42;
class C44 extends f42 {
}
C44.name = C44;
function f45() {
    return C44;
}
Object.defineProperty(f45, "initial", { value: C44 });
const v47 = WebAssembly?.Instance;
try { new v47(C44); } catch (e) {}
const v49 = WebAssembly.Memory;
try { v49.toString(); } catch (e) {}
const v51 = new v49(f45);
try { v51.grow(-6.794056762409806); } catch (e) {}
