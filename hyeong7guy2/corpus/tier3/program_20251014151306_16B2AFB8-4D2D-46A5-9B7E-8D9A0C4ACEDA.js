async function* f0(a1, a2) {
    return a2;
}
const v3 = f0(f0, f0);
String.prototype.localeCompare.apply(v3, [v3,v3]);
