require('minimed-connect-to-nightscout').run({
  username: process.env.CARELINK_USERNAME,
  password: process.env.CARELINK_PASSWORD,
  nsHost:   process.env.NS_HOST,
  nsSecret: process.env.NS_SECRET,
  interval: parseInt(process.env.INTERVAL) || 300,
  euApi:    true
});
