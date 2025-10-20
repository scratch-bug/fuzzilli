function f1(a2, a3) {
    ("function").normalize("hFC");
    return Map;
}
Map.constructor = f1;
try { Map.constructor(); } catch (e) {}
