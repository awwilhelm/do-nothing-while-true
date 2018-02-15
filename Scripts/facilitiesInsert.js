var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

//types: Dining, Facility
//all lowercase except for display name




var params = [
   {
     TableName:"Facilities",
     Item:{
         "type": "facility",
         "id": 0,
         "displayName": "MizzouRec",
         "sunday":{
           "open":true,
           "hours":[
             {
               "open":"12:00",
               "close":"22:00"
             }
           ]
         },
         "monday":{
           "open":true,
           "hours":[
             {
               "open":"05:30",
               "close":"22:00"
             }
           ],
         },
         "tuesday":{
           "open":true,
           "hours":[
             {
               "open":"05:30",
               "close":"22:00"
             }
           ]
         },
         "wednesday":{
           "open":true,
           "hours":[
             {
               "open":"05:30",
               "close":"22:00"
             }
           ]
         },
         "thursday":{
           "open":true,
           "hours":[
             {
               "open":"05:30",
               "close":"22:00"
             }
           ]
         },
         "friday":{
           "open":true,
           "hours":[
             {
               "open":"05:30",
               "close":"19:00"
             }
           ]
         },
         "saturday":{
           "open":true,
           "hours":[,
             {
               "open":"09:00",
               "close":"14:00"
             }
           ]
         },
         "location":{
           "latitude":"38.941127",
           "longitude":"-92.326308"
         }

     }
 },
 {
     TableName:"Facilities",
     Item:{
         "type": "facility",
         "id": 1,
         "displayName": "The MU Student Center",
         "sunday":{
           "open":true,
           "hours":[
             {
               "open":"09:00",
               "close":"00:00"
             }
           ]
         },
         "monday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"00:00"
             }
           ],
         },
         "tuesday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"00:00"
             }
           ]
         },
         "wednesday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"00:00"
             }
           ]
         },
         "thursday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"00:00"
             }
           ]
         },
         "friday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"00:00"
             }
           ]
         },
         "saturday":{
           "open":true,
           "hours":[,
             {
               "open":"09:00",
               "close":"00:00"
             }
           ]
         },
         "location":{
           "latitude":"38.942634",
           "longitude":"-92.326773"
         }

     }
 },
 {
     TableName:"Facilities",
     Item:{
         "type": "dining",
         "id": 2,
         "displayName": "Baja Grill",
         "sunday":{
           "open":true,
           "hours":[
             {
                 "open":"16:00",
                 "close":"20:00",
                 "menu":"Breakfast Quesadilla, Burrito, Carne Asada, Cuban Sandwich, Fish Tacos, Grilled Caesar Salad, Jamaican Sandwich, Macho Nachos, Nachos, Quesadilla, Quesadilla con Estilo, Rancero Quesajita, Taco, Chips, Salsa, Queso, Smoothies"
             }
           ],
         },
         "monday":{
           "open":true,
           "hours":[
             {
                 "open":"11:00",
                 "close":"20:00",
                 "menu":"Breakfast Quesadilla, Burrito, Carne Asada, Cuban Sandwich, Fish Tacos, Grilled Caesar Salad, Jamaican Sandwich, Macho Nachos, Nachos, Quesadilla, Quesadilla con Estilo, Rancero Quesajita, Taco, Chips, Salsa, Queso, Smoothies"
             }
           ],
         },
         "tuesday":{
           "open":true,
           "hours":[
             {
                 "open":"11:00",
                 "close":"20:00",
                 "menu":"Breakfast Quesadilla, Burrito, Carne Asada, Cuban Sandwich, Fish Tacos, Grilled Caesar Salad, Jamaican Sandwich, Macho Nachos, Nachos, Quesadilla, Quesadilla con Estilo, Rancero Quesajita, Taco, Chips, Salsa, Queso, Smoothies"
             }
           ]
         },
         "wednesday":{
           "open":true,
           "hours":[
             {
                 "open":"11:00",
                 "close":"20:00",
                 "menu":"Breakfast Quesadilla, Burrito, Carne Asada, Cuban Sandwich, Fish Tacos, Grilled Caesar Salad, Jamaican Sandwich, Macho Nachos, Nachos, Quesadilla, Quesadilla con Estilo, Rancero Quesajita, Taco, Chips, Salsa, Queso, Smoothies"
             }
           ]
         },
         "thursday":{
           "open":true,
           "hours":[
             {
                 "open":"11:00",
                 "close":"20:00",
                 "menu":"Breakfast Quesadilla, Burrito, Carne Asada, Cuban Sandwich, Fish Tacos, Grilled Caesar Salad, Jamaican Sandwich, Macho Nachos, Nachos, Quesadilla, Quesadilla con Estilo, Rancero Quesajita, Taco, Chips, Salsa, Queso, Smoothies"
             }
           ]
         },
         "friday":{
           "open":true,
           "hours":[
             {
                 "open":"11:00",
                 "close":"16:00",
                 "menu":"Breakfast Quesadilla, Burrito, Carne Asada, Cuban Sandwich, Fish Tacos, Grilled Caesar Salad, Jamaican Sandwich, Macho Nachos, Nachos, Quesadilla, Quesadilla con Estilo, Rancero Quesajita, Taco, Chips, Salsa, Queso, Smoothies"
             }
           ]
         },
         "saturday":{
           "open":false,
           "hours":[]
         },
         "menuLink":"https://dining.missouri.edu/baja-grill/",
         "location":{
           "latitude":"38.939319",
           "longitude":"-92.323706"
         }
     }
 },
 {
     TableName:"Facilities",
     Item:{
         "type": "dining",
         "id": 3,
         "displayName": "Sabai Southeast Asian Restaurant",
         "sunday":{
           "open":false,
           "hours":[],
         },
         "monday":{
           "open":true,
           "hours":[
             {
                 "open":"10:30",
                 "close":"20:00",
                 "menu":"Build Your Own Rice Bowl, Chicken Satay, Firecracker Pork, Lettuce Wraps, Sweet Chili Chicken, Thai Chicken Curry, Drinken Noodles, Korean Tacos, Ramen Bowl, Sabai Noodle Bowl, Shrimp Red Curry, Tofu Red Curry"
             }
           ],
         },
         "tuesday":{
           "open":true,
           "hours":[
             {
                 "open":"10:30",
                 "close":"20:00",
                 "menu":"Build Your Own Rice Bowl, Chicken Satay, Firecracker Pork, Lettuce Wraps, Sweet Chili Chicken, Thai Chicken Curry, Drinken Noodles, Korean Tacos, Ramen Bowl, Sabai Noodle Bowl, Shrimp Red Curry, Tofu Red Curry"
             }
           ]
         },
         "wednesday":{
           "open":true,
           "hours":[
             {
                 "open":"10:30",
                 "close":"20:00",
                 "menu":"Build Your Own Rice Bowl, Chicken Satay, Firecracker Pork, Lettuce Wraps, Sweet Chili Chicken, Thai Chicken Curry, Drinken Noodles, Korean Tacos, Ramen Bowl, Sabai Noodle Bowl, Shrimp Red Curry, Tofu Red Curry"
             }
           ]
         },
         "thursday":{
           "open":true,
           "hours":[
             {
                 "open":"10:30",
                 "close":"20:00",
                 "menu":"Build Your Own Rice Bowl, Chicken Satay, Firecracker Pork, Lettuce Wraps, Sweet Chili Chicken, Thai Chicken Curry, Drinken Noodles, Korean Tacos, Ramen Bowl, Sabai Noodle Bowl, Shrimp Red Curry, Tofu Red Curry"
             }
           ]
         },
         "friday":{
           "open":true,
           "hours":[
             {
                 "open":"10:30",
                 "close":"16:00",
                 "menu":"Build Your Own Rice Bowl, Chicken Satay, Firecracker Pork, Lettuce Wraps, Sweet Chili Chicken, Thai Chicken Curry, Drinken Noodles, Korean Tacos, Ramen Bowl, Sabai Noodle Bowl, Shrimp Red Curry, Tofu Red Curry"
             }
           ]
         },
         "saturday":{
           "open":false,
           "hours":[]
         },
         "menuLink":"https://dining.missouri.edu/sabai/",
         "location":{
           "latitude":"38.941923",
           "longitude":"-92.324509"
         }

     }
 },
  {
      TableName:"Facilities",
      Item:{
          "type": "dining",
          "id": 4,
          "displayName": "Plaza 900",
          "sunday":{
            "open":true,
            "hours":[
              {
                "open":"12:00",
                "close":"14:30",
                "menu":"Breadstick, Chicken Alfredo Sauce, Chili Dog, Cookies & Cream Pie, Dog Daze, French Fries, Grilled Asparagus, Italian Mixed Vegetables, Jumbo Frank or Turkey Sausage, Peanut Butter Cookie, Perfect Penne Pasta, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Tomato Garlic Sauce"
              },
              {
                "open":"16:30",
                "close":"20:00",
                "menu":"Chili Dog, Creamy Cole Slaw, Dog Daze, French Fries, Garlic Cheddar Biscuit, Grilled Zucchini, Jumbo Frank or Turkey Sausage, New York Cheesecake, Peanut Butter Cookie, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Popcorn Shrimp, Riviera Vegetables"
              }
            ]
          },
          "monday":{
            "open":true,
            "hours":[
              {
                  "open":"10:30",
                  "close":"14:30",
                  "menu":"Black Beans & Rice, Blackberry Cobbler, French Fries, Gourmet Grilled Cheese, Grilled American Cheese, Grilled Sugar Snap Peas, Jerk Pork Loin, Jerk Sweet Potatoes, Oatmeal Raisin Cookie, Pizza/Deli/Salad Bar, Stir-Fry On Stage, White Cheddar & Tomato Grilled Cheese"
              },
              {
                "open":"16:30",
                "close":"20:00",
                "menu":"Bacon & Chive Mac & Cheese, Bean Salad, Carrots with Caraway & Ginger, French Fries, Garlic French Bread, Gourmet Grilled Cheese, Grilled American Cheese, Herb Roasted Turkey Breast, Kitchen Cuisine, Marshmallow Treat, Oatmeal Raisin Cookie, Pizza/Deli/Salad Bar, Stir-Fry On Stage, White Cheddar & Tomato Grilled Cheese"
              }
            ],
          },
          "tuesday":{
            "open":true,
            "hours":[
              {
                "open":"10:30",
                "close":"14:30",
                "menu":"Baked Fish with Lemon Caper Sauce, Chocolate Chip Cookie, French Fries, Grilled Asparagus, Grilled Pepperjack Chicken, Kickin' Chicken, Old Fashion Lemon Bar, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Roasted Edamame, Romano Swiss Roll, Spicy Chicken Sandwich, Wild Rice Pilaf"
              },
              {
                "open":"16:30",
                "close":"20:00",
                "menu":"Carmelized Onion Mashed Potatoes, Chocolate Chip Cookie, French Fries, Fresh Yellow Squash, Frosted Yellow Cake, Grilled Pepperjack Chicken, Kickin' Chicken, Meatloaf, Peas, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Spicy Chicken Sandwich"
              }
            ]
          },
          "wednesday":{
            "open":true,
            "hours":[
              {
                "open":"10:30",
                "close":"14:30",
                "menu":"Brown & Serve Roll, Carnival Cookie, Chicken Chipotle Flat Top, Flat Tops, French Fries, Garden Veggie Flat Top, Marinated Mushrooms, Pecan Pie, Pizza/Deli/Salad Bar, Rosemary Redskin Potatoes, Rotisserie Chicken Quarter, Stir-Fry On Stage"
              },
              {
                "open":"16:30",
                "close":"20:00",
                "menu":"Buffalo Chicken Burrito, Burrito Bonanza, Carnival Cookie, Carolina Cole Slaw, Chicken Chipotle Flat Top, Flat Tops, French Fries, Frosted Chocolate Cake, Garden Veggie Flat Top, Grilled Corn, Pizza/Deli/Salad Bar, Pulled Pork Burrito, Stir-Fry On Stage"
              }
            ]
          },
          "thursday":{
            "open":true,
            "hours":[
              {
                "open":"10:30",
                "close":"14:30",
                "menu":"Bacon Cheese Fries, Baked Potato, Beef or Turkey Burger, Black Bean Burger, Capri Vegetables, Cheesecake Brownie, Gourmet Burgers, Greek Gyro, Peas, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Sugar Cookie"
              },
              {
                "open":"16:30",
                "close":"20:00",
                "menu":"Bacon Cheese Fries, Beef or Turkey Burger, Black Bean Burger, Dinner Roll, Gourmet Burgers, Mashed Potatoes & Gravy, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Pumpkin Pie, Roast Beef, Roasted Tomatoes, Southern Green Beans, Sugar Cookie"
              }
            ]
          },
          "friday":{
            "open":true,
            "hours":[
              {
                "open":"10:30",
                "close":"14:30",
                "menu":"Beer Battered Cod, Carrot Cake, Corn, Double Chocolate Chip Cookie, French Fries, Fried Flounder, Julienne Carrots & Zucchini, Parslied Noodles, Pizza/Deli/Salad Bar, Stir-Fry On Stage, Swedish Meatballs, Sweet Yeast Roll, Under the Sea"
              },
              {
                "open":"16:30",
                "close":"20:00",
                "menu":"Beer Battered Cod, Breaded Okra, Cucumber, Onion & Tomato Salad, Double Chocolate Chip Cookie, French Fries, Fried Flounder, Peach Cobbler, Pizza/Deli/Salad Bar, Scalloped Potatoes, Southern Fried Chicken, Stir-Fry On Stage, Under the Sea"
              }
            ]
          },
          "saturday":{
            "open":true,
            "hours":[,
              {
                "open":"10:30",
                "close":"14:30",
                "menu":"American Fries, Chili Dog, Dutch Apple Pie, French Fries, French Toast Sticks, Jumbo Frank or Turkey Sausage, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Ranger Cookie, Roasted Andouille Sausage, Scrambled Eggs"
              },
              {
                "open":"16:30",
                "close":"20:00",
                "menu":"Chili Dog, Corn Dog, Creamy Cole Slaw, Dog Daze, French Fries, Garden Vegetable Medley, Iced Brownie, Jumbo Frank or Turkey Sausage, Pizza/Deli/Salad Bar, Plaza Stir-Fry, Ranger Cookie, Tiger Joe Sandwich, Vegan Joe Sandwich"
              }
            ]
          },
          "menuLink":"https://dining.missouri.edu/plaza-900/",
          "location":{
            "latitude":"38.939319",
            "longitude":"-92.323706"
          }
      }
  },
  {
     TableName:"Facilities",
     Item:{
         "type": "dining",
         "id": 5,
         "displayName": "Rollins Dining Hall",
         "sunday":{
           "open":true,
           "hours":[
             {
               "open":"08:00",
               "close":"14:30",
               "meals":[
                 {
                   "start":"08:00",
                   "end":"10:30",
                   "menu":"Belgian Waffle, Grilled Ham, Eggs, Hash Brown Patty, Sausage Gravy & Biscuit, Assorted Breads, Donuts & Pastries, Assorted Fruits & Juices"
                 },
                 {
                   "start":"10:30",
                   "end":"11:00",
                   "menu":"Limited Menu - Continental Breakfast"
                 },
                 {
                   "start":"11:00",
                   "end":"14:30",
                   "menu":"Sausage Gravy & Biscuit, Scrambled Eggs, Grill/Deli/Salad Bar, Grilled Ham, Italian Wedding Soup, Sliced Carrots"
                 }
               ]
             }
           ],
         },
         "monday":{
           "open":true,
           "hours":[
             {
                 "open":"07:00",
                 "close":"10:30",
                 "menu":"Belgian Waffle, Grilled Ham, Eggs, Hash Brown Patty, Sausage Gravy & Biscuit, Assorted Breads, Donuts & Pastries, Assorted Fruits & Juices"

             },
             {
               "open":"11:00",
               "close":"14:30",
               "menu":"Glazed Brussel Sprouts, Golden Broccoli Soup, Grill/Deli/Salad Bar, Italian Mixed Vegetables, Pizza & Pasta Bar, Sugar Cookie, Toasted Beef Ravioli, Toasted Cheese Ravioli"
             }
           ],
         },
         "tuesday":{
           "open":true,
           "hours":[
             {
                 "open":"07:00",
                 "close":"10:30",
                 "menu":"Chicken Alfredo Lasagna, Creamy Vegetarian Lasagna, Fried Cauliflower, Garden Vegetable Rotini Soup, Green Beans Almondine, Grill/Deli/Salad Bar, Oatmeal Raisin Cookie, Pizza & Pasta Bar"
             },
             {
               "open":"11:00",
               "close":"14:30",
               "menu":"Sausage Gravy & Biscuit, Scrambled Eggs, Grill/Deli/Salad Bar, Grilled Ham, Italian Wedding Soup, Sliced Carrots"
             }
           ]
         },
         "wednesday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"10:30",
               "menu":"Belgian Waffle, Grilled Ham, Eggs, Hash Brown Patty, Sausage Gravy & Biscuit, Assorted Breads, Donuts & Pastries, Assorted Fruits & Juices"
             },
             {
               "open":"11:00",
               "close":"14:30",
               "menu":"Four Cheese Spinach Tortellini, Grill/Deli/Salad Bar, Italian Beef Sandwich, No Bake Cookie, Onion Rings, Pizza & Pasta Bar, Potato & Bacon Soup, Sauteed Vegetables"
             }
           ]
         },
         "thursday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"10:30",
               "menu":"Belgian Waffle, Grilled Ham, Eggs, Hash Brown Patty, Sausage Gravy & Biscuit, Assorted Breads, Donuts & Pastries, Assorted Fruits & Juices"
             },
             {
               "open":"11:00",
               "close":"14:30",
               "menu":"Beef & Pork Cannelloni Bites, Carnival Cookie, Carrots with Caraway & Ginger, Cheese Manicotti, Chicken & Wild Rice Soup, Chicken Artichoke Cannelloni Bites, Grill/Deli/Salad Bar, Pizza & Pasta Bar, Riviera Vegetables"
             }
           ]
         },
         "friday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"10:30",
               "menu":"Belgian Waffle, Grilled Ham, Eggs, Hash Brown Patty, Sausage Gravy & Biscuit, Assorted Breads, Donuts & Pastries, Assorted Fruits & Juices"
             },
             {
               "open":"11:00",
               "close":"14:30",
               "menu":"Fettuccini Supreme, French Onion Soup, Grill/Deli/Salad Bar, Grilled Asparagus, Italian Baked Chicken, Pizza & Pasta Bar, Ranger Cookie, Sicilian Vegetables"
             }
           ]
         },
         "saturday":{
           "open":true,
           "hours":[
             {
               "open":"08:00",
               "close":"14:30",
               "meals":[
                 {
                   "start":"08:00",
                   "end":"10:30",
                   "menu":"Belgian Waffle, Grilled Ham, Eggs, Hash Brown Patty, Sausage Gravy & Biscuit, Assorted Breads, Donuts & Pastries, Assorted Fruits & Juices"
                 },
                 {
                   "start":"10:30",
                   "end":"11:00",
                   "menu":"Limited Menu - Continental Breakfast"
                 },
                 {
                   "start":"11:00",
                   "end":"14:30",
                   "menu":"Sausage Gravy & Biscuit, Scrambled Eggs, Grill/Deli/Salad Bar, Grilled Ham, Italian Wedding Soup, Sliced Carrots"
                 }]
             }
           ]
         },
         "menuLink":"https://dining.missouri.edu/rollins/",
         "location":{
           "latitude":"38.941760",
           "longitude":"-92.322514"
         }

     }
},
  {
      TableName:"Facilities",
      Item:{
          "type": "facility",
          "id": 6,
          "displayName": "Ellis Library",
          "sunday":{
            "open":true,
            "hours":[
              {
                "open":"00:00",
                "close":"00:00"
              }
            ]
          },
          "monday":{
            "open":true,
            "hours":[
              {
                "open":"00:00",
                "close":"00:00"
              }
            ],
          },
          "tuesday":{
            "open":true,
            "hours":[
              {
                "open":"00:00",
                "close":"00:00"
              }
            ]
          },
          "wednesday":{
            "open":true,
            "hours":[
              {
                "open":"00:00",
                "close":"00:00"
              }
            ]
          },
          "thursday":{
            "open":true,
            "hours":[
              {
                "open":"00:00",
                "close":"00:00"
              }
            ]
          },
          "friday":{
            "open":true,
            "hours":[
              {
                "open":"00:00",
                "close":"00:00"
              }
            ]
          },
          "saturday":{
            "open":true,
            "hours":[,
              {
                "open":"08:00",
                "close":"00:00"
              }
            ]
          },
          "location":{
            "latitude":"38.944491",
            "longitude":"-92.326012"
          }
      }
  },
  {
     TableName:"Facilities",
     Item:{
         "type": "dining",
         "id": 7,
         "displayName": "Emporium Cafe",
         "sunday":{
           "open":true,
           "hours":[
             {
               "open":"12:00",
               "close":"22:00",
               "menu":"Breakfast, Fresh Salads, Sandwiches, Desserts (finish later after alex feedback)"
             }
           ],
         },
         "monday":{
           "open":true,
           "hours":[
             {
                 "open":"07:00",
                 "close":"22:00",
                 "menu":"Breakfast, Fresh Salads, Sandwiches, Desserts (finish later after alex feedback)"
             }
           ],
         },
         "tuesday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"22:00",
               "menu":"Breakfast, Fresh Salads, Sandwiches, Desserts (finish later after alex feedback)"
             }
           ]
         },
         "wednesday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"22:00",
               "menu":"Breakfast, Fresh Salads, Sandwiches, Desserts (finish later after alex feedback)"
             }
           ]
         },
         "thursday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"22:00",
               "menu":"Breakfast, Fresh Salads, Sandwiches, Desserts (finish later after alex feedback)"
             }
           ]
         },
         "friday":{
           "open":true,
           "hours":[
             {
               "open":"07:00",
               "close":"22:00",
               "menu":"Breakfast, Fresh Salads, Sandwiches, Desserts (finish later after alex feedback)"
             }
           ]
         },
         "saturday":{
           "open":true,
           "hours":[
             {
               "open":"12:00",
               "close":"22:00",
               "menu":"Breakfast, Fresh Salads, Sandwiches, Desserts (finish later after alex feedback)"
             }
           ]
         },
         "menuLink":"https://dining.missouri.edu/emporium-cafe/",
         "location":{
           "latitude":"38.939319",
           "longitude":"-92.323706"
         }

     }
 }
];

var i;
console.log("Adding a new item...");
for(i=0; i<params.length; i++){
  docClient.put(params[i], function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
      }
  });

}
