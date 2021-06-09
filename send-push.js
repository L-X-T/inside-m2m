const webpush = require('web-push');

const options = {
  vapidDetails: {
    subject: 'http://127.0.0.1:8080',
    publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
    privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
  },
  TTL: 5000
}

/* To use: please insert your console output here! */
const pushSubscription = {
  "endpoint":"https://fcm.googleapis.com/fcm/send/cepa4yBkzmc:APA91bG-M7BNpm05Eky6jVOGsUz6BpFHF-uwbn7DSf2CNgKaoTUWpw0jk5oLKoVIgDy8U_mX1R9VNgqCFuEc_SxTq501Zgjly21YuqTeYVCarXxgcrQaQSFOQuDzVg0bU9JZJYZ_ojLs",
  "expirationTime":null,
  "keys":
    {
      "p256dh":"BHm3PakNe2_rhMvViP-n8654HYPvu7sN7jxW0h2g9t9BTSaWH1nNVFAD-RLIV0hbcLVE2SWnc8G7WBSLLLRRr2U",
      "auth":"y4dq7-gLj1fRCJJLyZk7FQ"
    }
};

const payload = JSON.stringify({
  notification: {
    title: 'Your Gate Changed',
    body: 'Your Gate is now G62',
    icon: './assets/bed.png',
    data: 'additional data'
  }
});

webpush.sendNotification(
  pushSubscription,
  payload,
  options
);
