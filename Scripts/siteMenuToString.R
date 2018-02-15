library(stringr)

starterString <- "Baked Fish with Lemon Caper Sauce
 Baked Potato
Vegetarian
Braised Chicken with Okra
Cheese Curls
Cream of Potato Soup
Vegetarian
Double Chocolate Chip Cookie
Glazed Baby Carrots
Grill/Deli/Salad Bar
Linguini with Edamame & Peas
Vegetarian
Peanut Butter Pie
Pizza
Vegetarian
Tomato Beef Tortellini Soup
"

output <- gsub('\n', ',', starterString)
output <- gsub('Vegan,', '', output)
output <- gsub('Vegetarian', '', output)
output <- gsub(',,', ', ', output)
output <- gsub(', ,', ', ', output)

print(output)
