# MongoDB_Project
# 🛒 MongoDB Supermarket Management Project

## 📌 Project Overview

This project demonstrates the basic operations of MongoDB using a **Supermarket Management System**. It is designed as a practical exercise to understand NoSQL databases, collections, document insertion, querying, and aggregation using the MongoDB Shell (mongosh).

---

## 🎯 Objective

- Create a MongoDB database.
- Create multiple collections.
- Insert documents into collections.
- Retrieve data using queries.
- Perform filtering using MongoDB operators.
- Calculate average values using the Aggregation Framework.

---

## 🗂 Database Name

```
supermarket
```

---

## 📁 Collections

The project contains the following collections:

1. **employees**
2. **inventory**
3. **payments**
4. **promo**

---

## 📄 Collection Details

### Employees
Stores employee information.

Fields:
- emp_name
- emp_age
- job_role
- salary

---

### Inventory
Stores product information.

Fields:
- name
- price
- quantity
- category

---

### Payments
Stores payment details.

Fields:
- gross_amount
- discounts
- net_amount

---

### Promo
Stores promotional sales information.

Fields:
- name
- period
- daily_sales

---

## ⚙ Features

- Database Creation
- Collection Creation
- Insert Multiple Documents
- Display Documents
- Search Documents
- Comparison Operators
- Array Queries
- Aggregation Queries

---

## 🔍 MongoDB Operations Used

### Database Commands

```javascript
use supermarket
show dbs
show collections
```

### Insert

```javascript
insertMany()
```

### Find

```javascript
find()
pretty()
```

### Comparison Operators

- $gt
- $gte
- $lt

### Array Operator

- $elemMatch

### Aggregation

- $project
- $avg

---

## 💻 Technologies Used

- MongoDB
- MongoDB Shell (mongosh)

---

## ▶️ How to Run

1. Start MongoDB Server.
2. Open MongoDB Shell (mongosh).
3. Create the database:

```javascript
use supermarket
```

4. Create the collections.
5. Insert the data.
6. Execute the queries.
7. View the output.

---

## 📚 Learning Outcomes

After completing this project, you will understand:

- MongoDB Database Creation
- Collections
- Documents
- CRUD Operations
- Query Operators
- Aggregation Framework
- Array Queries

---

## 👨‍💻 Author

**Sushant Patil**

VTU – 6th Semester

MongoDB Practical Project
