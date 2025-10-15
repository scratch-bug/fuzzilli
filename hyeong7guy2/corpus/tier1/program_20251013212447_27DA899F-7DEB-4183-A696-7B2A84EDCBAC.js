function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
new F1();
const v6 = {};
function f7() {
    return WeakSet;
}
const v9 = class {
    set c(a11) {
    }
    [F1] = F1;
}
new v9();
new v9();
let v14 = false;
class C15 {
}
function f17(a18, a19) {
    const v20 = new a18();
    return v20;
}
const v22 = new Proxy(C15, { construct: f17 });
function poc_func() {
    new v22();
}
for (let i26 = 0;
    i26 < 25000;
    (() => {
        ++i26;
        function f31(a32, a33) {
            if (a32) {
            }
        }
        function f34() {
            return f31;
        }
    })()) {
    poc_func();
}
v14 = true;
