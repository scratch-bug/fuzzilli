const v1 = ([65536,10,16,-18737,5,-6,10000]).propertyIsEnumerable();
const t1 = Intl.DateTimeFormat;
const v5 = t1();
v5.formatRangeToParts(v1, v1);
v5.formatRangeToParts(-128, -128);
