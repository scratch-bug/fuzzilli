try {
    for (let i3 = 0; i3 < 25000; ++i3) {
        function f9(a10, a11, a12, a13) {
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                try { eval(a11); } catch (e) {}
            }
            const v20 = { p1: -786.5744234432112, a: 0.28581889482622025 };
            return a11;
        }
        let v21;
        try { v21 = f9(-786.5744234432112, f9, f9, -786.5744234432112); } catch (e) {}
        try { f9(v21, 0.28581889482622025); } catch (e) {}
        try { f9(); } catch (e) {}
    }
} catch(e24) {
}
