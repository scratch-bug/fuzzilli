const v2 = new WeakMap();
function f3() {
    return v2;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
    const t7 = "p";
    t7.d = "p";
    this.a = WeakMap;
}
new F4("p");
const v8 = class extends WeakMap {
    static get g() {
        function f12(a13, a14, a15, a16) {
            return {};
        }
        const v18 = f12(f12, 59188, v2, WeakMap);
        const v19 = f12(255n, v18, v2, v18);
        const v20 = f12(v18, 59188, F4, v19);
        f12(59188, 59188, "p", v19);
        const v23 = f12(f12(this, v19, f3, WeakMap), v19, f12, v20);
        const v24 = f12(v19, this, F4, v2);
        f12(this, f12(v24, F4, v19, v24), v23, 59188);
        return "p";
    }
    static #f = "p";
}
new v8();
new v8();
class C29 {
    static toString(a31, a32, a33, a34) {
        return v2;
    }
    static 120 = F4;
    set c(a36) {
    }
    static {
        v8[10];
    }
    set f(a40) {
        Object.toString = f3;
    }
    static {
    }
    static d = v2;
    set a(a44) {
    }
}
new WeakMap();
new C29();
const v47 = new v8();
function f49() {
    return v47;
}
function F50(a52) {
    if (!new.target) { throw 'must be called with new'; }
}
function f53() {
    return f49;
}
Object.defineProperty(F50, "p20", { enumerable: true, value: f53 });
function F54(a56, a57, a58, a59) {
    if (!new.target) { throw 'must be called with new'; }
}
function f60(a61, a62) {
    for (let v63 = 0; v63 < 25; v63++) {
        "p" + v63;
        F50[a61] = v63;
    }
}
F54.valueOf = f60;
new F54(f49, F54);
