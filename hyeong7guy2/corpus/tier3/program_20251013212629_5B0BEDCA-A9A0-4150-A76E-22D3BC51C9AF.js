Symbol.iterator;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2();
function f7(a8, a9) {
    try { new a8(); } catch (e) {}
}
const v11 = [];
const v12 = {};
function f14() {
}
const v15 = new Proxy(f14, v12);
v15.bind(v6);
function f17() {
}
const dummy = f17;
for (let v19 = 0; v19 < 50; v19++) {
    f7(v11, dummy);
}
