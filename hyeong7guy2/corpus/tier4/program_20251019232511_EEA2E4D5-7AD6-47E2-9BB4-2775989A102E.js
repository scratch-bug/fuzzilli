const v2 = SharedArrayBuffer.prototype;
try {
    new SharedArrayBuffer(4294967295, v2);
} catch(e4) {
}
