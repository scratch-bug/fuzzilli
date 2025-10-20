const v1 = class {
}
v1[Symbol.toPrimitive] = Symbol;
try { ("f").lastIndexOf("f", v1); } catch (e) {}
