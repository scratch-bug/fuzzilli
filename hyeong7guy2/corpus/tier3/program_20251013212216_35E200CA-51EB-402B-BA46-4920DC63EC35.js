const v1 = class extends Map {
}
function f2() {
    return arguments;
}
try { v1.forEach(f2, v1, Map); } catch (e) {}
