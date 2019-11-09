# Setting up MySQL DB

Login

```shell
mysql -u root -p
```

```sql

create database sampledb1;

create user sampleuser1 identified by 'samplepass1';

grant all privileges on sampledb1.* to sampleuser1;

flush privileges;

exit;
```

Login with this user

```shell
mysql -u sampleuser1 -p
```
