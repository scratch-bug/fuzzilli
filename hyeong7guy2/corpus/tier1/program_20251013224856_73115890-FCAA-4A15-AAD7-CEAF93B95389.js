function f1() {
    return f1;
}
f1.prototype = Uint8Array;
new Uint8Array(Uint8Array);
