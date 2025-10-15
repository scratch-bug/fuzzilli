function f2() {
    return 127;
}
Set[Symbol.toPrimitive] = f2;
Date.parse(Set);
