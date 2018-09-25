# Auth0 + Go Web App Sample

This sample demonstrates how to add authentication to a Go web app using Auth0.

Check the [Go Quickstart](https://auth0.com/docs/quickstart/webapp/golang) to better understand this sample.

## Running the App

To run the app, make sure you have **go** and **go get** installed.

Rename the `.env.example` file to `.env` and provide your Auth0 credentials.

```bash
# .env

AUTH0_CLIENT_ID=z9fFqhaOJwWPIUanXHhtSM0c6qyZBX5t
AUTH0_DOMAIN=ujwalnarayann.auth0.com
AUTH0_CLIENT_SECRET=mwrS9qoepEpUj4yXHPnkHzaxGsYbMEtyLc26hQ1gwO582MrOC9C1P5GoyKBxAreU
AUTH0_CALLBACK_URL=http://localhost:3000/callback
AUTH0_AUDIENCE=
```

__Note:__ If you are not implementing any API, leave the `AUTH0_AUDIENCE` variable empty, will be set with `https://AUTH0_DOMAIN/userinfo`.

Once you've set your Auth0 credentials in the `.env` file, run `go get -d` to install the Go dependencies.

Run `go run main.go server.go` to start the app and navigate to [http://localhost:3000/](http://localhost:3000/).

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.