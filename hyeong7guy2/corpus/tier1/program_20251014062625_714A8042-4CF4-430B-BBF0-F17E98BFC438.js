function f0() {
}
function f1() {
    return f0;
}
class C3 {
    [f1](a5) {
        delete this.h;
    }
}
new Set();
function f14() {
}
for (const v15 in C3) {
    let g = v15;
}
function f17(a18, a19) {
    return {};
}
f17();
f17();
f17();
f17();
f17();
f17(C3, 5);
f17();
f17(C3, 3691);
f17();
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a34;
    try { new F30(f14, a35, 3691, 1); } catch (e) {}
    let v37 = 0;
    do {
        v37++;
    } while ((() => {
            const v40 = v37 < 10;
            C3.a = a32;
            return v40;
        })())
}
new F30();
function f42(a43) {
}
class C44 extends f42 {
}
