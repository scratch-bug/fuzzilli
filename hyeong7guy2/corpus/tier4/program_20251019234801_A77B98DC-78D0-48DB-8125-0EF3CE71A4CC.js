function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = class extends F0 {
}
try {
    ("").localeCompare(v2, "");
} catch(e5) {
}
