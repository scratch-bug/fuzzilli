try {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            function f6(a7) {
                new BigUint64Array(1073741825);
                return F1;
            }
            for (let i13 = 0; i13 < 100000; i13++) {
                const v19 = {};
                %PretenureAllocationSite({ p1: v19 });
            }
            f6();
            return f6;
        }
        Object.defineProperty(this, "toString", { get: f5 });
    }
    const v22 = new F1();
    v22.toString();
} catch(e24) {
}
