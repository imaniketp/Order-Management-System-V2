const orderNumber = (start, end) => {
  let number = Math.floor(start + (end - start) * Math.random());
  return number;
};



const executeOrder = () => {
  let oredrId = `AP-${orderNumber(10000, 99999)}`;

  createOrderCard(oredrId, billDetails);

  document.getElementById(oredrId).innerText = "Order Placed";

  chefReceived(oredrId)
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheezeAdded)
    .then(toppingsAdded)
    .then(secondLayerOfCheezeAdded)
    .then(pizzaBaked)
    .then(oreganoAddedAndPacked)
    .then(packageReceivedAtCounter)
    .then(() => {})
    .catch((err) => console.log(err));

    billDetails =[];
    document.getElementById('customerName').value = "";
};
