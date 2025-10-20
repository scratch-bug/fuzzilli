function f0() {
    return /x(?:a+)*\p{General_Category=Decimal_Number}[\cz]+/usymi;
}
this.escape(f0);
