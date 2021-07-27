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

  app.get("/brunch", async (req,res) => {
    res.render("pages/brunch");
  });

  app.get("/contact", async (req,res) => {
    res.render("pages/contactus");
  });

  app.get("/faq", async (req,res) => {
    res.render("pages/faq");
  });

  app.get("/minidesserts", async (req,res) => {
    var menuItems = [
      { name: 'Rasmalai Tres Leches', description: 'Our take on a Mexican favorite, our sponge cake soaked in a malai mixture scented with cardamom and pistachios.' },
      { name: 'Tres Leches', description: 'Our ultra light sponge cake soaked in a sweet milk mixture, topped with whipped cream and fruit.' },
      { name: 'Tiramisu', description: 'Lady fingers soaked in espresso, mascarpone mousse and dusted with coco powder.' },
      { name: 'Lemon Tiramisu', description: 'A lighter version of everyone’s favorite dessert, ladyfingers soaked in a limoncello syrup, mascarpone cream and garnished with fresh berries.  ' },
      { name: 'Triple Chocolate Mousse', description: 'A chocolate lovers dream, three layers of decadent mousses, topped with chocolate accents.' },
      { name: 'Mango Panna Cotta', description: 'Rich and creamy panna cotta infused with mangoes and saffron.' },
      { name: 'Mixed Berry Panna Cotta', description: 'A creamy Italian dessert that melts in your mouth, topped with a mixed berry coulis and fresh berries.' },
      { name: 'Coconut Panna Cotta', description: 'Take your taste buds on a tropical vacation with this beauty! Coconut milk panna cotta topped with fresh fruit and toasted coconut.' },
      { name: 'Espresso Panna Cotta', description: 'A smooth custard infused with espresso.' },
      { name: 'Rose Panna Cotta', description: 'Our take on the refreshing falooda with an italian twist.' },
      { name: 'Rabri Panna Cotta', description: 'Saffron infused rabri panna cotta topped with almond brittle.' },
      { name: 'Black Forest', description: 'Rich chocolate cake with layers of chocolate whipped cream, cherries and chocolate shavings.' },
      { name: 'Key Lime Pie', description: 'The perfect balance of sweet and tart, and an ode to the city that started my culinary journey.' },
      { name: 'Banana Pudding', description: 'A southern classic no one can resist! Layers of creamy vanilla custard with fresh bananas and shortbread.' },
      { name: 'Mango Cheesecake', description: 'Creamy mango cheesecake filling with a graham cracker crust.' },
      { name: 'Chai Cheesecake', description: 'Parle-G crust topped with a chai infused cheesecake.' },
      { name: 'Thandai mousse', description: 'Everyone\'s favorite Holi drink in an irresistible combination of white chocolate and thandai in a light and airy mousse.' },
      { name: 'Strawberry Cheesecake', description: 'Layers of creamy cheesecake and fresh strawberries.' },
      { name: 'Pina Colada', description: 'Layers of coconut, pineapples, and whipped cream, topped with a cherry and toasted coconut.' },
      { name: 'Gulab jamun cheesecake', description: 'We’ve taken the classic creamy dessert and dressed it up with Indian flair! A pistachio shortbread crust, creamy cheesecake laced with cardamom, pistachios and saffron.' }
    ]
    res.render("pages/minidesserts", { menuItems: menuItems });
  });

  app.get("/shortbreads", async (req,res) => {
    var menuItems = [
      { name: 'Lady Grey', description: '' },
      { name: 'Pistachio Rose', description: '' },
      { name: 'Lemon Lavender', description: '' },
      { name: 'Maple Bourbon', description: '' },
      { name: 'Saffron and Dark Chocolate', description: '' },
      { name: 'Key Lime Coconut', description: '' },
      { name: 'Amaretti Cookies', description: '' },
      { name: 'Butter', description: '' }
    ]
    res.render("pages/shortbreads", { menuItems: menuItems });
  });

  app.get("/sugarfree", async (req,res) => {
    var menuItems = [
      { name: 'Pumpkin Mousse', description: '' },
      { name: 'Banana Bread', description: '' },
      { name: 'Peanut Butter Chocolate Chip Muffins', description: '' },
      { name: 'Pumpkin Bread', description: '' },
      { name: 'Chocolate Peanut Butter Bars', description: '' },
      { name: 'Chai Spice Bread', description: '' },
      { name: 'Carrot Cake Bread', description: '' }
    ]
    res.render("pages/sugarfree", { menuItems: menuItems });
  });
}
