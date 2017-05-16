const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('user').del()
  .then(() => {
    
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('hellothere', salt);
    
    return Promise.join(
      knex('user').insert({
        username: 'juliusreade',
        email: 'julius_dott@hotmail.com',
        password: hash,
                
        display_name: 'Julius Reade',
        summaries_id: '12121212',
        avatar_url: 'julius.png',
        website: 'www.juliusreade.com/',
        twitter: 'dottjt',
        facebook: 'julius.reade',
        github: 'dottjt',

        admin: true

      })
    );
  })
  .then(() => {

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('hellothere', salt);
    
    return Promise.join(
      knex('user').insert({
        username: 'kellyreade',
        email: 'kelly@hotmail.com',

        display_name: 'kelly',
        summaries_id: '13131313',
        password: hash,
        
        admin: true
  
      })
    );
  });
};
