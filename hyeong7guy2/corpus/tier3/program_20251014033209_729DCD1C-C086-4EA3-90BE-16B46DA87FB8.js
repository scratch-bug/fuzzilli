let v0 = "vXpHy";
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        v0 ^= v0;
        return a8;
    }
    new Worker(f7, { type: "function" });
}
new F1(v0, v0, F1, F1);
