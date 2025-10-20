const v1 = Intl.NumberFormat;
const v6 = v1("cs", { currency: "ZMK", style: "currency" });
v6.formatToParts(v1);
v6.format(Intl);
v6.format();
