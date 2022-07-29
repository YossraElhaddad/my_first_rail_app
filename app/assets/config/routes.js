//= link_tree ../images
//= link_directory ../stylesheets .css
//= link_tree ../../javascript .js
//= link_tree ../../../vendor/javascript .js

Rails.application.routes.draw do
        root 'cars#index'
resources: cars
end