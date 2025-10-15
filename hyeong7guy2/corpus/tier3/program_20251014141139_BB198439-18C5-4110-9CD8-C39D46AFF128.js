const v3 = Intl.NumberFormat;
const v4 = v3(v3, v3);
try { v4.formatRange(268435456, "bigint"); } catch (e) {}
