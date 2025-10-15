class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F1 {
}
const v6 = {};
for (let i8 = 0;
    (() => {
        function f10(a11) {
            const v12 = { construct: f10 };
            return v6;
        }
        f10(C5);
        return i8 < 10000;
    })();
    i8++) {
}
let v18;
try { v18 = C0(); } catch (e) {}
v18 ?? v18;
