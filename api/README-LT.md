# Praktinių įgūdžių vertinimo API

### Sukurtas naudojantis

- Node.js
- Express
- MongoDb
- Mongoose

## Pradžia
### Rekalavimai prieš pradedant
- npm
```sh
  npm install npm@latest
```
- mongoDb duomenų bazė

### Įdiegimas ir paleidimas
1. Nukopijuokite repozitorija
```sh
git clone https://github.com/Shefleris/kitm-praktinis.git
```
2. Įdiekite npm paketus
```sh
npm install
```
3. Sukurkite failą 'config.env' pagal pateiktą pavyzdį.
4. Užpildykite trūkstamus laukus 'config.env' faile
```sh
DATABASE_NAME=(Your mongodb database name)
DATABASE_USER=(Your mongodb user name)
DATABASE_PASSWORD=(Your mongodb user password)
```
5. Terminale įveskite npm start
```sh
npm start
```