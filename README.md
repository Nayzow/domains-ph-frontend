# DNS-Services.sh Frontend

Frontend de l'API DNS-Services-API disponible sur mon github : https://github.com/Nayzow/DNS-Services-API
Veillez à bien avoir installé l'API en suivant les procédures d'installation.
L'application web est réalisée avec Angular et le langage TypeScript. Elle comporte plusieurs pages affichant des listes de noms de domaines frauduleux et permet également de les cartographier.

## Screenshots

![img.png](src%2Fassets%2Fimages%2Fscreenshots%2Fimg.png)
![img_1.png](src%2Fassets%2Fimages%2Fscreenshots%2Fimg_1.png)
![img_2.png](src%2Fassets%2Fimages%2Fscreenshots%2Fimg_2.png)
![img_3.png](src%2Fassets%2Fimages%2Fscreenshots%2Fimg_3.png)

## Installation classique

Assurez-vous d'avoir Node.js et npm installés sur votre ordinateur. Vous pouvez vérifier leur installation en ouvrant une invite de commande et en tapant node -v et npm -v.

1. Clonez le dépôt du projet en utilisant la commande

```bash
git clone https://github.com/Nayzow/DNS-Services-API
```

2. À la racine du projet, installez les dépendances en utilisant la commande

```bash
npm install
```

3. Démarrez l'application en utilisant la commande

```bash
npm start
```

L'application devrait maintenant être accessible à l'adresse http://localhost:4200/

## Installation avec Docker

Assurez-vous d'avoir Docker installé sur votre ordinateur.

1. Clonez le dépôt du projet en utilisant la commande

```bash
git clone https://github.com/Nayzow/DNS-Services-API
```

2. À la racine du projet, Construisez l'image Docker à partir du fichier Dockerfile en utilisant la commande

```bash
docker build -t dns-services-frontend .
```

3. Exécutez le conteneur en utilisant la commande

```bash
docker run --name dns-services-frontend -p 80:80 -d dns-services-frontend
```

L'application devrait maintenant être accessible à l'adresse http://localhost:80/ à l'aide d'un serveur nginx.

## Routes de l'application

Les routes de l'application sont définies dans le fichier app-routing.module.ts. Les routes disponibles sont :

```
/ : renvoie au menu principal (home).
```

```
/domains : voir la liste des domaines potentiellement frauduleux à partir d'un nom de domaine.
```

```
/domains/:domain : voir les données à un nom de domaine.
```
