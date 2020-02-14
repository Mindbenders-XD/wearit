export default function displayNotification(prodName) {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        var options = {
          body: 'Wear It has added a new product. Check it out!',
          icon: require("./images/shirt.png"),
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        };
        reg.showNotification(`Product "${prodName}" Added!`, options);
      });
    }
  }