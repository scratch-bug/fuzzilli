const v1 = Intl.Collator;
const v8 = {
    caseFirst: "false",
    collation: "pinyin",
    ignorePunctuation: true,
    sensitivity: "case",
    usage: "sort",
};
v1("trv", v8);
