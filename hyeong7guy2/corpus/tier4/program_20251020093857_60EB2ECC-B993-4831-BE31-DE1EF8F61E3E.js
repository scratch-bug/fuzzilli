Set.fractionalSecondDigits = 5n;
const t1 = Temporal.PlainDateTime;
const v6 = new t1(127, 4, 4);
try { v6.toString(Set); } catch (e) {}
