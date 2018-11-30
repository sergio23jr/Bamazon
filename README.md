# Bamazon

### OverView 

Hello and welcome to Bamazon powered by node.js and mysql.


### Instructions

1. Navigate to the root of your project and run `npm init -y` &mdash; this will initialize a `package.json` file for your project. The `package.json` file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a `package.json` file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

2. This will be the line of code you will be using to downloaded the required packages
   ```
   npm install express dotenv
   ```

3. Next, create a file named `.env`, add the following to it, replacing the values with your  mysql password (no quotes) once you have them:

```js
# Your password
SECRET_KEY = <Your mysql password>
```

### Starting off
1. This is the first screen when you first start up the app  
 ![Demo](https://github.com/sergio23jr/Bamazon/blob/master/images/StartUp.png)
 
1a. rom the main menu if you select *Buy Items* the following screen will show up.
![Demo](https://github.com/sergio23jr/Bamazon/blob/master/images/viewProducts.png)
 
On this page the app will show you the items available for purchase, these items include
  * Item id
  * Product name
  * Price of product
  * Quantity of product in stock
  
1b. After selecting the item number you wish to purchase the app will prompt you to select the quantity you wish to purchase.

![Demo](https://github.com/sergio23jr/Bamazon/blob/master/images/adding%20to%20cart.png)

### Warning

If you select a quantity larger than what is in stock bamazon will notify you that the request cannot be made and return you to the Main menu.

![Demo]()
  
Once you have selected your amount the app will display to you the product name as well as the amount and that it has added it to your cart. The app will then return you back to the Main menu.

2. If you select *View Cart* you will be directed to your cart showing you what you currently have pending to purchase.
![Demo](https://github.com/sergio23jr/Bamazon/blob/master/images/yourCart.png)

From here you have the option to either 
* A. Checkout which will then tell you your total and ending the session
![Checking out](https://github.com/sergio23jr/Bamazon/blob/master/images/checking%20out.png)

* B. Continue shopping and return you to the main menu.

3. if you wish to view the different departments selecting the *View Department* will display all department from Bamazon

1[departments](https://github.com/sergio23jr/Bamazon/blob/master/images/departments.png)

3a. Selecting any option will then show you all the products in stock in that department.
![department products]()

4. Last bbut not least selecting the *Leave Bamazon* option will end the session.
