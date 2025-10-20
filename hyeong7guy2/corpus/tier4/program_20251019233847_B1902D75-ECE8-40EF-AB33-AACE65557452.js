for (let v1 = 0; v1 < 5; v1++) {
    Object["p" + v1] = v1;
}
const v4 = Object.preventExtensions(Object);
v4.freeze(v4);
