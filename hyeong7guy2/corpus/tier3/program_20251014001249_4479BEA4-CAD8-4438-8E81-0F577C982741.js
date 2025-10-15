function f1() {
    Math.log(-1175300366);
    return f1;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
