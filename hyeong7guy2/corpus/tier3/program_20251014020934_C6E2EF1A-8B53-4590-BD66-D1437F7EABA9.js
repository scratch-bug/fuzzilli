function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    return F4(a3, f0);
}
new Worker(f0, { type: "function" });
function f13(a14) {
    return a14;
}
new Worker(f13, { type: "function" });
class C18 {
}
class C19 extends C18 {
}
function f20(a21, a22) {
    return [C19,a22,C18,Object];
}
for (let i26 = 0;
    i26 < 10000;
    (() => {
        const v30 = i26++;
        v30 / v30;
    })()) {
    f20();
}
