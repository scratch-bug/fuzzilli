const v1 = Intl.NumberFormat;
v1("gn", { notation: "scientific", trailingZeroDisplay: "stripIfInteger" }).formatToParts();
