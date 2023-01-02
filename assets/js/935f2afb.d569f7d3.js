"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What Is This ?","href":"/Youcan_Flutter_SDK/","docId":"intro"},{"type":"link","label":"What To Know ?","href":"/Youcan_Flutter_SDK/what-to-know","docId":"what-to-know"},{"type":"category","label":"Usage","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Categories","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Get Categories","href":"/Youcan_Flutter_SDK/usage/categories/all_categoriess","docId":"usage/categories/all_categoriess"},{"type":"link","label":"Querying By Limit","href":"/Youcan_Flutter_SDK/usage/categories/limit","docId":"usage/categories/limit"}],"href":"/Youcan_Flutter_SDK/usage/categories/"},{"type":"category","label":"Products","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Get One Product","href":"/Youcan_Flutter_SDK/usage/products/single_product","docId":"usage/products/single_product"},{"type":"link","label":"Get Products","href":"/Youcan_Flutter_SDK/usage/products/get_products","docId":"usage/products/get_products"},{"type":"link","label":"Querying By Pages","href":"/Youcan_Flutter_SDK/usage/products/pagination","docId":"usage/products/pagination"},{"type":"link","label":"Querying By Categories","href":"/Youcan_Flutter_SDK/usage/products/categories","docId":"usage/products/categories"},{"type":"link","label":"Querying With Search","href":"/Youcan_Flutter_SDK/usage/products/search","docId":"usage/products/search"},{"type":"link","label":"Querying With Limits","href":"/Youcan_Flutter_SDK/usage/products/limit","docId":"usage/products/limit"},{"type":"link","label":"Combining Multiple Querying Methods","href":"/Youcan_Flutter_SDK/usage/products/combining","docId":"usage/products/combining"}],"href":"/Youcan_Flutter_SDK/usage/products/"},{"type":"category","label":"Reviews","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Get Reviews","href":"/Youcan_Flutter_SDK/usage/reviews/","docId":"usage/reviews/reviews"},{"type":"link","label":"Querying by limit","href":"/Youcan_Flutter_SDK/usage/reviews/limit","docId":"usage/reviews/limit"}],"href":"/Youcan_Flutter_SDK/usage/reviews/"},{"type":"category","label":"Pages","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Get Pages","href":"/Youcan_Flutter_SDK/usage/pages/all_pages","docId":"usage/pages/all_pages"},{"type":"link","label":"Querying With Search","href":"/Youcan_Flutter_SDK/usage/pages/search","docId":"usage/pages/search"},{"type":"link","label":"Querying With Limits","href":"/Youcan_Flutter_SDK/usage/pages/limit","docId":"usage/pages/limit"}],"href":"/Youcan_Flutter_SDK/usage/pages/"},{"type":"link","label":"Error Handling","href":"/Youcan_Flutter_SDK/usage/error","docId":"usage/error"}],"href":"/Youcan_Flutter_SDK/usage/"}]},"docs":{"intro":{"id":"intro","title":"What Is This ?","description":"A wrappers into the YouCan platform API that enables developers to extend it\'s features inside a Dart/Flutter project.","sidebar":"tutorialSidebar"},"usage/categories/all_categoriess":{"id":"usage/categories/all_categoriess","title":"Get Categories","description":"You can get your store\'s registered categories as a List, list of categories with the calling all() on categories like this :","sidebar":"tutorialSidebar"},"usage/categories/index":{"id":"usage/categories/index","title":"Categories","description":"","sidebar":"tutorialSidebar"},"usage/categories/limit":{"id":"usage/categories/limit","title":"Querying By Limit","description":"You can limit the categories got from the request to a specific number using the limit(), in this example, let\'s say I need only the first 2 categories :","sidebar":"tutorialSidebar"},"usage/error":{"id":"usage/error","title":"Error Handling","description":"Well, there is some points that you should know and be aware of when using this library.","sidebar":"tutorialSidebar"},"usage/index":{"id":"usage/index","title":"Usage","description":"In order to configuring the library with your YouCan store, you need to set storeLink to you store link like this:","sidebar":"tutorialSidebar"},"usage/pages/all_pages":{"id":"usage/pages/all_pages","title":"Get Pages","description":"You can get the pages from your store with the all() method on pages, it will return a List, like in this example :","sidebar":"tutorialSidebar"},"usage/pages/index":{"id":"usage/pages/index","title":"Pages","description":"","sidebar":"tutorialSidebar"},"usage/pages/limit":{"id":"usage/pages/limit","title":"Querying With Limits","description":"This is a internal query method in the library that limits the number of pages retrieved from another query like this :","sidebar":"tutorialSidebar"},"usage/pages/search":{"id":"usage/pages/search","title":"Querying With Search","description":"You can get a list of pages with a search query using the search(), and you can use it like this:","sidebar":"tutorialSidebar"},"usage/products/categories":{"id":"usage/products/categories","title":"Querying By Categories","description":"besides that you can query your products for the whole store, you can also query with specific category in your store using category(), like this:","sidebar":"tutorialSidebar"},"usage/products/combining":{"id":"usage/products/combining","title":"Combining Multiple Querying Methods","description":"You can also use query with multiple methods based on your needs, by combining the previous methods like those examples :","sidebar":"tutorialSidebar"},"usage/products/get_products":{"id":"usage/products/get_products","title":"Get Products","description":"You can get all your store products, using the all() method which is a a Future> :","sidebar":"tutorialSidebar"},"usage/products/index":{"id":"usage/products/index","title":"Products","description":"","sidebar":"tutorialSidebar"},"usage/products/limit":{"id":"usage/products/limit","title":"Querying With Limits","description":"This is a internal query method in the library that limits the number of products retrieved from another query like this :","sidebar":"tutorialSidebar"},"usage/products/pagination":{"id":"usage/products/pagination","title":"Querying By Pages","description":"you can query your products by pages, using the pagination() method","sidebar":"tutorialSidebar"},"usage/products/search":{"id":"usage/products/search","title":"Querying With Search","description":"You can get a list of products with a search query using the search() method which is a Future>, and you can use it like this:","sidebar":"tutorialSidebar"},"usage/products/single_product":{"id":"usage/products/single_product","title":"Get One Product","description":"There is some cases when you will need to fetch only one Product, without getting a whole List, for this you can use the one() method with the product Id, like this :","sidebar":"tutorialSidebar"},"usage/reviews/index":{"id":"usage/reviews/index","title":"Reviews","description":"","sidebar":"tutorialSidebar"},"usage/reviews/limit":{"id":"usage/reviews/limit","title":"Querying by limit","description":"Like you saw and used in the limit() method of the products, There is a limit() method that belongs to the reviews, and you can call it simply, in this example, this will limit the reviews obtained to 10 as maximum :","sidebar":"tutorialSidebar"},"usage/reviews/reviews":{"id":"usage/reviews/reviews","title":"Get Reviews","description":"You can get a List, which represents a list of reviews of a single products using the reviews() method like this:","sidebar":"tutorialSidebar"},"what-to-know":{"id":"what-to-know","title":"What To Know ?","description":"Before starting using this library, please, take a quick look over the YouCan Developers and get some ideas about what it contains, the endpoints it provides.","sidebar":"tutorialSidebar"}}}')}}]);