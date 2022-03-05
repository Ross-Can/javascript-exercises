const removeFromArray = function(originList,...deleteList) {
   for(let i = 0; i < deleteList.length; i++){
       for(let j = 0; j < originList.length; j++){
           if(originList[j] === deleteList[i])
           originList.splice(j,1);
       }
   }

   return originList;
};

// Do not edit below this line
module.exports = removeFromArray;
