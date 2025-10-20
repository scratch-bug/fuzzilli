try {
    function f0(a1, a2) {
        try {
            f0();
        } catch(e4) {
            try {
                35716 ^ (e4 % 11);
            } catch(e9) {
            }
        }
        return f0;
    }
    f0(f0, f0);
    f0();
} catch(e12) {
}
