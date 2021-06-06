(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['RecipePage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"list"),depth0,{"name":"list","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    <!-- this is the full reciple handlebars which therotically works as normal and then goes through each listed ingredient then instruction to display them with an indefinite length-->\r\n\r\n    <article class = \"recipe-full\">\r\n      <p class = \"recipe-name\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Name") || (depth0 != null ? lookupProperty(depth0,"Name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data,"loc":{"start":{"line":5,"column":32},"end":{"line":5,"column":40}}}) : helper)))
    + " </p>\r\n      <p class = \"recipe-author\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Author") || (depth0 != null ? lookupProperty(depth0,"Author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Author","hash":{},"data":data,"loc":{"start":{"line":6,"column":34},"end":{"line":6,"column":44}}}) : helper)))
    + " </p>\r\n      <p class = \"recipe-servings\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Servings") || (depth0 != null ? lookupProperty(depth0,"Servings") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Servings","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":48}}}) : helper)))
    + " </p>\r\n      <p class = \"recipe-time\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Time") || (depth0 != null ? lookupProperty(depth0,"Time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Time","hash":{},"data":data,"loc":{"start":{"line":8,"column":32},"end":{"line":8,"column":40}}}) : helper)))
    + " </p>\r\n      <p class = \"recipe-description\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Description") || (depth0 != null ? lookupProperty(depth0,"Description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data,"loc":{"start":{"line":9,"column":39},"end":{"line":9,"column":54}}}) : helper)))
    + " </p>\r\n      <div class = \"recipe-content\">\r\n        <ul class = \"recipe-ingredients\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"ingredients") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "        </ul>\r\n        <ol class = \"recipe-instructions\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"instructions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + "        </ol>\r\n        <p class = \"recipe-note\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"Note") || (depth0 != null ? lookupProperty(depth0,"Note") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Note","hash":{},"data":data,"loc":{"start":{"line":21,"column":34},"end":{"line":21,"column":42}}}) : helper)))
    + " </p>\r\n\r\n      </div>\r\n    </article>";
},"usePartial":true,"useData":true});
})();