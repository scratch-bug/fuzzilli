function f0() {
    return f0;
}
const v2 = Intl.Collator;
const v4 = v2(v2, v2).constructor;
v4().compare(f0, v4);
