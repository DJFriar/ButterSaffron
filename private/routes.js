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
      { name: 'Rasmalai Tres Leches', image: 'RasmalaiTresLeches2.jpg', description: 'Our take on a Mexican favorite, our sponge cake soaked in a malai mixture scented with cardamom and pistachios.', allergens: 'dairy, eggs, gluten, and nuts.' },
      { name: 'Chai Tiramisu', image: 'ChaiTiramisu.jpg', description: 'Our take on a Desi favorite, chai biscoot! Layers of creamy mascarpone, lady fingers soaked in masala chai (ChaiwaliTx), chai spiced coco powder.', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Mango Cheesecake', image: 'MangoCheesecake1.jpg', description: 'Creamy mango cheesecake filling with a graham cracker crust.', allergens: 'dairy, nuts, and gluten.' },
      { name: 'Gulab Jamun Cheesecake', image: 'GulabJamunCheesecake-Tri.jpg', description: 'Cardamom and rose water scented cheesecake layered with gulab jamun.', allergens: 'dairy, gluten, and nuts.' },
      { name: 'Rabri Panna Cotta', image: 'NoImage.png', description: 'Inspired by one of my favorite childhood treats,  blend of fresh cream, almonds, pistachios, and saffron.', allergens: 'dairy and nuts.' },
      { name: 'Rose Panna Cotta', image: 'RosePannacotta2.jpg', description: 'Our take on the refreshing falooda with an italian twist.', allergens: '' },
      { name: 'Mango Panna Cotta', image: 'MangoPannacotta2.jpg', description: 'Rich and creamy panna cotta infused with mangoes and saffron.', allergens: 'dairy.' },
    ]
    res.render("pages/desidesserts", { menuItems: menuItems });
  });

  app.get("/minidesserts", async (req,res) => {
    var menuItems = [
      { name: 'Triple Chocolate Mousse', image: 'TripleChocolateMousse.jpg', description: 'A chocolate lovers dream, three layers of decadent mousses, topped with chocolate accents.', allergens: 'dairy.' },
      { name: 'Tiramisu', image: 'Tiramisu2.jpg', description: 'Lady fingers soaked in espresso, mascarpone mousse and dusted with coco powder.', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Lemoncello Tiramisu', image: 'LemonTiramisu.jpg', description: 'Layers of ladyfingers soaked in a limoncello syrup, mascarpone cream and garnished with fresh berries. ', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Tres Leches', image: 'TresLeches2.jpg', description: 'Sponge cake soaked in a sweet milk mixture, topped with whipped cream and fruit.', allergens: 'dairy, eggs, and gluten.' },
      // { name: 'Mixed Berry Cheesecake', image: 'NoImage.png', description: '', allergens: 'dairy and gluten.' },
      { name: 'Mixed Berry Panna Cotta', image: 'NoImage.png', description: 'A creamy Italian dessert that melts in your mouth, topped with a mixed berry coulis and fresh berries.', allergens: 'dairy.' },
      { name: 'NY Style Cheesecake', image: 'NoImage.png', description: 'Creamy, no bake cheesecake topped with fresh strawberry compote.', allergens: 'dairy and gluten.' },
      { name: 'Banana Pudding', image: 'NoImage.png', description: 'A southern classic no one can resist! Layers of creamy vanilla custard with fresh bananas and shortbread.', allergens: 'dairy and gluten.' },
      { name: 'Coconut Panna Cotta', image: 'NoImage.png', description: 'Coconut milk panna cotta topped with fresh fruit and toasted coconut. ', allergens: 'dairy.' },
      // { name: 'Strawberry Rose Cupcakes', image: 'StrawberryRoseCupcakes.jpg', description: 'Strawberry and rose water cupcakes accented with rose milk.', allergens: 'dairy and gluten.' },
      { name: 'Strawberry Shortcake', image: 'NoImage.png', description: 'Vanilla sponge cake, fresh whipped cream, strawberries.', allergens: 'dairy and gluten.' },
    ]
    res.render("pages/minidesserts", { menuItems: menuItems });
  });

  app.get("/shortbreads", async (req,res) => {
    var menuItems = [
      { name: 'Lady Grey', image: 'LadyGreySB2.jpg', description: 'Winner of 2018 SCF shortbread competition! Earl grey infused shortbread, dark chocolate, toasted pistachios in shake of tea bags. Perfect with a cup of tea, London fog, or on its own.', allergens: '' },
      { name: 'Lemon Lavender', image: 'NoImage.png', description: 'Winner of 2019 SCF shortbread competition! Sweet, floral notes of manager balanced with the subtle tartness of lemon zest.', allergens: '' },
      { name: 'Saffron and Dark Chocolate', image: 'NoImage.png', description: 'The cookie that inspired our namesake! Buttery soft saffron laced shortbreads dipped in dark chocolate and pistachio.', allergens: '' },
      { name: 'Key Lime Coconut', image: 'KeyLimeSB.jpg', description: 'A tribute to Miami, the city that started my culinary journey! Toasted coconut and key limes in an all butter shortbread.', allergens: '' },
      { name: 'Amaretti Cookies', image: 'NoImage.png', description: 'A great GF alternative, a traditional Italian cookie with flavors of almond, vanilla, and cardamom.', allergens: '' },
      { name: 'Pistachio Rose', image: 'NoImage.png', description: 'A classic combination of Rose water and crunchy pistachios', allergens: '' },
      { name: 'Butter', image: 'NoImage.png', description: 'A classic all butter shortbread.', allergens: '' }
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
      { name: 'Dessert Buffet', image: 'DessertBuffet.jpg', description: '', allergens: '' },
      { name: 'Mini Cheesecake Bites', image: 'NoImage.png', description: '$36/dozen', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Cream Puffs', image: 'MiniCreamPuffs.jpg', description: '$36/dozen', allergens: '' },
      { name: 'Macarons', image: 'NoImage.png', description: '$36/dozen', allergens: '' },
      { name: 'Chocolate Dipped Pretzel Rods', image: 'NoImage.png', description: '$24/dozen', allergens: 'dairy and gluten.' },
      { name: 'Chocolate Dipped Strawberries', image: 'NoImage.png', description: '$24/dozen', allergens: 'dairy.' },
      { name: 'Brownie Bites', image: 'NoImage.png', description: '$24/dozen', allergens: 'dairy, eggs, and gluten.' },
      { name: 'Mini Fruit Tarts', image: 'MiniFruitTarts2.jpg', description: '$36/dozen', allergens: '' },
      { name: 'Shortbread Cookies', image: 'NoImage.png', description: '$36/dozen', allergens: '' },
      { name: 'Logo Cookies', image: 'LogoCookies.jpg', description: '$36/dozen, can be customized with a logo or image of your choice.', allergens: '' },
      { name: 'Setup & Stand Rental', image: 'DessertSetup.jpg', description: 'Starting at $25, plus a refundable deposit.', allergens: '' }
    ]
    res.render("pages/tables", {menuItems: menuItems });
  });
}
