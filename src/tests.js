const Botlists = require('./index');

const abl = new Botlists('api-key', '750406366094557244');

abl.stats()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

abl.postStats(875, 1)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
