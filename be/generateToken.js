const jwt = require('jsonwebtoken');

const payload = {
  user: {
    id: '6696382b90912396197dac37' // ID fittizio 
  }
};

const secret = 'esaurimentoMentaleInCorso2024ALIVORNOboiadeh!'; 

const token = jwt.sign(payload, secret, { expiresIn: 3600 });

console.log(token);
