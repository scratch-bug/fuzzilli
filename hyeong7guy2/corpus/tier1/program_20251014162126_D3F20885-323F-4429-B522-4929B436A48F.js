function f0() {
    for (let i2 = 0;
        i2 < 20000;
        (() => {
            const v6 = i2++;
            v6 << v6;
        })()) {
        `toString${1}toInstant`;
    }
    return f0;
}
const t11 = ({ next: f0 }).next;
t11();
