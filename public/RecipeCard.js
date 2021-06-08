(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['RecipeCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<!--this is the card thing for the recipes in the main page.-->\r\n\r\n			<a href = \"#\"><article class = \"recipe-card\">\r\n        <p class = \"recipe-name\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":42}}}) : helper)))
    + " </p>\r\n        <p class = \"recipe-description\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Description") || (depth0 != null ? lookupProperty(depth0,"Description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":56}}}) : helper)))
    + " </p>\r\n        <p class = \"recipe-author\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Author") || (depth0 != null ? lookupProperty(depth0,"Author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Author","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":46}}}) : helper)))
    + " </p>\r\n        <div class = \"recipe-type\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Type") || (depth0 != null ? lookupProperty(depth0,"Type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Type","hash":{},"data":data,"loc":{"start":{"line":8,"column":36},"end":{"line":8,"column":44}}}) : helper)))
    + " </div>\r\n			</article></a>";
},"useData":true});
})();