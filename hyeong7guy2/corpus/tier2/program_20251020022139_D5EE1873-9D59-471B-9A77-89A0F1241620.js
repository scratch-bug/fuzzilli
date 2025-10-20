const v0 = [0.3707006462528598];
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        function f10(a11) {
        }
        this.onmessage = f10;
    }
    const v15 = new Worker(f7, { type: "function" });
    this.b = a4;
    v15.postMessage(v0);
    for (let i20 = 0, i21 = 10; i21; i21--) {
    }
}
const v27 = new F1(v0, F1);
const t15 = v27.b;
new t15();
