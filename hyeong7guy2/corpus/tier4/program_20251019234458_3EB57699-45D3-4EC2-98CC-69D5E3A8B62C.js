const v2 = new Int16Array(3185);
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        for (const v13 in v2) {
            this[v13] *= 257;
        }
        return 257;
    }
    f9.call(3185, 257, f9, a8);
}
new F4();
