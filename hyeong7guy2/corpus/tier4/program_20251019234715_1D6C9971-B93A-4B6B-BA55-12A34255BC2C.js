const v2 = Intl.Segmenter;
const v6 = new v2("kaj", { granularity: "word" });
v6.segment("word").containing(true);
