function stockList(listOfBooks, categories){
  let totalQuantity = 0;
  let result = {}

  listOfBooks.forEach(book => {
    categories.forEach(category => {
      if (category !== book[0]) {
            result[category] = 0;
      }
      if (category === book[0]) {
        totalQuantity += parseInt(book.split(" ")[1]);
        result[category] = totalQuantity;
      }
    });
  });

  console.log(result);
}

stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "G"])
