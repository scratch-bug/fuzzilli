const v2 = Intl.RelativeTimeFormat;
const v7 = new v2("kde", { numberingSystem: "sora", numeric: "auto" });
v7.format(10, "second");
