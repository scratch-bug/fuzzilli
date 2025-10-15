function f0() {
    return f0;
}
for (let i4 = 0;
    i4 < 10000;
    (() => {
        ++i4;
        new f0(..."symbol", ..."NFKD");
    })()) {
}
