let v2;
try { v2 = new Float64Array(15); } catch (e) {}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F3(); } catch (e) {}
    for (let v7 = 0; v7 < 5; v7++) {
        const v8 = v2?.[3];
        const v9 = {};
        try { v9.a = this; } catch (e) {}
        const v10 = {};
        try { v10.h = v8; } catch (e) {}
    }
}
try { new F3(); } catch (e) {}
