---
altLangPrefix: index
authorName: Natural Resources Canada
authorUrl:
contentTitle:
  en: OpenDRR Downloads
  fr: Téléchargements de OpenDRR
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

Bienvenue sur le site de téléchargement des données OpenDRR. Vous trouverez ici les dernières versions de tous les ensembles de données.

Ces ensembles de données peuvent être téléchargés par province/territoire et par région économique.

Actuellement, seul le format GeoPackage (.gpkg) est fourni.

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
            <th scope="col" class="col-sm-8"></th>
            <th scope="col" class="col-sm-2">Date modifiée</th>
            <th scope="col" class="col-sm-1">Format</th>
            <th scope="col" class="col-sm-1"></th>
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

                {% assign my_array = folder.path | split: "/" %}

                {% unless my_array[4] == 'er' %}

                  <tr>
                      <td>
                          <!-- <img width="36" src="{{ site.baseurl }}/assets/img/{{ icon }}" style="margin-right:10px;"/> -->
                          <!-- <a href="{{ folder.path }}" style="text-transform:capitalize">{{ my_array[4] | replace: "_", " " }}</a> <span>({{ geom }})</span> -->
                          <span style="text-transform:capitalize">{{ my_array[4] | replace: "_", " " }}</span> <span>{{ geom }}</span>
                      </td>
                      <td>{{folder.modified_time | date: "%a, %b %d, %y" }}</td>
                      <td><span class="label label-default">{{ folder.extname }}</span></td>
                      <td>
                          <!-- <a class="btn btn-primary btn-sm map-link pull-right" href="#" data="{{ folder.path }}">Preview</a> -->
                          <a class="btn btn-primary btn-sm pull-right" href="{{ folder.path }}">Téléchargement</a>
                      </td>
                  </tr>

              {% endunless %}

            {% endif %}
        {% endfor %}
        </table>

        <h4>Régions économiques</h4>
        <table class="table table-hover">

        {% assign eruid = "" %}
        {% for path in paths %}

            {% if path contains prov %}
                {% assign pth = path | split: "/" %}

                {% if eruid != pth[2] and pth[0] == prov %}
                    {% assign eruid = pth[2] %}

                    {% for er in site.data.er.regions %}
                        {% if er.code == eruid %}
                            <tr><th scope="col" class="col-sm-8">{{ er.title }} ({{ eruid }})</th><th scope="col" class="col-sm-2">Date modifiée</th><th scope="col" class="col-sm-1">Format</th><th scope="col" class="col-sm-1"></th></tr>
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

                        {% assign my_array = folder.path | split: "/" %}
                        
                        <tr>
                            <td>
                                <!-- <img width="36" src="{{ site.baseurl }}/assets/img/{{ icon }}" style="margin-right:10px;"/> -->
                                <!-- <a href="{{ folder.path }}" style="text-transform:capitalize">{{ my_array[6] | replace: "_", " " }}</a> <span>({{ geom }})</span> -->
                                <span style="text-transform:capitalize">{{ my_array[6] | replace: "_", " " }}</span> <span>{{ geom }}</span>
                            </td>
                            <td>{{folder.modified_time | date: "%a, %b %d, %y" }}</td>
                            <td><span class="label label-default">{{ folder.extname }}</span></td>
                            <td>
                                <!-- <a class="btn btn-primary btn-sm map-link pull-right" href="#" data="{{ folder.path }}">Preview</a> -->
                                <a class="btn btn-primary btn-sm pull-right" href="{{ folder.path }}">Téléchargement</a>
                            </td>
                        </tr>
                    {% endif %}
                {% endfor %}
            {% endif %}
        {% endfor %}
        </table>
    </div>
    
    {% endfor %}

</section>
