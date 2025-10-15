function f1() {
    return f1;
}
const v2 = async () => {
    let v4;
    try { v4 = Uint8Array.fromBase64("1073741823", "1073741823"); } catch (e) {}
    return v4.idx;
};
v2().then("1073741823", f1);
