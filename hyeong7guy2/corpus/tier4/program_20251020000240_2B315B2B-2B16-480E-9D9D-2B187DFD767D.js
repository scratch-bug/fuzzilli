try {
    function f0() {
    }
    const v1 = [0.3355499447371395];
    for (let i3 = 0; i3 < 20000; i3++) {
        try { v1.reduceRight(f0); } catch (e) {}
    }
} catch(e10) {
}
