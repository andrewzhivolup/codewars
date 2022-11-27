const yesNo = (array) => {
   for (let i = 1; i < array.length; i++) {
      array.push(...array.splice(i, 1));
   }
   return array;
}

module.exports = yesNo;
