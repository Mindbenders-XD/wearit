const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const q = require("q");
let port = process.env.PORT || 2000;
const webPush = require("web-push");

var subscriptions = [];
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get("/ping", function(req, res) {
  return res.send("pong");
});

const vapidPublicKey =
  "BOYJZKXQblXrn8rtRpeTuZCY8yN2qpnn4zoUrVHvpAJYJGfbitAGiKdYt_RKpr3orY1kZDZ4VJRSANSHywUdXxU";
const vapidPrivateKey = "Zn5fW0Ful8HAkLzq8jbr39eE86226NO9Yv7Yed-R-Ko";

const options = {
  // gcmAPIKey: 'YOUR_SERVER_KEY',
  TTL: 60,
  vapidDetails: {
    subject: "mailto:anandi.yogeesan@gmail.com",
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

app.post("/subscribe", (req, res) => {
  console.log("Request is", req);
  console.log("Request Body is", req.body);
  let isAlreadySubscribed = false;
  subscriptions.map(sub => {
    if (sub.keys.auth == req.body.keys.auth) {
      isAlreadySubscribed = true;
    }
  });
  if (!isAlreadySubscribed) {
    subscriptions.push(req.body);
  }
  res.status(201).json({});
  console.log("subscription after subscribing", subscriptions.length);
});

app.post("/productNotification", (req, res) => {
  res.status(201).json({});
  const payload = req.body;
  console.log("Subscription in post", subscriptions);
  let parallelSubscriptionCalls = subscriptions.map(subscription => {
    return new Promise((resolve, reject) => {
      webPush
        .sendNotification(subscription, payload.name, options)
        .then(value => {
          resolve({
            status: true,
            endpoint: subscription.endpoint,
            data: value
          });
        })
        .catch(err => {
          reject({
            status: false,
            endpoint: subscription.endpoint,
            data: err
          });
        });
    });
  });
  q.allSettled(parallelSubscriptionCalls).then(pushResults => {
    console.info(pushResults);
  });
});

app.get("*", function(req, res) {
  res.redirect("https://" + req.headers.host + req.url);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, function(err) {
  console.log("App started");
});
