function f0() {
}
class C1 {
}
new C1();
class C3 {
    toString(a5, a6) {
        let f = a5;
    }
}
new C3();
class C9 extends C1 {
    static set a(a11) {
    }
}
function f12() {
}
class C15 {
}
C15.g += -9223372036854775807;
const v16 = {};
v16.a;
function f18(a19, a20) {
    a19.b = a19;
    a20 ?? a20;
    %PretenureAllocationSite(C1);
    Symbol.hasInstance = Symbol;
    const v23 = Symbol.unscopables;
    Symbol.for(v23.description);
    a19[v23] = C1;
    a19.a = a20;
}
try { f18(); } catch (e) {}
for (let v27 = 0; v27 < 250; v27++) {
    const v30 = v27 ? {} : v16;
    Symbol.toPrimitive;
    const v35 = {
        get g() {
            super.f = this;
        },
        get b() {
            return C1;
        },
    };
    v35?.g;
    const v37 = f18(v30);
    v37 << v37;
    C15[f12] = v37;
}
