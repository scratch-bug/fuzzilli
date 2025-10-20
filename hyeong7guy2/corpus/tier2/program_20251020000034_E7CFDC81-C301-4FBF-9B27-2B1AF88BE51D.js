const v0 = [368372.25573085714,2.220446049250313e-16,2.2250738585072014e-308,1.3058677959247364e+308,1e-15,1000000000000.0,2.2250738585072014e-308];
const v1 = `
    parseInt("und🤯efined");
`;
const v7 = JSON.stringify({ type: v1, 8: v0 });
const v8 = JSON.parse;
v8.apply(JSON, [v7]);
