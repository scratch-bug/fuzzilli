function f1() {
    return -9223372036854775808;
}
const v4 = new Int16Array(8);
v4.valueOf = f1;
v4[2] = v4;
