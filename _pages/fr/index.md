---
altLangPrefix: index
authorName: Natural Resources Canada
authorUrl:
contentTitle:
  en: OpenDRR Downloads
  fr: Accèss de OpenDRR
dateModified: 2020-11-01
description:
  en: Available datasets
  fr: Ensembles de données disponibles
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: OpenDRR
lang: fr
layout: single-page
sitesearch: false
---
# {{ page.contentTitle.fr }}

Bienvenue sur le site de Accès des données OpenDRR. Vous trouverez ici les dernières versions de tous les ensembles de données.

Ces ensembles de données peuvent être téléchargés par province/territoire et par région économique.

Actuellement, seul le format GeoPackage (.gpkg) est fourni.
### Licence

Tous les produits sont publiés sous la licence du gouvernement ouvert – Canada.

<a href="https://open.canada.ca/fr/open-government-licence-canada" class="btn btn-primary">Voir</a>
## Parcourir par province

<section>

    {% for folder in site.static_files %}
    {% if folder.path contains '/data/' %}
        {% assign my_array = folder.path | split: "/" %}
        {% assign province = my_array[3] %}
        {% assign provinces = provinces | append: province | append: "," %}
        {% assign path = my_array[3] | append: "/" | append: my_array[4] | append: "/" | append: my_array[5] %}
        {% assign paths = paths | append: path | append: "," %}
        {% assign eruid = my_array[4] %}
        {% assign eruids = eruids | append: eruid | append: "," %}
    {% endif %}
    {% endfor %}
    
    {% assign provs = provinces | split: "," | uniq %}
    {% assign paths = paths | split: "," | uniq %}
    {% assign eruids = eruids | split: "," | uniq %}

    <div class="row">
    {% for prov in provs %}
    <div class="col-md-3"><a href="#{{ prov }}" class="prov_name {{ prov }} fr"><span>{{ prov }}</span></a></div>
    {% endfor %}
    </div>
    
    {% for prov in provs %}

        {% assign p = prov | append: '/' %}
        
        <div class="{{ prov }}">

        <a name="{{ prov }}"></a>

        <h3 class="prov_name {{ prov }} fr"><span>{{ prov }}</span></h3>

        <table class="table">
          <tr>
            <th scope="col" class="col-sm-6"></th>
            <th scope="col">Date modifiée</th>
            <th scope="col">Format</th>
            <th scope="col"></th>
          </tr>
        
        {% for folder in site.static_files %}

            {% if folder.path contains p %}

                {% assign geom = "" %}
                {% assign icon = "" %}
                
                {% if folder.path contains "_b_" %}
                    {% assign geom = "(Bâtiments)" %}
                    {% assign icon = "multipoint.svg" %}
                {% endif %}
                
                {% if folder.path contains "_s_" %}
                    {% assign geom = "(Subdivision de recensement)" %}
                    {% assign icon = "polygon.svg" %}
                {% endif %}

                {% assign map_url = nil %}
                {% assign map_type = nil %}
                {% assign map_layer = nil %}

                {% for m in site.data.metadata.datasets %}
                    
                    {% if folder.path contains m.id %}
                        {% assign map_url = m.map_url.en %}
                        {% assign map_type = m.map_type %}
                        {% assign map_layer = m.map_layer %}
                    {% endif %}

                {% endfor %}

                {% assign my_array = folder.path | split: "/" %}

                {% unless my_array[4] == 'er' %}

                {% assign map_url = nil %}
                {% assign map_type = nil %}
                {% assign map_layer = nil %}

                {% for m in site.data.metadata.datasets %}
                    
                    {% if folder.path contains m.id %}
                        {% assign map_url = m.map_url.en %}
                        {% assign map_type = m.map_type %}
                        {% assign map_layer = m.map_layer %}
                    {% endif %}

                {% endfor %}

                {% assign prov_code = "" %}
                
                {% for p in site.data.prov.provinces %}
                    
                    {% if prov == p.id %}
                        {% assign prov_code = p.code %}
                    {% endif %}

                {% endfor %}

                  <tr>
                      <td>
                          <!-- <img width="36" src="{{ site.baseurl }}/assets/img/{{ icon }}" style="margin-right:10px;"/> -->
                          <!-- <a href="{{ folder.path }}" style="text-transform:capitalize">{{ my_array[4] | replace: "_", " " }}</a> <span>({{ geom }})</span> -->
                          <span style="text-transform:capitalize">{{ my_array[4] | replace: "_", " " }}</span> <span>{{ geom }}</span>
                      </td>
                      <td>{{folder.modified_time | date: "%a, %b %d, %y" }}</td>
                      <td><span class="label label-default">{{ folder.extname }}</span></td>
                      <td style="text-align: right;">
                          {% if map_url != nil and map_type != nil and map_layer != nil %}
                          <a class="btn btn-primary btn-sm map-link" href="map.html?id={{folder.basename}}&filter=pruid%3D'{{prov_code}}'&prov={{prov}}">Détails</a>
                          {% endif %}
                          <a class="btn btn-primary btn-sm" href="{{ folder.path }}">Accès</a>
                      </td>
                  </tr>

              {% endunless %}

            {% endif %}
        {% endfor %}
        </table>

        <details>
        <summary>
        <h4>Régions économiques</h4>
        </summary>

        <table class="table table-hover">

        {% assign eruid = "" %}
        {% for path in paths %}

            {% if path contains prov %}
                {% assign pth = path | split: "/" %}

                {% if eruid != pth[2] and pth[0] == prov %}
                    {% assign eruid = pth[2] %}

                    {% for er in site.data.er.regions %}
                        {% if er.code == eruid %}
                        <tr>
                            <th scope="col" class="col-sm-6">{{ er.title }} ({{ eruid }})</th>
                            <th scope="col">Date modifiée</th>
                            <th scope="col">Format</th>
                            <th scope="col"></th>
                        </tr>
                        {% endif %}
                    {% endfor %}
                {% endif %}
            
                {% for folder in site.static_files %}

                    {% if folder.path contains path and folder.path contains p and folder.path contains '/er/' %}

                        {% assign geom = "" %}
                        {% assign icon = "" %}
                        
                        {% if folder.path contains "_b_" %}
                            {% assign geom = "(Bâtiments)" %}
                            {% assign icon = "multipoint.svg" %}
                        {% endif %}
                        
                        {% if folder.path contains "_s_" %}
                            {% assign geom = "(Subdivision de recensement)" %}
                            {% assign icon = "polygon.svg" %}
                        {% endif %}

                        {% assign map_url = nil %}
                        {% assign map_type = nil %}
                        {% assign map_layer = nil %}

                        {% for m in site.data.metadata.datasets %}
                            
                            {% if folder.path contains m.id %}
                                {% assign map_url = m.map_url.en %}
                                {% assign map_type = m.map_type %}
                                {% assign map_layer = m.map_layer %}
                            {% endif %}

                        {% endfor %}

                        {% assign my_array = folder.path | split: "/" %}
                        
                        <tr>
                            <td>
                                <!-- <img width="36" src="{{ site.baseurl }}/assets/img/{{ icon }}" style="margin-right:10px;"/> -->
                                <!-- <a href="{{ folder.path }}" style="text-transform:capitalize">{{ my_array[6] | replace: "_", " " }}</a> <span>({{ geom }})</span> -->
                                <span style="text-transform:capitalize">{{ my_array[6] | replace: "_", " " }}</span> <span>{{ geom }}</span>
                            </td>
                            <td>{{folder.modified_time | date: "%a, %b %d, %y" }}</td>
                            <td><span class="label label-default">{{ folder.extname }}</span></td>
                            <td style="text-align: right;">
                                {% if map_url != nil and map_type != nil and map_layer != nil %}
                                <a class="btn btn-primary btn-sm map-link" href="map.html?id={{folder.basename}}&filter=eruid%3D'{{eruid}}'&prov={{prov}}&eruid={{eruid}}">Détails</a>
                                {% endif %}
                                <a class="btn btn-primary btn-sm" href="{{ folder.path }}">Accès</a>
                            </td>
                        </tr>
                    {% endif %}
                {% endfor %}
            {% endif %}
        {% endfor %}
        </table>
        </details>
    </div>
    
    {% endfor %}

</section>
