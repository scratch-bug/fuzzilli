function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i3 = 0;
        (() => {
            let v5 = -4294967297;
            const v6 = v5++;
            function f7(a8) {
                v6(v6, a8, a8, v5);
                return i3;
            }
            return i3 < 25000;
        })();
        i3++) {
    }
}
new F0();
