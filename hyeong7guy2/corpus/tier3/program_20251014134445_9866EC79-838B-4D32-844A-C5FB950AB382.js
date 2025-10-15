class C3 {
    static #m(a5, a6) {
        const v7 = {};
        v7.e = "f";
        const v8 = {};
        v8.e = "f";
        v8.a = this;
        const v9 = {};
        v9.e = "f";
        v9.a = this;
        v9.g = this;
        const v10 = {};
        v10.e = "f";
        v10.a = this;
        v10.g = -1938304453;
        return v7;
    }
}
const v11 = new C3();
try { v11.propertyIsEnumerable(C3); } catch (e) {}
new C3();
const v14 = new C3();
const v15 = v14?.constructor;
try { new v15(); } catch (e) {}
new C3();
const v18 = class {
    set f(a20) {
        const v21 = (a22, a23, a24, a25) => {
        };
    }
    static [v11] = "f";
}
const v26 = new v18();
const v27 = new v18();
try { v27.constructor(); } catch (e) {}
class C29 {
    static set h(a31) {
        this[v26] = C3;
    }
    set a(a33) {
    }
}
new C29();
new C29();
const v36 = new C29();
const v37 = v36?.constructor;
try { new v37(); } catch (e) {}
new C29();
function f40(a41, a42, a43) {
    a41 ?? a41;
    a42 ?? a42;
    a43 ?? a43;
    let v47 = 0;
    v47 + v47;
    if (a43) {
        v47 = 4294967296;
    }
    for (let v50 = 0; v50 < 5; v50++) {
    }
}
for (let v52 = 0; v52 < 250; v52++) {
    const v54 = f40();
    v54 ?? v54;
    v52++;
}
for (let v57 = 0; v57 < 5; v57++) {
}
function f58() {
}
