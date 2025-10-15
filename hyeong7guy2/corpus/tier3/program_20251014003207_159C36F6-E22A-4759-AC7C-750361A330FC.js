function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    let v3 = 10;
    function f4() {
        v3 ^ (1 >> v3);
        return 1;
    }
    new Worker(f4, { type: "function" });
    v3--;
}
class C13 extends F0 {
}
new C13();
gc();
