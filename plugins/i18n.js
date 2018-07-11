import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


function extractLocaleJson(locale){
  var keys = require('~/locales/translationKeys.json');
  var map = require('~/locales/translations.json');
  var data = map[locale];
  return iterateAndFillDynamicData(keys,data);
}

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': extractLocaleJson('en'),
      'fr': extractLocaleJson('en')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${app.i18n.fallbackLocale}/${link}`
    }
    else{
      return `/${app.i18n.locale}/${link}`
    }
  }
}

function iterateAndFillDynamicData(item,dataObj) {
    if (!item) { return item; } // null, undefined values check

    var types = [String], 
        result;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function(type) {
        if (typeof(item)=='string') {
            result = dataObj[item];
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call( item ) === "[object Array]") {
            result = [];
            item.forEach(function(child, index, array) { 
                result[index] = iterateAndFillDynamicData( child ,dataObj);
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                result = item.cloneNode( true );    
            } else if (!item.prototype) { // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    // it is an object literal
                    result = {};
                    for (var i in item) {
                        result[i] = iterateAndFillDynamicData( item[i] ,dataObj);
                    }
                }
            } else {
                // depending what you would like here,
                // just keep the reference, or create new object
                if (false && item.constructor) {
                    // would not advice to do that, reason? Read below
                    result = new item.constructor();
                } else {
                    result = item;
                }
            }
        } else {
            result = item;
        }
    }

    return result;
}
