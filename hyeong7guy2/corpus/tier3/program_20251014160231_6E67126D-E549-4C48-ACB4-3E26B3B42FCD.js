const v2 = new Int16Array(4096);
for (let v3 = 0; v3 < 5; v3++) {
    try { Object.freeze(v2); } catch (e) {}
}
