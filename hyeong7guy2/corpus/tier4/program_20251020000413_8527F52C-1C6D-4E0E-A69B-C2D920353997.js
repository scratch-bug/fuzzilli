class C1 {
}
class C2 extends C1 {
    static [9007199254740990] = C1;
}
const v3 = { ...C2 };
