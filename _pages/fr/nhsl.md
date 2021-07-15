---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-05-07
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Zones de peuplement et dangers naturels au Canada
lang: fr
altLangPage: ../en/nhsl
nositesearch: true
nomenu: true
nofooter: true
breadcrumbs:
  - title: "OpenDRR"
    link: "https://www.github.com/OpenDRR/"
  - title: "Téléchargements de OpenDRR"
    link: "/fr"
  - title: "Zones de peuplement et dangers naturels au Canada"
---
<p><strong>La couche des zones de peuplement au niveau national (couche ZPN) est une collection d’ensembles de données thématiques qui décrivent les caractéristiques physiques, sociales et économiques des centres urbains et des collectivités rurales et éloignées du Canada, ainsi que leur vulnérabilité aux dangers naturels préoccupants. Des renseignements détaillés sur l’utilisation des terres, les bâtiments, les gens et les immobilisations sont fournis au niveau administratif des aires de diffusion du recensement pour plus de 454 000 régions habitées à travers le Canada.</strong></p>
<div class="row">
  <div class="col-md-8">
    <p>La <a href='#physical_exposure'>couche de l’exposition physique</a> inclut une délinéation des zones de peuplement humain et les catégories d’utilisation fonctionnelle des terres qui y sont associées au Canada, et fournit des renseignements détaillés sur le type de construction, l’occupation et le niveau de conception de plus de 9,1 millions de bâtiments; la dynamique de la population à diverses heures de la journée pour 35,1 millions de personnes; et une évaluation des immobilisations des bâtiments et de leur contenu totalisant plus de 8 300 milliards de dollars canadiens.</p>
    <p>La <a href='#hazard_threat'>couche des menaces liées à des dangers naturels</a> utilise l’information disponible au niveau national sur les tremblements de terre, les inondations, les coulées des débris, les feux de forêt, et les dangers liés aux vents violents pour évaluer dans quelle mesure les gens et les biens essentiels se trouvent en danger, ainsi que le potentiel de perturbations socioéconomiques dans les zones où l’intensité des dangers dépasse les seuils minimaux de dommages.</p>
    <p>La <a href='#social_fabric'>couche du tissu social</a> utilise des données démographiques du recensement pour évaluer les profils spatiaux généraux de la vulnérabilité et les capacités au niveau des quartiers de résister à des événements catastrophiques, et à s’en rétablir, en se fondant sur les caractéristiques intrinsèques des logements, des structures familiales, de l’autonomie individuelle et des systèmes financiers.</p>
    <!-- <p>La <a href='#risk_dynamics'>couche de la dynamique des risques</a> utilise l’information disponible sur la croissance de la population et les changements à l’utilisation des terres depuis 1975 pour évaluer comment l’évolution des tendances de l’urbanisation contribuent à aggraver les profils de risques naturels au fil du temps au Canada.</p> -->
    <p>Bien qu’elle ait été mise au point pour appuyer l’évaluation quantitative des risques et la mise en œuvre du <a href="https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030">Cadre de Sendai pour la réduction des risques de catastrophe</a> aux échelles locales et régionales au Canada, la couche ZPN convient également à d’autres applications intégrées de modélisation du paysage, y compris l’adaptation aux changements climatiques et la planification de l’utilisation durable des terres.</p>
    <section class="jumbotron">
      <p>Tous les produits sont publiés sous la licence du gouvernement ouvert – Canada.</p>
      <p><a href="https://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada" class="btn btn-info btn-lg" role="button">Voir</a></p>
    </section>
  </div>
  <div class="col-md-4">
  <div class="panel panel-primary mrgn-tp-sm">
      <div class="panel-heading">
        <div class="panel-title">Ensembles de données</div>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <a href='#physical_exposure'>Couche de l’exposition physique</a>
        </li>
        <li class="list-group-item">
          <a href='#hazard_threat'>Couche des menaces liées à des dangers naturels</a>
        </li>
        <li class="list-group-item">
          <a href='#social_fabric'>Couche du tissu social</a>
        </li>
        <!-- <li class="list-group-item">
          <a href='#risk_dynamics'>Couche de la dynamique des risques</a>
        </li> -->
      </ul>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <div class="panel-title">Personne-ressource responsable de la distribution</div>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <b>Nom de l'organisation:</b><br>
          Gouvernement du Canada;Ressources naturelles Canada;Secteur des terres et des minéraux, Commission géologique du Canada
        </li>   
        <li class="list-group-item">
          <b>Courriel:</b><br>
          <a href="mailto:GSC.info.CGC@NRCan.gc.ca">GSC.info.CGC@NRCan.gc.ca</a>
        </li>
      </ul>
    </div>
    <a href="nhsl_map.html" class="btn btn-primary mrgn-tp-xl btn-block btn-lg" role="button">Voir sur la carte</a>
  </div>
