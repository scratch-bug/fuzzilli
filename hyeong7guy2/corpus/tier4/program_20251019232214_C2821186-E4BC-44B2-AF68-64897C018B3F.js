try {
    function F0() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let i3 = 0; i3 < 20000; i3++) {
        --F0;
        try { Math.cos(F0); } catch (e) {}
    }
} catch(e12) {
}
