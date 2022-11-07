const chefReceived = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'Chef Received'
        resolve(orderId)
      }, 2000);
    });
  };
  
  const pizzaSauceAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'Pizza Sauce Added'
        resolve(orderId);
      }, 10000);
    });
  };
  
  const firstLayerOfCheezeAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'First Layer Of Cheeze Added'
        resolve(orderId);
      }, 5000);
    });
  };
  
  const toppingsAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'Toppings Added'
        resolve(orderId);
      }, 12000);
    });
  };
  
  const secondLayerOfCheezeAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'Second Layer Of Cheeze Added'
        resolve(orderId);
      }, 5000);
    });
  };
  
  const pizzaBaked = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'Pizza Baked'
        resolve(orderId);
      }, 15000);
    });
  };
  
  const oreganoAddedAndPacked = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'Oregano Added And Packed'
        resolve(orderId);
      }, 8000);
    });
  };
  
  const packageReceivedAtCounter = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText = 'Package Received At Counter'
        resolve(orderId);
      }, 2000);
    });
  };