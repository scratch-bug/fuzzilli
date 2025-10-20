function f1() {
    return -9007199254740992;
}
const v4 = new Float32Array(5);
v4[Symbol.toPrimitive] = f1;
v4[3] = v4;
v4[2] = v4;
v4.toSorted();
