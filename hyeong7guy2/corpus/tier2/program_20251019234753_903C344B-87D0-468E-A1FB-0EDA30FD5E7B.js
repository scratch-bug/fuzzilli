function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        try { new F6(a11, a11, 3691, 1); } catch (e) {}
        for (let i = 0; i < 5; i++) {
            d = a8;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function f18(a19) {
                    function F20(a22, a23) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    F20(f18, F14);
                    return d;
                }
            }
        }
    }
    new F6(3691, 1, F6, F0);
}
new F0();
