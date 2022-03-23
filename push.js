var push = require('web-push');

let vapidkeys = {
    publicKey: 'BOS-rSbE8acZX5BJC23ZH6ql203kc4OIXgzRRvBuQN4DpLWAcT1YVbOqqkqjNVcVeVi-EzUx_cTmuas6UPcVsGQ',
    privateKey: 'XDdueUqQyEGvjHYuQhR3MzxMgFiQGUADu9CV2-5SZVg'
  };

push.setVapidDetails('mailto:tite', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dr8J3OYbA6w:APA91bGX1ZuQjvvmd6IZo_U82HwaDn6T8W9scvNtbj4tUqXOH0uKPIUqRGFUjaeVg7Z-IKqM0gelFILUhXglgbPTRAQ99ihkCBc9Y0IdrUFKl2yChJPStOSf0Cbur_n5PBU1MKJQuRA3","expirationTime":null,"keys":{"p256dh":"BEPkwE0lONIjaFpgtibEIR-kP0IlsHjVv37NpY9z7HVwHErPg-tlAecyiwArgaUhP0TFX3qNGaa2nLOjfS2AZr4","auth":"CtdwqWHWmnKr1RSZwRkadQ"}};

push.sendNotification(sub, 'test')


