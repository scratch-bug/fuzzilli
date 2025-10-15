async function* f2(a3, a4, a5, a6) {
    return Symbol;
}
const v7 = f2.constructor;
try { v7("K4J", "K4J", Symbol); } catch (e) {}
