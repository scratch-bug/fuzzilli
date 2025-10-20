const v1 = new Date();
const v4 = Temporal.PlainDateTime;
v4.microsecond = v1;
const v5 = new v4(4, 4, 4);
v5.with(v4);
