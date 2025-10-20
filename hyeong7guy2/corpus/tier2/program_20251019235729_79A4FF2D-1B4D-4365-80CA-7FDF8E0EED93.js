try {
    const v1 = new WeakMap();
    function f3() {
    }
    function f4() {
        function f5() {
            const v7 = Array(v1);
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F9();
            const v14 = Array(1048576);
            try { Array.from(...v14, Array, f5, 1048576, v7, f5); } catch (e) {}
            const v17 = Array(1048576);
            v17 ?? v17;
            const t14 = [-2,-1,-536870912,3];
            t14.seconds >>= 8;
            const v23 = gc(6);
            v23 ?? v23;
            return { done: true };
        }
        return { next: f5 };
    }
    const v27 = Symbol.iterator;
    function F28(a30, a31) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F28();
    const v33 = { [v27]: f4 };
    try { f3.bind(null, ...v33); } catch (e) {}
} catch(e36) {
}
