var push = require('web-push');

let vapidkeys = {
    publicKey: 'BOS-rSbE8acZX5BJC23ZH6ql203kc4OIXgzRRvBuQN4DpLWAcT1YVbOqqkqjNVcVeVi-EzUx_cTmuas6UPcVsGQ',
    privateKey: 'XDdueUqQyEGvjHYuQhR3MzxMgFiQGUADu9CV2-5SZVg'
  };

push.setVapidDetails('mailto:tite', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test')


