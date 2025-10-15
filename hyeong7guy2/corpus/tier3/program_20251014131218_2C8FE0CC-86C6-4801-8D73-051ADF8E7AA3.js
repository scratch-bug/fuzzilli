const v3 = new Int8Array(1024);
function f4() {
    return 8;
}
v3.valueOf = f4;
v3.fill(v3);
