const v3 = new Int16Array(2732);
class C6 {
}
Date(...v3, ..."1073741823");
gc();
for (const v11 of v3) {
}
%VerifyType(gc);
