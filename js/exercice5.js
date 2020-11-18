let singletonShopList = (function () {
  let instance;
  function init() {
    let list = [];
    function getList() {
      return list;
    }
    function addItem(item, quantity) {
      if (typeof quantity !== "number") {
        throw new Error("Quantity must be a number");
      }
      list.push({
        item: item,
        quantity: item,
      });
    }
    function cleanList() {
      list = [];
    }

    function removeItem(item) {
      list.forEach(function (listItem) {
        console.log(listItem);
        if (listItem.item === item) {
          delete list[list.indexOf(listItem)];
        }
      });
    }

    return {
      getList: getList,
      getNumberOfItems: function () {
        return list.length;
      },
      addItem: addItem,
      cleanList: cleanList,
      removeItem: removeItem,
    };
  }
  function getInstance() {
    if (!instance) {
      //same as if (instance ===undefined)
      instance = init();
    }
    return instance;
  }
  return {
    getInstance: getInstance,
  };
})();

let shopList = singletonShopList;

shopList.getInstance().addItem("pasta", 1);
shopList.getInstance().addItem("salsa", 3);
shopList.getInstance().addItem("pecorino", 2);

console.log(
  "items in shoplist 1 : ",
  shopList.getInstance().getNumberOfItems()
);
console.table(shopList.getInstance().getList());

// going to shopping
console.log("going to the store...");
shopList.getInstance().removeItem("salsa");
console.log("items", shopList.getInstance().getNumberOfItems());
console.table(shopList.getInstance().getList());
