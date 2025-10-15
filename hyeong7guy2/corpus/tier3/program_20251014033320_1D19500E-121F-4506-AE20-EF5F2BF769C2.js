function f0() {
    let v1 = 127;
    for (let i3 = 0;
        i3 < 25000;
        (() => {
            ++i3;
            v1++;
            function f9(a10) {
                return f0;
            }
        })()) {
    }
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        F12(F12, v1);
    }
    return f0;
}
f0();
