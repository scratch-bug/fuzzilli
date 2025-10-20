const v1 = ([]).keys();
for (let v2 = 0; v2 < 5; v2++) {
    v1["p"] = v2;
}
const v6 = SharedArrayBuffer.prototype.slice;
try { v6.apply(); } catch (e) {}
