function f1() {
    return 2;
}
const v2 = class {
}
v2[Symbol.toPrimitive] = f1;
JSON.rawJSON(v2);
