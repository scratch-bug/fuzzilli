function f1(a2, a3) {
    return -13;
}
Set[Symbol.toPrimitive] = f1;
Date.parse(Set);