</div>

<hr>

<a name="physical_exposure"></a>

## Exposition physique

<p><strong>L’élément « exposition physique » de la couche des zones de peuplement au niveau national (couche ZPN) comprend une délinéation des aires bâties et des catégories d’utilisation fonctionnelle des terres pour les aires de diffusion du recensement dans les centres urbains et les collectivités rurales et éloignées du Canada.</strong></p>

<p>Il fournit des renseignements détaillés sur le type de construction, l’occupation et le niveau de conception de plus de 9,1 millions de bâtiments; la dynamique de la population à diverses heures de la journée pour 35,1 millions de personnes; et une évaluation des immobilisations des bâtiments et de leur contenu totalisant plus de 8300 milliards de dollars canadiens.</p>

<p>Le portefeuille des bâtiments est divisé en catégories selon une combinaison de 36 taxonomies de construction qui comprennent différents types de structures en bois, béton, maçonnerie ou acier et structures préfabriquées, et de 33 catégories d’occupation qui comprennent un mélange d’utilisations fonctionnelles résidentielles, civiques, commerciales et industrielles. Des modèles de cartographie propres au contexte pour chaque combinaison d’utilisation des terres, de type de construction et de catégorie d’occupation sont utilisés pour attribuer une distribution de catégories de bâtiments qui représente la forme structurelle et la fonction globales d’un quartier donné.</p>

<p>Le nombre d’occupants des bâtiments à différents moments de la journée est estimé pour les heures de travail normales lorsque les gens sont dans les bureaux, les écoles ou d’autres installations de groupes (9 h à 17 h); pour les heures du matin et du soir lorsqu’ils se déplacent entre domicile et travail (7 h à 9 h et 17 h à 19 h); et pour les heures en soirée lorsque la majorité des gens sont chez eux (19 h à 7 h).</p>

<p>L’évaluation des immobilisations est basée sur les coûts de remplacement pour l’industrie des archétypes de bâtiments des régions représentatives du Canada.</p>

<p>L’inventaire des bâtiments cadre avec les normes internationales pour les évaluations des risques pour des dangers multiples et peut être utilisé dans d’autres applications d’évaluation de l’utilisation des terres qui pourraient nécessiter de l’information propre à la forme ou à la fonction de l’environnement bâti.</p>

### Ressources de données

<div id="nhsl_physical_exposure_all_indicators"></div>

<hr>

<a name="hazard_threat"></a>

## Dangers naturels

<p><strong>L’élément « menaces liées aux dangers naturels » de la couche des zones de peuplement au niveau national (couche ZPN) étend la capacité du modèle d’exposition physique à approfondir la question de savoir qui et quoi pourrait être affecté par des dangers naturels préoccupants au Canada.</strong></p>

<p>Il utilise l’information disponible au niveau national sur les tremblements de terre, les inondations, les coulées de débris, les feux de forêt et les dangers liés aux vents violents pour évaluer dans quelle mesure les gens et les biens essentiels se trouvent en danger (exposition aux dangers) et pour évaluer le potentiel de perturbations socioéconomiques dans les zones où l’intensité des dangers est susceptible d’excéder les seuils minimaux de dommages potentiels (sensibilité aux dangers).</p>

<p>Les menaces liées aux aléas sismiques sont évaluées au moyen des niveaux d’intensité des secousses telluriques survenant une fois tous les 2 500 ans mis au point par la Commission géologique du Canada pour évaluer les seuils minimaux des dommages aux bâtiments.</p>

