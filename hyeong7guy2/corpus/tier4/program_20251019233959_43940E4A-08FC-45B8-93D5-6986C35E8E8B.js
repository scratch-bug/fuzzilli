const v1 = Intl.NumberFormat;
v1("gn", { notation: "compact", trailingZeroDisplay: "stripIfInteger" }).resolvedOptions();
