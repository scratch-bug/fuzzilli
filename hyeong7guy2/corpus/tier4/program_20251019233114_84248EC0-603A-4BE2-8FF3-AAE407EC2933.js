function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return f2;
}
f2.caseFirst = F0;
const v3 = class extends f2 {
}
try {
    ("object").localeCompare("object", "object", v3);
} catch(e6) {
}
