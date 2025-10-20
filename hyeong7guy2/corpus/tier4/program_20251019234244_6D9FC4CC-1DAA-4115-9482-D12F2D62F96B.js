function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4 = 4294967296;
    v4--;
    let v8 = v4 * 65537;
    v8++;
    Math.tan(v8);
}
new F0();