<p>Les menaces liées aux risques de feux de forêt sont évaluées au moyen des niveaux moyens d’intensité du front (IF) mis au point par le Service canadien des forêts pour évaluer les biens communautaires en danger.</p>

<p>Les menaces liées aux coulées de débris sont basées sur un modèle de vulnérabilité aux glissements de terrain à variables multiples mis au point par la NASA dans le cadre d’un système mondial d’alerte rapide pour les événements déclenchés par les conditions météorologiques.</p>

<p>Les menaces liées aux tsunamis, aux débordements de cours d’eau et aux vents violents sont basées sur les modèles de cyclone et inondations survenant 1 fois tous les 500 ans dans le cadre du Bilan mondial 2011 sur la réduction des risques de catastrophe des Nations Unies pour orienter les efforts de gestion des catastrophes à l’échelle régionale et nationale.</p>

<p>La sensibilité à chacun des dangers est estimée en fonction du nombre de gens et de biens essentiels exposés au niveau des aires de diffusion du recensement. Les résultats sont regroupés dans un index des menaces liées à des dangers multiples pour aider à cerner les points chauds préoccupants dans l’ensemble du Canada.</p>

### Ressources de données

<mark>Bientôt disponible</mark>

<div id="nhsl_hazard_threat_all_indicators" class="hidden"></div>

<hr>

<a name="social_fabric"></a>

## Tissu social et seuils de capacité

<p><strong>L’élément « tissu social » de la couche des zones de peuplement au niveau national (couche ZPN) utilise les données démographiques de recensement disponibles pour évaluer les profils spatiaux généraux de la sensibilité ainsi que la capacité des quartiers à résister aux événements catastrophiques, et à s’en rétablir, en fonction des caractéristiques du logement, de la structure familiale, de l’autonomie individuelle et des systèmes financiers.</strong></p>

<p>Des indicateurs de la vulnérabilité et du seuil de capacité aident à cerner les tendances sous-jacentes de l’inégalité sociale qui pourrait exister au sein d’une collectivité ou d’une région donnée, et de trouver qui est le plus susceptible d’avoir à assumer le plus grand fardeau de risque après un événement catastrophique. Les niveaux de vulnérabilité de chaque élément de l’indice de vulnérabilité sociale sont évalués au moyen de méthodes analytiques adaptées du « modèle des dangers des lieux » de Cutter pour filtrer et classer des variables démographiques en fonction de leur capacité à expliquer les profils spatiaux pour un large éventail d’archétypes communautaires, y compris les centres urbains à forte densité, les régions suburbaines et rurbaines avoisinantes, et les peuplements ruraux et éloignés plus distants.</p>

<p>Des indicateurs composites décrivant les caractéristiques des conditions de logement, de la structure familiale, de l’autonomie individuelle et des systèmes financiers permettent de comparer les niveaux relatifs de vulnérabilité d’une région à l’autre dans l’ensemble du Canada et d’identifier les quartiers dans lesquels la capacité de résister à des événements catastrophiques, et de s’en rétablir, peut être restreinte. Les indicateurs sont déclarés au niveau des aires de diffusion du recensement et peuvent être utilisés en conjonction avec des renseignements sur des menaces précises liées aux dangers pour identifier les points chauds préoccupants potentiels au sein d’une collectivité ou d’une région, et les zones dans lesquelles des investissements proactifs dans la planification et le développement des capacités pourraient efficacement contribuer à générer une résilience aux catastrophes et une durabilité à plus long terme.</p>

### Ressources de données

<div id="nhsl_social_fabric_all_indicators"></div>

<hr>

<div style="display:none;">
<a name="risk_dynamics"></a>

## Dynamique du risque

<p><strong>L’élément « dynamique du risque » de la couche des zones de peuplement au niveau national (couche ZPN) s’appuie sur une analyse de données de télédétection et une modélisation spatiale entreprises par le Centre commun de recherche de la Commission européenne dans le cadre d’une étude mondiale des tendances en évolution du peuplement humain et de leur influence sur les risques liés aux catastrophes et le développement durable (couche du peuplement humain mondial).</strong></p>

