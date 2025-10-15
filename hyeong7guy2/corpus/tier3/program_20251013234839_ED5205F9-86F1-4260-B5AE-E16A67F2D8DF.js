function f0(a1) {
    gc({ execution: "major" });
    return f0;
}
class C6 extends f0 {
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    new C6();
}
new F7();
