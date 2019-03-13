# Github airdrop

## Github integration

Url to auth via github is:

Staging:
```
https://github.com/login/oauth/authorize/?client_id=ec17c7e5b1f383034c25&state=5idkWlsZKzbpcD7u&redirect_uri=https://staging-backend.u.community/api/v1/github/auth_callback?redirect_uri=https://staging.u.community/users
```

Production:
```
https://github.com/login/oauth/authorize/?client_id=c4087a514a96fbc4ab9e&state=5idkWlsZKzbpcD7u&redirect_uri=https://backend.u.community/api/v1/github/auth_callback?redirect_uri=https://u.community/users
```

Uri contains two `redirect_uri` sections. Client should change last `redirect_uri` in order determine where
end user will be redirected after github auth. `utm` params should be included in order to track source (ex. facebook)


## Airdrop state for not registered user

During redirect a cookie is set. Cookie name is `token.users_external.1`. Cookie contains token which represents
github auth record in backend database. This cookie is auth cookie required to fetch github airdrop state:

```
GET https://{hostname}/api/v1/airdrops/1/user
```

Response contains user airdrop state. 