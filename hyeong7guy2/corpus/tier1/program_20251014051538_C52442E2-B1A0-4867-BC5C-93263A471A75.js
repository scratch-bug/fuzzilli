for (let i2 = 0;
    (() => {
        const v4 = i2 < 20000;
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let v9 = 0; v9 < 5; v9++) {
            F5.d >>>= 100000;
        }
        return v4;
    })();
    i2++) {
}
function f14(a15) {
    return a15;
}
try { f14(); } catch (e) {}
try { f14(...109); } catch (e) {}
