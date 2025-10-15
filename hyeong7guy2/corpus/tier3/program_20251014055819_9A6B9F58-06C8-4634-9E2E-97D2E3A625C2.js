function f1() {
    return 6;
}
WeakSet.valueOf = f1;
Date[Symbol.toPrimitive] = f1;
function f7() {
    return Symbol;
}
function f8() {
    new Date(WeakSet, Date, 882);
}
f7[Symbol.toPrimitive] = f8;
for (const v13 in [0]) {
    v13.propertyIsEnumerable(f7);
}
