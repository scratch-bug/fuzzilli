function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
F1.toString = Symbol;
function f3() {
    return f3;
}
f3.caseFirst = F1;
const v4 = class extends f3 {
}
try {
    ("object").localeCompare("object", "object", v4);
} catch(e7) {
}
