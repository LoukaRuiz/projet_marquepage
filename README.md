# MarquePage

Le but de marquepage est de fournir une interface permettant à un utilisateur de rapeller à qu'elle épisode ou qu'elle tome d'une série il en ai.

Admettons que je suis en librairie et que je vois les tomes de one piece ou de Spiderman. Grâce à l'application un simple coup d'oeil permettra de savoir à qu'elles sont les tommes qui nous manque.

technologiee utilisés:
-docker permet de lancer des aopplications dans des conteneurs 
-react native est un framework , utilisé pour développer des applications pour android, ios  
-expo: permettant de développer des application react Native  


dockerfile et dockercompose permettent de lancer une l'application facilement en créant une image pour pouvoir lancer l'application. 

## Application

Le dossier src contient tous le code de l'application . 
Ce dossier est diviser entre plussiseurs sous dossier: 
-function qui contient la connexion et les requêtes vers les différents API 
-le dossier composant nous permet d'oragniser les différentes données , et d'indiquer les données à prendre
-le dossier screen contient les différents code de chaque écrans
-le dossier naviguation contient les différent code permettant de circuler dans les différents écrans


On c'est servir de plussieurs Api différentes pour faire l'application , pour avoir accès à différente données de plussieurs médias 

L'application pour démarer on doit lancer npm start
L'application peut ce lancer avec expo start.