<p>Des grilles de population à haute résolution (250 m) et des modèles de classification des utilisations des terres à des intervalles de dix ans (1975, 1990, 2000 et 2015) fournissent un cadre pour évaluer la mesure dans laquelle les peuplements humains changent au chapitre de la densité et des profils spatiaux d’urbanisation. Ces ensembles de données du cadre sont combinées aux évaluations nationales disponibles des dangers liées aux tremblements de terre, tsunami, inondations, coulées de débris, feux de forêt et cyclones pour décerner comment la croissance de la population et les tendances en évolutions des changements aux utilisations des terres au cours des 40 dernières années contribuent aux profils toujours croissants des risques liés aux dangers naturels au Canada.</p>

<p>Les indicateurs de l’exposition physique et de la sensibilité aux dangers sont déclarés au moyen du maillage de population de 250 m de la couche du peuplement humain mondial pour chaque époque temporelle. Les résultats de cette étude complètent une évaluation mondiale de l’exposition aux dangers naturels effectuée par le Centre commun de recherche dans le cadre de l’Atlas de la planète humaine de 2017 et fournissent des perspectives supplémentaires pour guider les efforts de planification locaux et régionaux sur le plan de la résilience aux catastrophes dans l’ensemble du Canada.</p>

### Ressources de données

<div id="nhsl_risk_dynamics_all_indicators"></div>

</div>

<script src="https://code.jquery.com/jquery-1.12.2.min.js"
        integrity="sha256-lZFHibXzMHo3GGeehn1hudTAP3Sc0uKXBXAzHX1sjtk=" crossorigin="anonymous"></script>
