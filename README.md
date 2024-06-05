## update not working

## run script

    # npm run start:dev
## Product Create Api end points
## api/products
## Method POST
## sample data
```
{
    "product": {
        "name": "Intel Processor",
        "description": "A sleek and powerful Intel Processor",
        "price": 250.99,
        "category": "computer",
        "tags": [
            "intel",
            "gforce",
            "asus",
            "lenovo"
        ],
        "variants": [
            {
                "type": "desktop",
                "value": "core i 5"
            },
            {
                "type": "laptop",
                "value": "hp"
            },
            {
                "type": "Grapich Card",
                "value": "6Gb"
            }
        ],
        "inventory": {
            "inStock": true,
            "quantity": 500
        }
    }
}
```

## Orders Create Api end points
## api/orders
## Method POST
## sample data
```
{
    "order": {
        "email": "abc_2@gmail.com",
        "productId": "6651928bf1d40569abfb4851",
        "price": 129.9,
        "quantity": 10
    }
}
```
