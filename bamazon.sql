DROP DATABASE IF EXISTS Bamazon_DB;

CREATE DATABASE Bamazon_DB;

use Bamazon_DB;

create table products (
item_id int not null auto_increment primary key ,
product_name varchar(255) not null,
department_name varchar(255) not null,
price decimal (10,2) not null,
stock_quantity int not null
);

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ("Google Pixel 3 case", "Cell phone & accessories", 12.99, 50),
("The Very Hungry Catapillar", "Books", 6.59, 100),
("Noise Cancelling Headphones", "Electronics", 198.00, 20),
("Nikon D3500 Camera", "Electronics", 449.00, 150),
("Apple MacBook Air 13.3 in Laptop", "Electronics", 887.00, 200),
("Cool Water By Davidoff For Men", "Beauty & Personal Care", 25.49, 100),
("SmartCat Cat Climber", "Pet Supplies", 65.77, 75),
("Yeowww! Catnip Toy Yellow Banana", "Pet Supplies", 4.95, 500),
("Bohemian Rhapsody", "CDs and Vinyl", 10.97, 450),
("Abbey Road", "CDs and Vinyl", 19.73, 500);


SELECT * FROM Bamazon_DB.products;