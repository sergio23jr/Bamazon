const mysql = require("mysql");
const inquirer = require("inquirer");
require('dotenv').config();
const myKeys = require("./keys.js");
const password = myKeys.id

let cart = [];
let totalPrice = 0;

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "" + myKeys.id,
    database: "Bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    console.log("Welcome to Bamazon!")
    mainMenu()
});

const mainMenu = () => {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What do you wish to do?",
            choices: ["Buy items", "View Cart", "View Departments", "Leave Bamazon"]
        }
    ]).then(answers => {
        switch (answers.action) {
            case ("Buy items"):
                showProducts()
                break;
            case ("View Cart"):
                viewCart();
                break;
            case ("View Departments"):
                viewDepartments()
                break;
            case ("Leave Bamazon"):
                connection.end();
                break;
        }
    })
}

const showProducts = () => {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("\nHere are our item for sale")
        console.log("--------------------------\n")
        res.forEach(row => {
            console.log(
                `Item number: ${row.item_id}
Product: ${row.product_name}
Price: ${row.price}
Items left: ${row.stock_quantity}
------------------`)
        })
        purchaseItems();
    });
}

const purchaseItems = () => {
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "Choose the id number of the product you wish to purchase.",
            choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        {
            name: "quantity",
            type: "input",
            message: "How many do you want to buy? (Enter Quantity)"
        }

    ]).then(answers => {
        switch (answers.choice) {
            case ('1'):
                updateInfo(answers.choice, answers.quantity)
                break;
            case ('2'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('3'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('4'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('5'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('6'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('7'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('8'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('9'):
                updateInfo(answers.choice, answers.quantity);
                break;
            case ('10'):
                updateInfo(answers.choice, answers.quantity);
                break;
        }
    })
}

const viewDepartments = () => {
    inquirer.prompt([
        {
            name: "Departments",
            type: "list",
            Message: "What departments would you like to look at?",
            choices: ["Beauty & Personal Care", "Books", "CDs and Vinyl", "Cell phone & accessories", "Electronics", "Pet Supplies"]
        }
    ]).then(answers => {
        console.log(answers.Departments)
        connection.query(`SELECT * FROM products where department_name = "${answers.Departments}"`, function (err, res) {
            res.forEach(row => {
                console.log(`--------------------------------------\n Item number: ${row.item_id}\n Product: ${row.product_name}\n Price: ${row.price}\n Quantity: ${row.stock_quantity}\n`)
            })
            mainMenu();
        })
    })
}

const viewCart = () => {
    console.log("Your cart")

    cart.forEach(row => {
        console.log(
            `Item Number: ${row.itemNum} Product: ${row.product} Price: ${row.price}           Amount:${row.amount}`)
    })
    cart.forEach(row => {
        totalPrice += (row.price * row.amount)
    })
    console.log(" Your current total is:" + totalPrice)

    inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Do you wish to checkout?",
            choices: ["Yes, checkout.", "No, continue Shopping."]
        }
    ]).then(answers => {
        switch (answers.options) {
            case ("Yes, checkout."):
                checkout(totalPrice);
                break;
            case ("No, continue Shopping."):
                mainMenu()
                break;
        }
    })
}


const updateInfo = (id, amount) => {
    connection.query(`SELECT * FROM products where item_id = ${id}`, function (err, res) {
        if (err) throw err;
        if (amount < res[0].stock_quantity) {
            let newStockAmount = 0;
            let product = res[0].product_name;
            let price = res[0].price;
            let itemNum = res[0].item_id;
            newStockAmount = res[0].stock_quantity - amount
            console.log(`Your Cart has been updated: ${amount} of ${res[0].product_name}`)

            let query = connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: newStockAmount
                    },
                    {
                        item_id: id
                    }
                ],
                function (err, res) {
                    console.log();
                }
            )
            cart.push({ itemNum, product, price, amount })
            mainMenu();


        } else {
            console.log(`The amount you have selected (${amount}) is currently not available because we do not have enough in stock at this time please try again or select a different option`)
            mainMenu();
        }
    });

}

const checkout = (amountDue) => {
    console.log("Your balance is " + amountDue)
    console.log("Thank your for your purchase an email will be sent to you with your order information")
    connection.end()
}