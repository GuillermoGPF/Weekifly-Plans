<div id="top"></div>

# Weekifly

## Logo
<!-- <br />
<div align="center">
    <img src="" alt="Logo">
</div> -->


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

Plans Model:

| Model       | Property and Data type                  |
| ----------- | --------------------------------------- |
| Name        | Type: String / Required                 |
| Description | Type: String / Required / Minlength: 10 |
| Image       | Type: String / Required                 |

<p align="right">(<a href="#top">back to top</a>)</p>


## Pages and Components List

| Pages    | Components                                    |
| -------- | --------------------------------------------- |
| Home     | Login / Signup / Brand                        |
| Plans    | Navbar / Nav / Card / Modal / Footer / Button |
| Profile  | Navbar / Nav / Card / Modal / Footer / Button |
| Settings | Navbar / Nav / Card / Modal / Footer / Button |
| Users    | Navbar / Nav / Card / Modal / Footer / Button |

<p align="right">(<a href="#top">back to top</a>)</p>


## Context List

- Auth

<p align="right">(<a href="#top">back to top</a>)</p>


## Requeriments

* npm start

<p align="right">(<a href="#top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


## Contact

Guillermo Pérez - [LinkedIn](https://linkedin.com/in/guillermo-perez-fuentes)

<p align="right">(<a href="#top">back to top</a>)</p>