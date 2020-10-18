function Cart() {
  let item = [];
  let totalcost = 0;

  this.add = function (id, name, price) {
    try {
      if (item.length === 10) {
        throw new Error("cart full");
      }
    } catch (err) {
      console.log("cart is already full");
      return;
    }

    let obj = {};
    obj.id = id;
    obj.name = name;
    obj.price = price;
    item.push(obj);
    console.log(`${obj.id} ${obj.name} ${obj.price}`);
    totalcost += obj.price;
    console.log(`total price: ${totalcost}`);
  };

  this.remove = function (id) {
    try {
      if (item.length === 0) {
        throw new Error("cart is enmpty");
      }
    } catch (err) {
      console.log("cart is already empty");
      return;
    }
    for (let i = 0; i < item.length; i++) {
      if (item[i].id === id) {
        console.log(
          `removed item ${item[i].id} ${item[i].name}  ${item[i].price}`
        );
        totalcost -= item[i].price;
        console.log(`total price: ${totalcost}`);
      }
    }
    let remainingitem = item.filter((item) => item.id !== id);
    item = remainingitem;

    return;
  };

  this.empty = function () {
    item = [];
    totalcost = 0;
    // console.log(`total price: ${totalcost}`);
  };

  this.checkout = function () {
    // for (let i = 0; i < item.length; i++) {
    //   totalcost += item[i].price;
    // }
    console.log(`total price: ${totalcost}`);
    this.empty();
  };

  Object.defineProperties(this, {
    item: {
      get: function () {
        return item;
      }
    },
    totalcost: {
      get: function () {
        return totalcost;
      }
    }
  });
}

let obj = new Cart();
obj.add(1, "apple", 10);
obj.add(2, "apple", 10);
obj.add(3, "apple", 10);
obj.remove(1);
//obj.checkout();
obj.totalcost = 30; //not writeable
//console.log(obj.totalcost);
