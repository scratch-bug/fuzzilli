class C1 {
    5 = 2147483648;
}
const v2 = new C1();
const v3 = v2[5];
const v4 = new C1();
v4.length = v3;
const v6 = Intl.Segmenter;
try { v6.supportedLocalesOf(v4); } catch (e) {}
