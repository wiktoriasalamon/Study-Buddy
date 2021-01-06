# Study Buddy

### Wymagania

1. Aktualny Node.js (`node -v`)
2. Zainstalowany Docker + docker-compose (Instrukcja: https://docs.docker.com/compose/install/)

### Uruchomienie

I. Będąc w folderze `/studdybuddy-api`:

1. `npm install`
2. `docker-compose up -d`
3. `npm run start`

II. Będąc w folderze `/suddybuddy-front`:

1. `npm install`
2. `npm run start`

lub w katalogu głównym korzystając z obrazów dockerowych:
```sh
docker-compose up -d --build
```

Uwaga! Najpierw należy zbudować obrazy.
### Budowanie obrazów dockerowych
W katalogu głównym projektu:
```sh
docker build --file=studybuddy-api/api.dockerfile --rm=true -t studybuddy-api .
docker build --file=studybuddy-front/front.dockerfile --rm=true -t studybuddy-front .
```