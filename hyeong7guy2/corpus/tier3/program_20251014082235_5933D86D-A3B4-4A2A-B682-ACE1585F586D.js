const v2 = Intl.RelativeTimeFormat;
const v4 = "gu" == "gu";
const v5 = new v2("gu", Symbol);
try { v5.formatToParts(v4, Symbol); } catch (e) {}
