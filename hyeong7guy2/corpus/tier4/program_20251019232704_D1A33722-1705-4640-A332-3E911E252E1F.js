let v1;
try { v1 = new Symbol(Symbol); } catch (e) {}
function f2() {
    return Symbol;
}
for (let i4 = 0;
    (() => {
        const v6 = i4 < 10000;
        v6 || v6;
        return v6;
    })();
    i4++, f2 == v1) {
}
