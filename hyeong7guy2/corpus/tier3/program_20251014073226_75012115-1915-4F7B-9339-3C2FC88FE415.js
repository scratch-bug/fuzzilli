function f2() {
    for (let v4 = 0; v4 < 5; v4++) {
        const t2 = 0.5999524236364984;
        t2[-65537n] <<= v4;
    }
}
const v6 = new Int16Array(512);
v6.findIndex(f2);
