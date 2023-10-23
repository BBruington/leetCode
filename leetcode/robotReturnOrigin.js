const judgeCircle = function(moves) {
  let coordinates = [0, 0];
  for(i=0; i < moves.length; i++) {
      if(moves[i]==="L"){coordinates[0]-=1}
      if(moves[i]==="R"){coordinates[0]+=1}
      if(moves[i]==="U"){coordinates[1]+=1}
      if(moves[i]==="D"){coordinates[1]-=1}
  }
  if(coordinates[0] === 0 && coordinates[1] === 0) {
      return true
  } else {return false}
};