function f1() {
    const v3 = Intl.NumberFormat;
    return v3("ps", { currency: "DZD", style: "currency" }).format(1307);
}
f1.call();
