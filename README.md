<div id="top"></div>

# Weekifly

## Logo
<br />
<div align="center">
    <img src="./client/public/logo.png" alt="Logo">
</div>


## About The Project
Plans platform, in which users recommend plans to do in your area or in other places and with the possibility of creating your own. The glider creates it, launches it and hopes that customers can enjoy their plan

<p align="right">(<a href="#top">back to top</a>)</p>


## Endpoints List

Auth Routes:

| HTTP Method | URI path | Description |
| ----------- | -------- | ----------- |
| POST        | /signup  | Sign up     | 
| POST        | /login   | Log in      |
| GET         | /Verify  | Verify      |
| GET         | /logout  | Log out     |
 

User Routes:

| HTTP Method | URI path    | Description    |
| ----------- | ----------- | -------------- |
| GET         | /           | Show all users |
| GET         | /:id        | User detail    |
| POST        | /:id/edit   | Edit user      |
| POST        | /:id/delete | Delete user    |


Plans Routes:

| HTTP Method | URI path    | Description    |
| ----------- | ----------- | ---------------|
| GET         | /           | Show all plans |
| POST        | /           | Create plan    |
| GET         | /:id        | Plan detail    |
| POST        | /:id/edit   | Edit plan      |
| POST        | /:id/delete | Delete plan    |

<p align="right">(<a href="#top">back to top</a>)</p>


## Models List

User Model:

| Model       | Property and Data type                  |
| ----------- | --------------------------------------- |
| Username    | Type: String / Required                 |
| Description | Type: String / Required / Minlength: 10 |
| Email       | Type: String / Required                 |
| Password    | Type: String / Required                 |
| Avatar      | Type: String / Required                 |
| Birthday    | Type: Date                              |
| Friends     | Type: ObjectId                          |
| Plans       | Type: ObjectId                          |

Plans Model:

| Model       | Property and Data type                  |
| ----------- | --------------------------------------- |
| Name        | Type: String / Required                 |
| Description | Type: String / Required / Minlength: 10 |
| Image       | Type: String / Required                 |
| Owner       | Type: ObjectId                          |

Ads Model:

| Model       | Property and Data type                  |
| ----------- | --------------------------------------- |
| Name        | Type: String / Required                 |
| Description | Type: String / Required / Minlength: 10 |
| Image       | Type: String / Required                 |
| Owner       | Type: ObjectId                          |

<p align="right">(<a href="#top">back to top</a>)</p>


## Pages and Components List

| Pages        | Components                                    |
| ------------ | --------------------------------------------- |
| Home         | Login / Signup / Brand                        |
| Plans        | Navbar / Nav / Card / Modal / Footer / Button |
| Plan Details | Navbar / Nav / Card / Modal / Footer / Button |
| Edit Plan    | Navbar / Nav / Card / Modal / Footer / Button |
| Profile      | Navbar / Nav / Card / Modal / Footer / Button |
| Settings     | Navbar / Nav / Card / Modal / Footer / Button |
| Login        | Navbar / Nav / Card / Modal / Footer / Button |
| Signup       | Navbar / Nav / Card / Modal / Footer / Button |
| Users        | Navbar / Nav / Card / Modal / Footer / Button |
| User Details | Navbar / Nav / Card / Modal / Footer / Button |
| Ads Details  | Navbar / Nav / Card / Modal / Footer / Button |
| Not Found    | Navbar / Nav / Card / Modal / Footer / Button |

<p align="right">(<a href="#top">back to top</a>)</p>


## App URL

[Weekifly](https://weekifly.netlify.app)

<p align="right">(<a href="#top">back to top</a>)</p>


## Context List

- Auth
- Message
- Theme

<p align="right">(<a href="#top">back to top</a>)</p>


## Requeriments

* npm start   | Client
* npm run dev | Server

<p align="right">(<a href="#top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


## Contact

Guillermo Pérez - [LinkedIn](https://linkedin.com/in/guillermo-perez-fuentes)

<p align="right">(<a href="#top">back to top</a>)</p>