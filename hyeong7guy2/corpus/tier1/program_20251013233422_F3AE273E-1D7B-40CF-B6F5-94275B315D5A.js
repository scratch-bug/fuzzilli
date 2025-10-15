function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
}
const v5 = {};
for (let i7 = 0;
    (() => {
        function f9(a10) {
            const v11 = { construct: f9 };
            return v5;
        }
        f9(C4);
        return i7 < 10000;
    })();
    i7++) {
}
