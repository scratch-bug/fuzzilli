const v1 = Intl.Segmenter;
const v5 = new v1("byn", { granularity: "sentence" });
v5.segment().containing();
