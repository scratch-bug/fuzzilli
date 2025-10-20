function f2() {
}
class C3 extends f2 {
    static {
        let v5 = -10;
        for (let i7 = 0;
            i7 < 20000;
            (() => {
                i7++;
                do {
                } while (v5++, 0)
            })()) {
        }
    }
}
