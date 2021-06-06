(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['four404'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n\r\n    <main class=\"error-container\">\r\n      <h2>404</h2>\r\n      <h3>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"errormessage") || (depth0 != null ? lookupProperty(depth0,"errormessage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errormessage","hash":{},"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":5,"column":26}}}) : helper)))
    + "</h3> <!-- this just says ,hey we can find your page try again-->\r\n    </main>\r\n\r\n\r\n";
},"useData":true});
})();