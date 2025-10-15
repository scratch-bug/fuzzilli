for (let v1 = 0; v1 < 50; v1++) {
    class C2 {
    }
    try { C2.apply(); } catch (e) {}
    -v1;
}
