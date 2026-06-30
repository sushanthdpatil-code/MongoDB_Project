db.createCollection("employees")

var data1 = [
    {
        "emp_name": "Haritha",
        "emp_age": 23,
        "job_role": "cashier",
        "salary": 20000
    },
    {
        "emp_name": "shalini",
        "emp_age": 17,
        "job_role": "store_manager",
        "salary": 100000
    },
    {
        "emp_name": "riya",
        "emp_age": 18,
        "job_role": "store associate",
        "salary": 30000
    },
    {
        "emp_name": "leeya",
        "emp_age": 23,
        "job_role": "senior cashier",
        "salary": 45000
    },
    {
        "emp_name": "sagar",
        "emp_age": 20,
        "job_role": "store associate",
        "salary": 35000
    }
];

db.employees.insertMany(data1);
db.employees.find().pretty();


// Create Inventory Collection
db.createCollection("inventory")

var data2 = [
    {
        "name": "chocolates",
        "price": 20,
        "quantity": 2500,
        "category": ["chocolates", "sweet"]
    },
    {
        "name": "milk",
        "price": 40,
        "quantity": 1000,
        "category": ["dairy", "healthy"]
    },
    {
        "name": "eggs",
        "price": 5,
        "quantity": 1250,
        "category": ["proteins", "healthy"]
    },
    {
        "name": "carrots",
        "price": 6.75,
        "quantity": 3000,
        "category": ["vegetables", "proteins", "organic"]
    },
    {
        "name": "beans",
        "price": 7.65,
        "quantity": 6000,
        "category": ["vegetables", "organic", "healthy"]
    }
];

db.inventory.insertMany(data2);
db.inventory.find().pretty();


// Create Payments Collection
db.createCollection("payments")

var data3 = [
    {
        "gross_amount": 105.65,
        "discounts": 10,
        "net_amount": 95
    },
    {
        "gross_amount": 42.45,
        "discounts": 0,
        "net_amount": 45.25
    },
    {
        "gross_amount": 153.33,
        "discounts": 20.33,
        "net_amount": 133
    },
    {
        "gross_amount": 21,
        "discounts": 0,
        "net_amount": 21
    },
    {
        "gross_amount": 89.72,
        "discounts": 0.72,
        "net_amount": 89
    }
];

db.payments.insertMany(data3);
db.payments.find().pretty();


// Create Promo Collection
db.createCollection("promo")

var data4 = [
    {
        "name": "sales promo",
        "period": 7,
        "daily_sales": [20, 50, 34, 14, 25]
    },
    {
        "name": "milk promo",
        "period": 4,
        "daily_sales": [120, 200]
    },
    {
        "name": "meat promo",
        "period": 3,
        "daily_sales": [101, 250]
    },
    {
        "name": "newyear promo",
        "period": 2,
        "daily_sales": [65, 88, 105, 188, 74, 278, 350]
    }
];

db.promo.insertMany(data4);
db.promo.find().pretty();