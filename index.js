function scuberGreetingForFeet(ride){
  if (ride <='400')
  return 'This one is on me!';
else if (ride >2000 && ride <= 2500)
return 'I will gladly take your thirty bucks.';
else (ride > 2500)
return 'No can do.';
  // Write your code here!
}

function ternaryCheckCity(city){
  if (city !== 'NYC')
   return 'No go.';
  else return 'Ok, sounds good.';


 
}
  // Write your code here!


function switchOnCharmFromTip(tip){
switch (tip){
  case 'generous':
  return 'Thank you so much.';
  case 'not as generous':
   return 'Thank you.';
  default: 'thanks for everything'
  return 'Bye.';
}
}