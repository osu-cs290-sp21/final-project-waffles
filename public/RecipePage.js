(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['RecipePage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<!-- This calls the RecipeCard handlebars to make recipe cards from the saved cards -->\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"RecipeFull"),depth0,{"name":"RecipeFull","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    <!-- this is the full reciple handlebars which therotically works as normal and then goes through each listed ingredient then instruction to display them with an indefinite length-->\r\n\r\n<main class = \"recipes-container\">\r\n  "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"recipeStuff") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "\r\n</main>\r\n\r\n    ";
},"usePartial":true,"useData":true});
})();