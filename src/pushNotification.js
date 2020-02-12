export default function displayNotification(prodName) {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification(`Product "${prodName}" Added!`);
      });
    }
  }