//Implement a simple Alarm Clock / Timer app
let input = process.argv.slice(2);
//1 2 3

const timer1 = (input) => {
  for (let num of input) {
    if (
      num === 0 ||
      num < 0 ||
      num === NaN ||
      num === undefined ||
      typeof num !== 'number'
    ) {
      console.log('Are you kidding me? Enter a valid number please!');
    }
    if (typeof num === 'number' && num > 0)
      setTimeout(() => {
        console.log('\007');
      }, num * 1000);
  }
};

timer1(input);
//console.log('\007');
