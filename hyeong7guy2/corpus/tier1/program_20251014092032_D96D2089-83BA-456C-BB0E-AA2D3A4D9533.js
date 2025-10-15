let v1;
try { v1 = Float32Array(); } catch (e) {}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i5 = 0;
    (() => {
        const v7 = i5 < 10000;
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
        }
        return v7;
    })();
    (() => {
        const v13 = i5++;
        v13 + v13;
    })()) {
    F2[9] >>= v1;
}
