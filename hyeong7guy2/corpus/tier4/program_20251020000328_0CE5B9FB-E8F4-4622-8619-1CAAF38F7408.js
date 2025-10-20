const v2 = ("b").__proto__;
function f3() {
    return Symbol;
}
v2[Symbol.toPrimitive] = f3;
try { v2.toLocaleUpperCase("b", Symbol, "b", v2, Symbol); } catch (e) {}
