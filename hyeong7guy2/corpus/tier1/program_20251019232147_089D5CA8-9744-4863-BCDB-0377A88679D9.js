function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
new Float32Array();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
new F7();
new F7();
class C15 {
}
new C15();
const v17 = {};
function f18(a19, a20) {
    F0.toISOString = a20;
}
for (let i25 = (() => {
        function f22(a23, a24) {
        }
        return 0;
    })();
    i25 < 20000;
    i25++) {
    const v33 = i25 % 2 ? 2 : v17;
    f18(v33, {}, 0, C15);
}
const v37 = { a: 1.1 };
class C38 extends F0 {
}
new C38();
