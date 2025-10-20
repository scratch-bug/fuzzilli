const v1 = [8,8,8,8,8];
v1[1] = 8;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        return F2;
    }
    Object.defineProperty(a4, 2, { enumerable: true, get: f6 });
    try { a4.unshift(this); } catch (e) {}
}
new F2(v1);
