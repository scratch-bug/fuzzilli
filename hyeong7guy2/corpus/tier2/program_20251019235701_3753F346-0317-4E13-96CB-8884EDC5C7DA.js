const v0 = {};
function f1() {
    for (let i4 = 0;
        (() => {
            for (const v5 in v0) {
                Map[v5] %= i4;
            }
            return i4 < 25000;
        })();
        ++i4) {
    }
    try { Uint8Array.fromHex(); } catch (e) {}
}
({ construct: f1 }).construct();