<script>
$( document ).ready(function() {
  var config = JSON.stringify({{site.data.metadata | jsonify }}),
      metadata = JSON.parse( config ),
      layers = [ 'nhsl_risk_dynamics_all_indicators', 'nhsl_social_fabric_all_indicators', 'nhsl_physical_exposure_all_indicators', 'nhsl_hazard_threat_all_indicators'],
      header = '<tr> \
          <th scope="col" class="col-sm-6">{% if page.lang == 'en' %}Resource Name{% endif %} {% if page.lang == 'fr' %}Nom de la ressource{% endif %}</th> \
          <th scope="col" class="col-sm-2 hidden-xs">{% if page.lang == 'en' %}Resource Type{% endif %} {% if page.lang == 'fr' %}Type de ressource{% endif %}</th> \
          <th scope="col"class="col-sm-2">Format</th> \
          <th scope="col" class="col-sm-1">{% if page.lang == 'en' %}Links{% endif %} {% if page.lang == 'fr' %}Liens{% endif %}</th> \
      </tr>';

    for ( l in layers ) {

      let id = layers[l];

      for ( d in metadata.datasets ) {

          let dataset = metadata.datasets[ d ];

          if ( id.includes( dataset.id ) ) {

            map_resources = dataset.resources;

            let resrcs = "",
                resrcs_prov = "";

            for ( res in map_resources ) {

                let r = map_resources[res];

                if ( r.language.indexOf( "fr" ) === -1 ) {
                  continue;
                }

                let lang = r.language == "en" ? "English" : "French";
                let btntxt = "{{lang}}" == "en" ? "Access" : "Accès";
		let download_link = r.link.indexOf( "http" ) === -1 ? '{{site.github.releases_url}}/download/{{site.github.releases[0].tag_name}}/' + r.link : r.link;

                if ( r.region === 'ca' ) {
                    resrcs += '<tr><td>' + r.name + '</td><td class="hidden-xs">' + r.type + '</td><td><span class="label ' + r.format + '">' + r.format + '</td><td><a href="' + download_link + '" class="btn btn-primary">' + btntxt + '</a></td></tr>';
                }
                else {
                    resrcs_prov += '<tr class="' + r.region + '"><td>' + r.name + '</td><td class="hidden-xs">' + r.type + '</td><td><span class="label ' + r.format + '">' + r.format + '</td><td><a href="' + download_link + '" class="btn btn-primary">' + btntxt + '</a></td></tr>';
                }
            }

            let i = id;

            let select = '<div class="row"><div class="col-md-12 mrgn-bttm-lg"><form class="form-inline" role="form" method="get" action="#"><div class="form-group"><label for="select-rgn-' + id + '" class="control-label mrgn-rght-lg">{% if page.lang == 'en' %}Select region: {% endif %} {% if page.lang == 'fr' %}Sélectionner la région{% endif %}</label><select id="select-rgn-' + id + '" class="select-rgn form-control"> \
                <option></option> \
                <option value="ab">{% if page.lang == 'en' %}Alberta{% endif %} {% if page.lang == 'fr' %}Alberta{% endif %}</option> \
                <option value="bc">{% if page.lang == 'en' %}British Columbia{% endif %} {% if page.lang == 'fr' %}Colombie Britannique{% endif %}</option> \
                <option value="nl">{% if page.lang == 'en' %}Newfoundland and Labrador{% endif %} {% if page.lang == 'fr' %}Terre Neuve et Labrador{% endif %}</option> \
                <option value="pe">{% if page.lang == 'en' %}Prince Edward Island{% endif %} {% if page.lang == 'fr' %}Île du Prince Édouard{% endif %}</option> \
                <option value="ns">{% if page.lang == 'en' %}Nova Scotia{% endif %} {% if page.lang == 'fr' %}Nouvelle-Écosse{% endif %}</option> \
                <option value="nb">{% if page.lang == 'en' %}New Brunswick{% endif %} {% if page.lang == 'fr' %}Nouveau Brunswick{% endif %}</option> \
                <option value="qc">{% if page.lang == 'en' %}Quebec{% endif %} {% if page.lang == 'fr' %}Quebec{% endif %}</option> \
                <option value="on">{% if page.lang == 'en' %}Ontario{% endif %} {% if page.lang == 'fr' %}Ontario{% endif %}</option> \
                <option value="mb">{% if page.lang == 'en' %}Manitoba{% endif %} {% if page.lang == 'fr' %}Manitoba{% endif %}</option> \
                <option value="sk">{% if page.lang == 'en' %}Saskatchewan{% endif %} {% if page.lang == 'fr' %}Saskatchewan{% endif %}</option> \
                <option value="yt">{% if page.lang == 'en' %}Yukon{% endif %} {% if page.lang == 'fr' %}Yukon{% endif %}</option> \
                <option value="nt">{% if page.lang == 'en' %}Northwest Territories{% endif %} {% if page.lang == 'fr' %}Territoires du Nord-Ouest{% endif %}</option> \
                <option value="nu">{% if page.lang == 'en' %}Nunavut{% endif %} {% if page.lang == 'fr' %}Nunavut{% endif %}</option> \
              </select></div></form></div></div>'

            $( "#" + i ).append('<h4>{% if page.lang == 'en' %}National Scale{% endif %} {% if page.lang == 'fr' %}Échelle nationale{% endif %}</h4><table class="table table-striped table-responsive"><tbody>' + header + resrcs + '</tbody></table>' );

            $( "#" + i ).append(
              '<h4>{% if page.lang == 'en' %}Regional Scale{% endif %} {% if page.lang == 'fr' %}Échelle régionale{% endif %}</h4>' + select + '<div class="row"><div class="col-md-12"><table class="rgn table table-striped table-responsive"><tbody>' + header + resrcs_prov + '</tbody></table></div></div>' );

            $( ".ab, .bc, .mb, .ns, .nl, .qc, .on, .nu, .yt, .nt, .sk, .pe, .nb, .rgn" ).hide();

            $( '#select-rgn-' + id ).on( 'change', function() {
              $( ".ab, .bc, .mb, .ns, .nl, .qc, .on, .nu, .yt, .nt, .sk, .pe, .nb, .rgn" ).hide();

              $("select").val( $( this ).val() );

              if ( $( this ).val() ) {
                let p = '.' + $( this ).val() + ', .rgn';
                $( p ).fadeIn();
              }
            });

            break;
        }
      }
    }

});
</script>

<style>

.GPKG {
  color: #083c6c;
  background-color: #e8f2f4;
}

.ESRI.REST {
  color: #278400;
  background-color: #d8eeca;
}

.EXCEL {
  color: #f90;
  background-color: #f9f4d4;
}

</style>
