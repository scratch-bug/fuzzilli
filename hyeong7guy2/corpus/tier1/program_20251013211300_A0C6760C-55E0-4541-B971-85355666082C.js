const v0 = [60670734,-16,7];
const v1 = class {
    #toString() {
        [this,this,this,this,this];
        return v0;
    }
    f;
}
const v4 = new v1();
const v6 = new Set();
[v4,v1,v4];
[268435440,460715358,6,42719,65537,-62170,1073741825];
class C10 extends v1 {
    get d() {
        return v6;
    }
    [v1](a14, a15, a16, a17) {
        return a17;
    }
}
new C10();
new C10();
new C10();
function F22(a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F22("257");
const v26 = new F22(v25);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
}
new F27(v26, v26);
function f32(a33, a34) {
    Reflect.construct(a34, a33);
    a33[0];
}
const v44 = {
    construct(a40, a41) {
        return Reflect.construct(a40, a41, a40);
    },
};
const handler = v44;
function f47() {
}
const v48 = new Proxy(f47, handler);
const proxy = v48;
for (let v50 = 0; v50 < 250; v50++) {
    f32([1,2,v6,v1,v50 < 25000], proxy);
}
f32([0,2], proxy);
