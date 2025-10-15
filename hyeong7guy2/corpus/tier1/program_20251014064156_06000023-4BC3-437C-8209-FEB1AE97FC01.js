new Float64Array(23);
const v4 = class {
    #p(a6) {
        return a6();
    }
    [256](a9, a10) {
        return this;
    }
}
const v11 = new v4();
new v4();
class C13 {
    get a() {
        const v17 = [Object,Object];
        Reflect.apply(Object.create, v11, v17);
        return v17;
    }
}
new C13();
function f21() {
}
function f22() {
    return f21;
}
class C23 {
    [f22](a25) {
        delete this.h;
    }
}
new Set();
function f32() {
}
for (const v33 in C23) {
    let g = v33;
}
function f35(a36, a37) {
    return {};
}
f35();
f35(C23, 5);
f35();
f35(C23, 3691);
f35();
function F44(a46, a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a48;
    try { new F44(f32, a49, 3691, 1); } catch (e) {}
    let v51 = 0;
    do {
        v51++;
    } while ((() => {
            const v54 = v51 < 10;
            C23.a = a46;
            return v54;
        })())
}
new F44();
function f56(a57) {
}
class C58 extends f56 {
}
