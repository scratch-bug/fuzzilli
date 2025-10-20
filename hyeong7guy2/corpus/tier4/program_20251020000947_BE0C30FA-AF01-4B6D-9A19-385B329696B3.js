for (let v1 = 0; v1 < 5; v1++) {
    Object[v1] = v1;
}
const v2 = Object.preventExtensions(Object);
v2.freeze(v2);
