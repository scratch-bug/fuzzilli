const v0 = {};
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        return F1;
    }
    function f8() {
        return f8;
    }
    for (let v9 = 0; v9 < 5; v9++) {
        let v10 = f7.bind();
        Object.defineProperty(v0, f8, { enumerable: true, get: v10, set: f8 });
    }
}
try { new F1(); } catch (e) {}
