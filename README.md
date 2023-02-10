# DNS-Services.sh Frontend

Frontend de l'API DNS-Services-API disponible sur mon github : https://github.com/Nayzow/DNS-Services-API
L'application web est réalisée avec Angular et le langage TypeScript. Elle comporte plusieurs pages affichant des listes de noms de domaines frauduleux et permet également de les cartographier.

## Screenshots


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
docker build -t domain-services-frontend .
```

3. Exécutez le conteneur en utilisant la commande

```bash
docker run --name domain-services-frontend -p 80:80 -d domain-services-frontend
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

```
/map : voir la cartographie des domaines potentiellement frauduleux à partir d'un nom de domaine.
```
