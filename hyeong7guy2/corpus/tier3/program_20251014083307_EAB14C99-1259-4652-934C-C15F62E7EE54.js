function f1() {
    return ({ p1: 1.1 }).p1;
}
SharedArrayBuffer.toString = f1;
const v6 = new SharedArrayBuffer(257);
v6.slice(SharedArrayBuffer);
