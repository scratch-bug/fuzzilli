function f1() {
    return -30607n;
}
class C2 extends f1 {
}
for (let i4 = 0;
    i4 < 25000;
    (() => {
        ++i4;
        switch (C2) {
            case -30607n:
                break;
        }
    })()) {
}
