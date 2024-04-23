var path = require("path");

module.exports = function (app) {

  // ===============================================================================
  // HTML ROUTES
  // ===============================================================================

  app.get("/", async (req,res) => {
    res.render("pages/index");
  });

  app.get("/about", async (req,res) => {
    res.render("pages/about");
  });

  app.get("/contact", async (req,res) => {
    res.render("pages/contactus");
  });

  app.get("/faq", async (req,res) => {
    res.render("pages/faq");
  });

  app.get("/desidesserts", async (req,res) => {
    var menuItems = [
      { name: 'Rasmalai Tres Leches', image: 'RasmalaiTresLeches.jpg', description: 'Sponge cake soaked in a malai mix scented with cardamom and pistachios, a Desi favorite.', allergens: 'dairy, eggs, gluten, and nuts.' },
      { name: 'Chai Tiramisu', image: 'ChaiTiramisu.jpg', description: 'Our take on a Desi favorite, chai biscoot! Layers of creamy mascarpone, lady fingers soaked in masala chai (ChaiwaliTx), chai spiced coco powder.', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Mango Cheesecake', image: 'MangoCheesecake.jpg', description: 'Creamy mango cheesecake filling with a graham cracker crust.', allergens: 'dairy, nuts, and gluten.' },
      { name: 'Gulab Jamun Cheesecake', image: 'GulabJamunCheesecake.jpg', description: 'Cardamom and rose water scented cheesecake layered with gulab jamun.', allergens: 'dairy, gluten, and nuts.' },
      { name: 'Rabri Panna Cotta', image: 'NoImage.png', description: 'Inspired by one of my favorite childhood treats,  blend of fresh cream, almonds, pistachios, and saffron.', allergens: 'dairy and nuts.' },
      { name: 'Rose Panna Cotta', image: 'RosePannacotta2.jpg', description: 'Our take on the refreshing falooda with an italian twist.', allergens: '' },
      { name: 'Mango Panna Cotta', image: 'MangoPannacotta.jpg', description: 'Rich and creamy panna cotta infused with mangoes and saffron.', allergens: 'dairy.' },
    ]
    res.render("pages/desidesserts", { menuItems: menuItems });
  });

  app.get("/minidesserts", async (req,res) => {
    var menuItems = [
      { name: 'Triple Chocolate Mousse', image: 'TripleChocolateMousse.jpg', description: 'A chocolate lovers dream, three layers of decadent mousses, topped with chocolate accents.', allergens: 'dairy.' },
      { name: 'Tiramisu', image: 'Tiramisu.jpg', description: 'Lady fingers soaked in espresso, mascarpone mousse and dusted with coco powder.', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Lemoncello Tiramisu', image: 'LemonTiramisu.jpg', description: 'Layers of ladyfingers soaked in a limoncello syrup, mascarpone cream and garnished with fresh berries. ', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Tres Leches', image: 'TresLeches2.jpg', description: 'Sponge cake soaked in a sweet milk mixture, topped with whipped cream and fruit.', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Mixed Berry Panna Cotta', image: 'MixedBerryPannacotta.jpg', description: 'A creamy Italian dessert that melts in your mouth, topped with a mixed berry coulis and fresh berries.', allergens: 'dairy.' },
      { name: 'NY Style Cheesecake', image: 'NYCheesecake.jpg', description: 'Creamy, no bake cheesecake topped with fresh strawberry compote.', allergens: 'dairy and gluten.' },
      { name: 'Banana Pudding', image: 'NoImage.png', description: 'A southern classic no one can resist! Layers of creamy vanilla custard with fresh bananas and shortbread.', allergens: 'dairy and gluten.' },
      { name: 'Coconut Panna Cotta', image: 'NoImage.png', description: 'Coconut milk panna cotta topped with fresh fruit and toasted coconut. ', allergens: 'dairy.' },
      { name: 'Strawberry Shortcake', image: 'NoImage.png', description: 'Vanilla sponge cake, fresh whipped cream, strawberries.', allergens: 'dairy and gluten.' },
    ]
    res.render("pages/minidesserts", { menuItems: menuItems });
  });

  app.get("/shortbreads", async (req,res) => {
    var menuItems = [
      { name: 'Lady Grey', image: 'LadyGrey.jpg', description: 'Winner of 2018 SCF shortbread competition! Earl grey infused shortbread, dark chocolate, toasted pistachios in shake of tea bags. Perfect with a cup of tea, London fog, or on its own.', allergens: '' },
      { name: 'Lemon Lavender', image: 'LemonLavender.jpg', description: 'Winner of 2019 SCF shortbread competition! Sweet, floral notes of manager balanced with the subtle tartness of lemon zest.', allergens: '' },
      { name: 'Butter Pecan', image: 'ButterPecan.jpg', description: 'Butter pecan - our all butter shortbread with toasted pecans.', allergens: '' },
      { name: 'Key Lime Coconut', image: 'KeyLimeSB.jpg', description: 'A tribute to Miami, the city that started my culinary journey! Toasted coconut and key limes in an all butter shortbread.', allergens: '' },
      { name: 'Pistachio Rose', image: 'PistRose.jpg', description: 'A classic combination of Rose water and crunchy pistachios', allergens: '' },
      { name: 'Butter', image: 'ButterShortbread.jpg', description: 'A classic all butter shortbread.', allergens: '' }
    ]
    res.render("pages/shortbreads", { menuItems: menuItems });
  });

  app.get("/sugarfree", async (req,res) => {
    var menuItems = [
      { name: 'Pumpkin Mousse', image: 'NoImage.png', description: '', allergens: '' },
      { name: 'Banana Bread', image: 'NoImage.png', description: '', allergens: '' },
      { name: 'Peanut Butter Chocolate Chip Muffins', image: 'NoImage.png', description: '', allergens: '' },
      { name: 'Pumpkin Bread', image: 'NoImage.png', description: '', allergens: '' },
      { name: 'Chocolate Peanut Butter Bars', image: 'NoImage.png', description: '', allergens: '' },
      { name: 'Chai Spice Bread', image: 'NoImage.png', description: '', allergens: '' },
      { name: 'Carrot Cake Bread', image: 'NoImage.png', description: '', allergens: '' }
    ]
    res.render("pages/sugarfree", { menuItems: menuItems });
  });

  app.get("/tables", async (req,res) => {
    var menuItems = [
      { name: 'Mini Cheesecake Bites', image: 'MiniCheesecake.jpg', description: '$36/dozen', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Cream Puffs', image: 'CreamPuffs.jpg', description: '$36/dozen', allergens: '' },
      { name: 'Macarons', image: 'Macarons.jpg', description: '$36/dozen', allergens: '' },
      { name: 'Chocolate Dipped Pretzel Rods', image: 'ChocolateDippedPretzels.jpg', description: '$24/dozen', allergens: 'dairy and gluten.' },
      { name: 'Chocolate Dipped Strawberries', image: 'ChocolateDippedStawberries.jpg', description: '$24/dozen', allergens: 'dairy.' },
      { name: 'Brownie Bites', image: 'BrownieBites.jpg', description: '$24/dozen', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Mini Fruit Tarts', image: 'MiniFruitTarts2.jpg', description: '$36/dozen', allergens: '' },
      { name: 'Logo Cookies', image: 'LogoCookies.jpg', description: 'Can be customized with a logo or image of your choice. 2.5" cookie $36/dz, 3" cookie $48/dz. ', allergens: '' },
      { name: 'Setup & Stand Rental', image: 'DessertSetup.jpg', description: 'Starting at $50', allergens: '' }
    ]
    res.render("pages/tables", {menuItems: menuItems });
  });
}
