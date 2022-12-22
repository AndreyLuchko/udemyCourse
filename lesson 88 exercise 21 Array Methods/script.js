
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
               .reduce((sum, el) => sum + el.amount, 0);
};

const getTotalIncomeAmount = (data) => {
    const totalSum = data.reduce((sum, el) => sum + el.amount, 0);
   return data.some(item => item.amount < 0) ? totalSum : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));