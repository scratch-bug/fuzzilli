const v0 = /Ja(?!b)/imvgsy;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
    this.d = a10;
}
new F5(v0, v0);
new WeakSet();
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    function f20(a21) {
    }
    new Worker(f20, { type: "function" });
}
const v26 = class {
}
for (let v27 = 0; v27 < 100; v27++) {
    const v28 = class {
    }
    new v28();
}
new F18();
