function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this?.constructor;
    try { new v5(); } catch (e) {}
}
let v7;
try { v7 = new F1(); } catch (e) {}
try { v7.b = v7; } catch (e) {}
const v8 = {};
try { v8.h = 233; } catch (e) {}
for (let i12 = (() => {
        function F9() {
            if (!new.target) { throw 'must be called with new'; }
        }
        return 0;
    })();
    i12 < 20000;
    i12++) {
    const v20 = i12 % 2 ? v7 : v8;
    try { v20.h = v20; } catch (e) {}
    try { v20.f = v20; } catch (e) {}
    try { v20.toISOString = v7; } catch (e) {}
}
