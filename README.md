# appening-assignment

## Authentication Routes

### User Signup
Post Request
```
http://localhost:4000/api/v1/signup
```
```
{
    "name": "sid",
    "email": "sid@email.com",
    "password": "password",
    "role":"user"
}
```

### User Login
Post Request
```
http://localhost:4000/api/v1/signup
```
```
{
    "email": "sid@email.com",
    "password": "password",
}
```

### User Logout
Post Request
```
http://localhost:4000/api/v1/signup
```

## Admin Routes

### Get the list of all users
Get Request
```
http://localhost:4000/api/v1/admin/users
``` 