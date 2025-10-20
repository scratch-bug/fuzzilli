const v1 = Intl.NumberFormat;
v1("ja", { notation: "compact", signDisplay: "never" }).resolvedOptions();
