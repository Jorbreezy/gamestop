
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          title: 'Dark Souls', price: 40, studio: 1, type: 1, img: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg'
        },
        {
          title: 'Dark Souls 2', price: 40, studio: 1, type: 1, img: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Dark_Souls_II_cover.jpg'
        },
        {
          title: 'Black Ops 3', price: 40, studio: 2, type: 2, img: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Black_Ops_3.jpg'
        },
        {
          title: 'Cold War', price: 60, studio: 2, type: 2, img: 'https://cdn.mos.cms.futurecdn.net/dHSY2Hu3tZeHWPv8kD5BCf.jpg'
        },
        {
          title: 'Spider Man Miles Morales', price: 70, studio: 3, type: 3, img: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/marvel-spider-man-miles-morales-iz-1920x1080-1.jpg'
        },
        {
          title: 'Spider Man', price: 60, studio: 3, type: 3, img: 'https://media.playstation.com/is/image/SCEA/marvels-spider-man-key-art-01-ps4-us-04apr18?$facebook$'
        },
      ]);
    });
};
