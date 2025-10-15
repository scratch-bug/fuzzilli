function f2(a3) {
    return -14n;
}
String.toString = f2;
try { String.fromCodePoint(String); } catch (e) {}
