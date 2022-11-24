console.log(0.1 + 0.2 === 0.3);

//Because of rounding errors in calculations, 
//it is unsafe to compare JavaScript Numbers. 
//For example executing 0.1 + 0.2 == 0.3 in JavaScript 
//will return false, as the addition 0.1 + 0.2 introduces 
//a round-off error and does not return exactly 0.3 .