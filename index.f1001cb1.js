document;fetch("https://restcountries.com/v3.1/name/peru?fields=name,capital,population,flafs,languages").then((e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e)}));
//# sourceMappingURL=index.f1001cb1.js.map
