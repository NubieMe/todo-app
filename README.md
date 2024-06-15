# Todo API

## User

### Register

-   Endpoint : `/api/register`
-   Method : `POST`
-   Request Body :

```json
{
    "username": "tatang",
    "password": "secret123"
}
```

-   Response Body (Success) :

```json
{
    "message": "create account success",
    "data": {
        "username": "tatang"
    }
}
```

-   Response Body (Failed) :

```json
{
    "errors": "username already exists"
}
```

### Login

-   Endpoint : `/api/login`
-   Method : `POST`
-   Request Body :

```json
{
    "username": "tatang",
    "password": "secret123"
}
```

Response Body (Success) :

```json
{
    "message": "login success",
    "data": {
        "username": "tatang",
        "token": "eyuhadjbrh148y38qwuhj"
    }
}
```

Response Body (Failed) :

```json
{
    "errors": "username/password is invalid"
}
```

## Category

### Create Category

-   Endpoint : `/api/category`
-   Method : `POST`
-   Request Body :

```json
{
    "name": "work"
}
```

-   Response Body (Success) :

```json
{
    "message": "create category success",
    "data": {
        "id": 1,
        "name": "work"
    }
}
```

-   Response Body (Failed) :

```json
{
    "errors": "name can't be empty"
}
```

### Get All Categories

-   Endpoint : `/api/category`
-   Method : `GET`
-   No Request Body Required

-   Response Body :

```json
{
    "message": "get all category success",
    "data": [
        {
            "id": 1,
            "name": "work"
        }
    ]
}
```

### Delete Category

-   Endpoint : `/api/category/:id`
-   Method : `DELETE`
-   Request Param : `id`=`1`
-   Response Body (Success) :

```json
{
    "message": "delete category success",
    "data": {
        "id": 1,
        "name": "work"
    }
}
```

-   Response Body (Failed) :

```json
{
    "errors": "category not found"
}
```

## Todo

### Create Todo

-   Endpoint : `/api/todo`
-   Method : `POST`
-   Request Header : `Bearer tokenaiey3ugdhays88t`
-   Request Body :

```json
{
    "todo": "fixing bug",
    "categoryId": 1
}
```

-   Response Body (Success) :

```json
{
    "message": "create todo success",
    "data": {
        "id": 1,
        "todo": "fixing bug",
        "username": "tatang",
        "category": "work"
    }
}
```

-   Response Body (Failed) :

```json
{
    "errors": "todo can't be empty"
}
```

### Get All Todo

-   Endpoint : `/api/todo`
-   Method : `GET`
-   No Request Body Required
-   Response Body :

```json
{
    "message": "get todo success",
    "data": [
        {
            "id": 1,
            "todo": "fixing bug",
            "username": "tatang",
            "category": "work"
        }
    ]
}
```

### Get Todo by User

-   Endpoint : `/api/todo?username=value`
-   Method : `GET`
-   Change the value in the Endpoint to username
-   Response Body (Success) :

```json
{
    "message": "get todo success",
    "data": [
        {
            "id": 1,
            "todo": "fixing bug",
            "username": "tatang",
            "category": "work"
        }
    ]
}
```

-   Response Body (Failed) :

```json
{
    "errors": "username not found"
}
```

### Get Todo by Category

-   Endpoint : `/api/todo?categoryId=value`
-   Method : `GET`
-   Change the value in the Endpoint to categoryId
-   Response Body (Success) :

```json
{
    "message": "get todo success",
    "data": [
        {
            "id": 1,
            "todo": "fixing bug",
            "username": "tatang",
            "category": "work"
        }
    ]
}
```

-   Response Body (Failed) :

```json
{
    "errors": "category not found"
}
```

### Update Todo

-   Endpoint : `/api/todo/:id`
-   Method : `PUT`
-   Request Param : `id`=`1`
-   Request Header : `Bearer tokendnusfhwr28wefu`
-   Request Body :

```json
{
    "todo": "cleaning desk after work",
    "categoryId": 1
}
```

-   Response Body (Success) :

```json
{
    "message": "update todo success",
    "data": {
        "id": 1,
        "todo": "cleaning desk after work",
        "username": "tatang",
        "category": "work"
    }
}
```

-   Response Body (Failed) :

```json
{
    "errors": "cannot update others todo"
}
```

### Delete Todo

-   Endpoint : `/api/todo/:id`
-   Method : `DELETE`
-   Request Param : `id`=`1`
-   Request Header : `Bearer tokeneojq391uy8qtw7gy`
-   Response Body (Success) :

```json
{
    "message": "delete todo success",
    "data": {
        "id": 1,
        "todo": "cleaning desk after work",
        "username": "tatang",
        "category": "work"
    }
}
```

-   Response Body (Failed) :

```json
{
    "errors": "cannot delete others todo"
}
```
