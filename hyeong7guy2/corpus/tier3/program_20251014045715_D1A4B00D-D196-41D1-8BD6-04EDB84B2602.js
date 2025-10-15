async function f0() {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    return F1(f0, f0, f0, f0);
}
function f8() {
    return f0;
}
f0().catch(f8);
