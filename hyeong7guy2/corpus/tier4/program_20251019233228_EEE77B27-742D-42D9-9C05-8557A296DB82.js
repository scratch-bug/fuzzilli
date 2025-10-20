function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function f3(a4) {
    function f6(a7) {
        function f8(a9, a10, a11) {
            [this.onmessage];
        }
        new Worker(f8, { type: "function" });
    }
    this.onmessage = f6;
    f6();
}
new Worker(f3, { type: "function" });
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v30 = 0; v30 < 25; v30++) {
        v30 < 20000;
    }
}
new F24();
