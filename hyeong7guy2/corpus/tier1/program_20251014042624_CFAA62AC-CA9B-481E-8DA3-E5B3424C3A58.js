const v1 = [0.3707006462528598];
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        function f10(a11) {
        }
        const v15 = {};
    }
    const v18 = { type: "function" };
    const v22 = {
        construct(a20, a21) {
        },
    };
    const v23 = v22.construct();
    try { v23.construct(); } catch (e) {}
    new Worker(f8, v18);
    this.b = a5;
}
const v26 = new F2(v1, F2);
const t19 = v26.b;
new t19();
