function preInterest(principal, rate = 0.3, time = 1) // default values
{
    let interest = (principal * (rate/100) * time) / 100;
    console.log(`Your interest rate is ${interest}, total: ${interest + principal},
At the rate of ${rate}% for a period of ${time}yrs`);
}
preInterest(200);