$(document).ready(function(){
var api_comparison_type=$('#api_comparison_type').val();
var api_locale=$('#api_locale').val();
var api_postal_code=$('#api_postal_code').val();
var api_usage_single=$('#api_usage_single').val();
var api_usage_gas=$('#api_usage_gas').val();
var api_only_energy_cost=$('#api_only_energy_cost').val();
var api_promo=$('#api_promo').val();
var elements=document.querySelectorAll('[data-ps-product="'+ "Groene" +'"]');
$.ajax({
url: 'https://api.tariefchecker.be/productset',
type: 'GET',
data: {
'api_comparison_type':api_comparison_type,
'api_locale':api_locale,
'api_postal_code':api_postal_code,
'api_usage_single':api_usage_single,
'api_usage_gas':api_usage_gas,
'api_only_energy_cost':api_only_energy_cost,
'api_promo':api_promo
},
success: function(data){
var Groene=data['Groene'];
var elements=document.querySelectorAll('[data-ps-product="'+ "Groene" +'"]');
elements[1].innerHTML=Groene.name;
elements[0].src=Groene.supplier_logo;
elements[2].innerHTML=Groene.cheapest_price;
elements[3].href=Groene.product_subscribe_url;
elements[4].src=Groene.supplier_logo;
elements[6].innerHTML=Groene.name;
elements[5].href=Groene.product_subscribe_url;
elements[7].innerHTML=Groene.product_contract_duration;
elements[8].innerHTML=Groene.product_pricing_type;
elements[9].innerHTML=Groene.service_text;
elements[10].innerHTML=Groene.price_promo_year;
elements[11].innerHTML=Groene.name;
elements[12].innerHTML=Groene.name;
elements[12].href=Groene.product_subscribe_url;
elements[13].innerHTML=Groene.product_name;
elements[14].innerHTML=Groene.cheapest_price;
var jrvast=data['1jrvast'];
var elements1=document.querySelectorAll('[data-ps-product="'+ "1jrvast" +'"]');
elements1[1].innerHTML=jrvast.name;
elements1[0].src=jrvast.supplier_logo;
elements1[2].innerHTML=jrvast.cheapest_price;
elements1[3].href=jrvast.product_subscribe_url;
elements1[4].src=jrvast.supplier_logo;
elements1[4].innerHTML=jrvast.name;
elements1[6].innerHTML=jrvast.price_promo_year;
elements1[5].innerHTML=jrvast.price_end_month;
elements1[7].src=jrvast.supplier_logo;
elements1[8].href=jrvast.price_end_month;
elements1[9].innerHTML=jrvast.name;
elements1[10].innerHTML=jrvast.product_contract_duration;
elements1[11].innerHTML=jrvast.product_pricing_type;
elements1[12].innerHTML=jrvast.service_text;
elements1[13].innerHTML=jrvast.price_promo_year;
elements1[14].href=jrvast.product_subscribe_url;
elements1[14].innerHTML=jrvast.name;
elements1[16].innerHTML=jrvast.cheapest_price;
var Goedkoopste=data['Goedkoopste'];
var elements2=document.querySelectorAll('[data-ps-product="'+ "Goedkoopste" +'"]');
elements2[1].innerHTML=Goedkoopste.name;
elements2[0].src=Goedkoopste.supplier_logo;
elements2[2].innerHTML=Goedkoopste.price_promo_year;
elements2[3].href=Goedkoopste.product_subscribe_url;
elements2[4].innerHTML=Goedkoopste.price_end_month;
elements2[6].innerHTML=Goedkoopste.price_incl_promo_year;
elements2[5].innerHTML=Goedkoopste.supplier_name;
elements2[7].src=Goedkoopste.supplier_logo;
elements2[8].href=Goedkoopste.product_subscribe_url;
elements2[9].innerHTML=Goedkoopste.name;
elements2[10].innerHTML=Goedkoopste.product_contract_duration;
elements2[11].innerHTML=Goedkoopste.product_pricing_type;
elements2[11].href=Goedkoopste.product_subscribe_url;
elements2[12].innerHTML=Goedkoopste.service_text;
elements2[13].innerHTML=Goedkoopste.price_promo_year;
elements2[14].innerHTML=Goedkoopste.supplier_name;
elements2[15].innerHTML=Goedkoopste.price_promo_year;
elements2[16].innerHTML=Goedkoopste.product_name;
elements2[17].innerHTML=Goedkoopste.price_end_month;
elements2[18].innerHTML=Goedkoopste.name;
elements2[18].href=Goedkoopste.product_subscribe_url;
elements2[19].innerHTML=Goedkoopste.name;
elements2[20].href=Goedkoopste.product_subscribe_url;
elements2[21].innerHTML=Goedkoopste.name;
var jrvast3=data['3jrvast'];
var elements3=document.querySelectorAll('[data-ps-product="'+ "3jrvast" +'"]');
elements3[1].src=jrvast3.supplier_logo;
elements3[0].innerHTML=jrvast3.price_end_month+" "+"2020";
elements3[2].innerHTML=jrvast3.name;
elements3[3].innerHTML=jrvast3.cheapest_price;
elements3[4].href=jrvast3.product_subscribe_url;
elements3[6].innerHTML=jrvast3.product_name;
elements3[5].innerHTML=jrvast3.price_end_month+" "+"2020";
elements3[7].innerHTML="";
elements3[8].src=jrvast3.supplier_logo;
elements3[9].href=jrvast3.product_subscribe_url;
elements3[10].innerHTML=jrvast3.name;
elements3[11].innerHTML="3";
elements3[12].innerHTML=jrvast3.product_pricing_type;
elements3[13].innerHTML=jrvast3.service_text;
elements3[14].innerHTML=jrvast3.price_promo_year;
elements3[15].innerHTML=jrvast3.price_end_month+" "+2020;
elements3[16].innerHTML=jrvast3.supplier_name;
elements3[17].href=jrvast3.product_subscribe_url;
elements3[17].innerHTML=jrvast3.name;
elements3[18].innerHTML=jrvast3.supplier_name;
elements3[19].innerHTML=jrvast3.cheapest_price;
elements3[20].innerHTML=jrvast3.price_end_month+" "+2020;
elements3[21].href=jrvast3.product_subscribe_url;
elements3[22].innerHTML=jrvast3.supplier_name;
elements3[23].innerHTML=jrvast3.price_promo_year;
console.log(elements3);
var Poweo=data['Poweo'];
var elements4=document.querySelectorAll('[data-ps-product="'+ "Poweo" +'"]');
elements4[1].href=Poweo.product_subscribe_url;
elements4[0].innerHTML=Poweo.supplier_name;
elements4[2].innerHTML=Poweo.supplier_name;
elements4[3].innerHTML=Poweo.price_promo_year;
},
error: function(e){
console.log(e.message);
}});
});
var cheapest_pack_url="http://www.tariefchecker.be/energievergelijker/gas_elektriciteit_energieleveranciers_maandelijks_overzicht_nl/";
var cheapest_e_url="http://www.tariefchecker.be/energievergelijker/elektriciteit_energieleveranciers_maandelijks_overzicht_nl/";
var Decorators={
pricing_type: function(v){
if(v=='variable'){
return "Variabel";
}else if(v=='fixed'){
return "Vast";
}else{
return "Combinatie";
}},
pricing_type_description: function(v){
if(v=='variable'){
return "Variabele prijs";
}else if(v=='fixed'){
return "Vaste prijs";
}else{
return "Combinatie van vast en variabel";
}},
price_period: function(date_in_unixtime){
var months=[
"Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli",
"Augustus", "September", "Oktober", "November", "December"
];
var date=new Date(date_in_unixtime);
return months[date.getMonth()] + " " + date.getFullYear();
},
delta: function(a, b){
return Math.round((a.price_excl_promo_year_raw - b.price_incl_promo_year_raw) / b.price_incl_promo_year_raw * 100);
},
service_level: function(payment,invoicing,contact){
if(payment=="prepaid"){
return "Vooraf betaald";
}else if(payment=="free"){
if(invoicing=="free"){
if(contact=="free"){
return "Volwaardige dienstverlening";
}else{
return "Uitsluitend elektronische communicatie";
}}else if(invoicing=="email"){
if(contact=="free"){
return "Verplichte facturatie per email";
}else{
return "Verplichte facturatie per email en<br />uitsluitend elektronische communicatie";
}}
}else if(payment=="domi"){
if(invoicing=="free"){
if(contact=="free"){
return "Verplichte domiciliëring";
}else{
return "Verplichte domiciliëring en<br />uitsluitend elektronische communicatie";
}}else if(invoicing=="email"){
if(contact=="free"){
return "Verplichte domiciliëring en facturen per email";
}else{
return "Sterk beperkte dienstverlening";
}}
}else{
return "Volwaardige dienstverlening";
}}
}
function cheapestProduct(results){
var cheapest=results['Cheapest'];
var elements=document.querySelectorAll('[data-ps-product="Cheapest"]');
for (var i=0; i < elements.length; i++){
var element=elements[i];
var field=element.getAttribute('data-ps-field');
var value=cheapest[field]
if(field=='price_period_start'){
value=Decorators.price_period(value);
}else if(field=='$delta'){
var last=null;
for (var name in results){ last=results[name]; }
var d=last['price_excl_promo_year_raw'] - cheapest['price_incl_promo_year_raw'];
value=Math.round(d / cheapest['price_excl_promo_year_raw'] * 100);
}else if(field=='product_subscribe_url'){
var href=element.getAttribute('href');
if(href=='#'){
element.setAttribute('href', value);
}
continue;
}
element.innerHTML=value;
}}
function table(results, supplier){
body="";
var keys=[]; for(var key in results){ keys.push(key); }
keys.sort(function(a, b){ return results[a].price_excl_promo_year_raw - results[b].price_excl_promo_year_raw });
console.log(results);
for (var i=keys.length - 1; i >=0; i--){
var result=results[keys[i]];
if(result.supplier_name.toLowerCase()!=supplier){ continue; }
var safe_product_name=result.product_name.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
var duurtijd=ProductSet.Decorators.contract_duration(result.product_contract_duration);
if(duurtijd==0){
duurtijd="Onbepaald";
}else{
duurtijd=duurtijd + ' jaar';
}
body +='<tr>'
+ '<th scope="row">' + result.product_name + '</th>'
+ '<td data-title="Duurtijd">' + duurtijd + ' </td>'
+ '<td data-title="Vast of variabel">' + Decorators.pricing_type(result.product_pricing_type) + '</td>'
+ '<td data-title="Groene energie">' + (result.product_green_percentage > 0 ? "Ja":"Nee") + '</td>'
+ '<td data-title="Dienstverlening" class="hidemobile">'+ Decorators.service_level(result.product_service_level_payment, result.product_service_level_invoicing, result.product_service_level_contact) + '</td>'
+ '<td data-title="Klant worden"><a href="' + result.product_subscribe_url + '" target="_blank" id="table-signup-'+ safe_product_name +'">Klik hier</a></td>'
+ '</tr>';
}
if(body!==""){
var tbody=document.querySelector('#tariefformules tbody');
tbody.innerHTML=body;
}else{
var to_hide=document.querySelectorAll('.row.show');
var to_show=document.querySelectorAll('.row.hide');
for (var i=0; i < to_hide.length; i++){
to_hide[i].className=to_hide[i].className.replace('show', 'hide');
}
for (var i=0; i < to_show.length; i++){
to_show[i].className=to_show[i].className.replace('hide', 'show');
}}
}
function descriptions(results,supplier){
html="";
console.log(results);
var keys=[]; for(var key in results){ keys.push(key); }
keys.sort(function(a, b){ return results[a].price_excl_promo_year_raw - results[b].price_excl_promo_year_raw });
var cheapest="";
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth();
var months=["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
var month_nr=("0" + (month + 1)).slice(-2);
var month_full=months[month];
for (var i=keys.length - 1; i >=0; i--){
var result=results[keys[i]];
var korting="";
if(result.supplier_name.toLowerCase()!=supplier){ continue; }
if(result.price_promo_year_raw > 0){
korting='<li><strong>korting van '+ result.price_promo_year +'/jaar</strong>. Enkel geldig voor nieuwe klanten die zich <strong>via Tariefchecker</strong> registreren voor '+ ProductSet.Decorators.date(result.price_period_end) +'</li>';
}
var supplier_url=result.supplier_name.replace(/\s/g, '-');
var pdffile=result.name.replace(/\s/g, '-').toLowerCase()+'-VLA-WAL-BRU-NL.pdf';
var duurtijd=ProductSet.Decorators.contract_duration(result.product_contract_duration);
var pdf_elektriciteit=result.product_prices_url;
var pdf_aardgas=result.product_prices_url.replace("/elektriciteit/", "/aardgas/");
if(duurtijd==0){
duurtijd="Onbepaald";
}else{
duurtijd=duurtijd + ' jaar';
}
html +='<div class="col-md-12 col-lg-12 details"><div class="col-md-6 col-lg-5 detail-info">'
+ '<h3>' + result.name + '</h3>'
+ '<ul>'
+ '<li>Duurtijd: '+ duurtijd +'</li>'
+ '<li>'+ Decorators.pricing_type_description(result.product_pricing_type) +'</li>'
+ '<li>'+ result.product_green_percentage +'% groene energie</li>'
+ '<li>'+ Decorators.service_level(result.product_service_level_payment, result.product_service_level_invoicing, result.product_service_level_contact) + '</li>'
+ korting
+ '</ul>'
+ '</div><div class="col-md-6 col-lg-6 col-lg-offset-1">'
+ '<h5>Voor wie is dit tarief?</h5>'
+ '<p>'+result.product_tariff_description+'</p>';
if(result.product_type=='pack'){
html +='<p><strong class="dark">Tariefkaarten:</strong> <a href="'+ pdf_elektriciteit +'">Elektriciteit</a> <span class="gasvergelijken">/ <a href="'+ pdf_aardgas +'">Gas</a></span></p>';
}else{
html +='<p><strong class="dark">Tariefkaarten:</strong> <a href="'+ pdf_elektriciteit +'">Elektriciteit</a></p>';
}
html +='<p><a href="' + result.product_subscribe_url + '" target="_blank" class="red">Word klant</a> of <a href="http://www.tariefchecker.be">bereken jouw persoonlijk tarief</a></p>'
+ '</div>'
+ '</div>';
}
html=html.replace(/<\/div>$/, cheapest + '</div>');
var descriptions=document.querySelector('#tariefbeschrijvingen');
descriptions.innerHTML=html;
}
function render(ids,type,supplier){
if(type=='electricity'){
var s=new ProductSet.Selector(new ProductSet.Parameters({
comparison_type: "electricity",
locale: "nl",
postal_code: 2000,
usage: {
single: 3500
},
only_energy_cost: true,
promo: true
}));
}else{
var s=new ProductSet.Selector(new ProductSet.Parameters({
comparison_type: "pack",
locale: "nl",
postal_code: 2000,
usage: {
single: 3500,
gas: 25000,
},
only_energy_cost: true,
promo: true
}));
}
s.select("Cheapest");
for(var i=0; i < ids.length; i++){
var id=ids[i];
s.select(id).by('id', id);
}
s.execute(function(results){
table(results, supplier);
descriptions(results, supplier);
});
};
jQuery(function($){
$(".checkbox").click(function(){
$(this).toggleClass("checked");
});
$('.cbinput').change(function(){
var id=$(this).attr('id').split("gas_").pop().split("electricity_").pop();
var gas='#gas_'+id;
var ele='#electricity_'+id;
if($(gas).is(':checked')&&$(ele).is(':checked')){
$('#comparison_type').val('p');
}else if($(gas).is(':checked')){
$('#comparison_type').val('g');
}else if($(ele).is(':checked')){
$('#comparison_type').val('e');
}});
function setContainerHeigt(){
var i=1;
$('.plancontainer').each(function (){
var maxHeight=-1;
var elementHeights=$('.plancontainer').map(function(){
return $(this).height();
}).get();
var maxHeight=Math.max.apply(null, elementHeights);
console.log(elementHeights);
console.log(maxHeight);
$('.plancontainer').height(maxHeight);
i++;
});
};
var w=window.innerWidth;
if(w>550){
$(document).ready(setContainerHeigt());
/*$(window).resize(function(){
setContainerHeigt();
});*/
}});
var price_period=function (date_in_unixtime){
var months=[
"Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli",
"Augustus", "September", "Oktober", "November", "December"
];
var date=new Date(date_in_unixtime);
return months[date.getMonth()] + " " + date.getFullYear();
};
var price_type=function(v){
if(v=='variable'){
return "variabele prijs";
}else if(v=='fixed'){
return "vast tarief";
}else{
return "combinatie variabel en vast";
}}
var delta_1jrvast=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var delta_Full=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var delta_Poweo=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var delta_Poweo_Excl_Promo=function (all, current){
var d=current.price_excl_promo_year_raw - all['Goedkoopste'].price_excl_promo_year_raw;
return ProductSet.Decorators.euro(-d);
};
var delta_Groene=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var delta_3jrvast=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var api_comparison_type=document.getElementById("api_comparison_type").value;
var api_locale=document.getElementById("api_locale").value;
var api_postal_code=document.getElementById("api_postal_code").value;
var api_usage_single=document.getElementById("api_usage_single").value;
var api_usage_gas=document.getElementById("api_usage_gas").value;
var api_only_energy_cost=document.getElementById("api_only_energy_cost").value;
var api_promo=document.getElementById("api_promo").value;
if(api_comparison_type==""){
api_comparison_type="pack";
}
if(api_locale==""){
api_locale="nl";
}
if(api_postal_code==""){
api_postal_code=2000;
}
if(api_usage_single==""){
api_usage_single=3500;
}
if(api_usage_gas==""){
}
if(api_promo==0){
api_promo=false;
}else{
api_promo=true;
}
if(api_only_energy_cost==0){
api_only_energy_cost=false;
}else{
api_only_energy_cost=true;
}
var s=new ProductSet.Selector(new ProductSet.Parameters({
comparison_type: api_comparison_type,
locale: api_locale,
postal_code: api_postal_code,
usage: {
single: api_usage_single,
gas: api_usage_gas,
},
only_energy_cost: api_only_energy_cost,
promo: api_promo
}));
s.select('1jrvast').by('pricing_type', 'fixed').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_pricing_type",price_type).
decorate("price_period_start",price_period).
calculate("$delta", delta_1jrvast);
s.select('3jrvast').by('pricing_type', 'fixed').and ('contract_duration', 3).
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_pricing_type",price_type).
decorate("price_period_start",price_period).
calculate("$delta", delta_3jrvast);
s.select('Groene').by('greenpeace_rating', 0.65).and ('green','y').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_pricing_type",price_type).
decorate("price_period_start",price_period).
calculate("$delta", delta_Groene);
s.select('Goedkoopste').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_pricing_type",price_type).
decorate("price_period_start",price_period);
s.select('Poweo').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_pricing_type",price_type).
calculate("$delta", delta_Poweo).
calculate("$delta_ex_promo", delta_Poweo_Excl_Promo) ;
s.select('Prijsvast').by('pricing_type', 'fixed').and ('contract_duration', 13).
calculate("$delta", delta_Full);
s.execute(function(results){
var keys=[]; for(var key in results){ keys.push(key); }
keys.sort(function(a, b){ return results[a].price_excl_promo_year_raw - results[b].price_excl_promo_year_raw });
for (var i=keys.length - 1; i >=0; i--){
var selecttype=keys[i];
var result=results[selecttype];
var sl=Decorators.service_level(result.product_service_level_payment, result.product_service_level_invoicing, result.product_service_level_contact);
jQuery('.'+selecttype+'.product_service_level').html(sl);
}});
s.bind();
/*var params=new ProductSet.Parameters({
comparison_type: "pack",
postal_code: 2000,
usage: {
single: 3500,
gas: 25000,
},
only_energy_cost: true,
promo: true,
});
var selector=new ProductSet.Selector(params);
var service_level=function(v){
if(v=='full'){
return "Geen bijzondere voorwaarden qua service";
}
if(v=='online'){
return "Betaling per domiciliëring verplicht, en uitsluitend communicatie per email";
}
if(v=='e-payment'){
return "Betaling per domiciliëring verplicht";
}
if(v=='e-contact'){
return "Uitsluitend communicatie per mail";
}
if(v=='pre-paid'){
return "Jaarfactuur in 1 keer te betalen";
}
if(v=='digi_invoice'){
return "Facturen enkel per email te ontvangen";
}}
var price_type=function(v){
if(v=='variable'){
return "variabel";
}
if(v=='fixed'){
return "vast";
}else{
return "combinatie variabel en vast";
}}
var price_period=function (date_in_unixtime){
var months=[
"januari", "februari", "maart", "april", "mei", "juni", "juli",
"augustus", "september", "oktober", "november", "december"
];
var date=new Date(date_in_unixtime);
return months[date.getMonth()] + " " + date.getFullYear();
};
var delta_Full=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var delta_Poweo=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var delta_Poweo_Excl_Promo=function (all, current){
var d=current.price_excl_promo_year_raw - all['Goedkoopste'].price_excl_promo_year_raw;
return ProductSet.Decorators.euro(-d);
};
var delta_Groene=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
var delta_3jrvast=function (all, current){
var d=current.price_incl_promo_year_raw - all['Goedkoopste'].price_incl_promo_year_raw;
return ProductSet.Decorators.euro(d);
};
selector.select('Goedkoopste').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_service_level",service_level).
decorate("product_pricing_type",price_type) ;
selector.select('Full').
by('service_level', 'full').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_service_level",service_level).
decorate("product_pricing_type",price_type).
calculate("$delta", delta_Full) ;
selector.select('Poweo').
by('id', 'POW-PAR-FIXVLA-1-DF').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_service_level",service_level).
decorate("product_pricing_type",price_type).
calculate("$delta", delta_Poweo).
calculate("$delta_ex_promo", delta_Poweo_Excl_Promo) ;
selector.select('Groene').
by('greenpeace_rating', 0.65).and ('green','y').
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_service_level",service_level).
decorate("product_pricing_type",price_type).
calculate("$delta", delta_Groene) ;
selector.select('3jrvast').
by('pricing_type', 'fixed').and ('contract_duration', 3).
decorate("price_period_end",ProductSet.Decorators.date).
decorate("product_contract_duration",ProductSet.Decorators.contract_duration).
decorate("product_service_level",service_level).
decorate("product_pricing_type",price_type).
decorate("price_period_start",price_period).
calculate("$delta", delta_3jrvast) ;
selector.bind(function (product, fields){
var parser=document.createElement('a');
parser.href=fields.product_subscribe_url;
var subscribe_url="clkn/" + parser.protocol.substring(0, parser.protocol.length-1) + '/' + parser.href.replace(/http(s?):\/\//, "");
if(product=='Goedkoopste'){
document.getElementById('lp-pom-button-341').setAttribute('href', subscribe_url);
document.getElementById('lp-pom-button-377').setAttribute('href', subscribe_url);
}
if(product=='Groene'){
document.getElementById('lp-pom-button-126').setAttribute('href', subscribe_url);
document.getElementById('lp-pom-button-404').setAttribute('href', subscribe_url);
}
if(product=='Poweo'){
document.getElementById('lp-pom-button-331').setAttribute('href', subscribe_url);
document.getElementById('lp-pom-button-391').setAttribute('href', subscribe_url);
}
if(product=='3jrvast'){
document.getElementById('lp-pom-button-337').setAttribute('href', subscribe_url);
document.getElementById('lp-pom-button-398').setAttribute('href', subscribe_url);
}});
*/;
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1};C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);t=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return t}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(n=g(b.commentReplyTitleId))&&n.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),n=t&&t.firstChild.textContent,d=this,o=m(d,"belowelement"),i=m(d,"commentid"),r=m(d,"respondelement"),t=m(d,"postid"),n=m(d,"replyto")||n;o&&i&&r&&t&&!1===v.addComment.moveForm(o,i,r,t,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i=g(e);h=g(n);var r,l,a,m,c=g(b.parentIdFieldId),s=g(b.postIdFieldId),y=g(b.commentReplyTitleId),p=y&&y.firstChild,u=p&&p.nextSibling;if(i&&h&&c){void 0===o&&(o=p&&p.textContent),m=h,e=b.temporaryFormId,n=g(e),y=(y=g(b.commentReplyTitleId))?y.firstChild.textContent:"",n||((n=E.createElement("div")).id=e,n.style.display="none",n.textContent=y,m.parentNode.insertBefore(n,m)),d&&s&&(s.value=d),c.value=t,I.style.display="",i.parentNode.insertBefore(h,i.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(r=C.elements[f],l=!1,"getComputedStyle"in v?a=v.getComputedStyle(r):E.documentElement.currentStyle&&(a=r.currentStyle),(r.offsetWidth<=0&&r.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==r.type&&!r.disabled&&!l){r.focus();break}}catch(e){}return!1}}}}(window);
;function countUp(t,e,n,i,o,r){for(var s=0,a=["webkit","moz","ms","o"],l=0;l<a.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[a[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[l]+"CancelAnimationFrame"]||window[a[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-s)),i=window.setTimeout(function(){t(e+n)},n);return s=e+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this.options=r||{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},""==this.options.separator&&(this.options.useGrouping=!1),null==this.options.prefix&&(this.options.prefix=""),null==this.options.suffix&&(this.options.suffix="");var c=this;this.d="string"==typeof t?document.getElementById(t):t,this.startVal=Number(e),this.endVal=Number(n),this.countDown=this.startVal>this.endVal,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=this.startVal,this.rAF=null,this.decimals=Math.max(0,i||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*o||2e3,this.version=function(){return"1.3.0"},this.printValue=function(t){var e=t?c.formatNumber(t):"--";"INPUT"==c.d.tagName?this.d.value=e:this.d.innerHTML=e},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.count=function(t){null===c.startTime&&(c.startTime=t);var e=(c.timestamp=t)-c.startTime;if(c.remaining=c.duration-e,c.options.useEasing)if(c.countDown){var n=c.easeOutExpo(e,0,c.startVal-c.endVal,c.duration);c.frameVal=c.startVal-n}else c.frameVal=c.easeOutExpo(e,c.startVal,c.endVal-c.startVal,c.duration);else if(c.countDown){n=(c.startVal-c.endVal)*(e/c.duration);c.frameVal=c.startVal-n}else c.frameVal=c.startVal+(c.endVal-c.startVal)*(e/c.duration);c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.frameVal=c.countDown?c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal>c.endVal?c.endVal:c.frameVal,c.printValue(c.frameVal),e<c.duration?c.rAF=requestAnimationFrame(c.count):null!=c.callback&&c.callback()},this.start=function(t){return c.callback=t,isNaN(c.endVal)||isNaN(c.startVal)?(console.log("countUp error: startVal or endVal is not a number"),c.printValue()):c.rAF=requestAnimationFrame(c.count),!1},this.stop=function(){cancelAnimationFrame(c.rAF)},this.reset=function(){c.startTime=null,c.startVal=e,cancelAnimationFrame(c.rAF),c.printValue(c.startVal)},this.resume=function(){c.stop(),c.startTime=null,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)},this.formatNumber=function(t){var e,n,i,o;if(t=t.toFixed(c.decimals),n=(e=(t+="").split("."))[0],i=1<e.length?c.options.decimal+e[1]:"",o=/(\d+)(\d{3})/,c.options.useGrouping)for(;o.test(n);)n=n.replace(o,"$1"+c.options.separator+"$2");return c.options.prefix+n+i+c.options.suffix},c.printValue(c.startVal)}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,i,o){return jQuery.easing[jQuery.easing.def](t,e,n,i,o)},easeInQuad:function(t,e,n,i,o){return i*(e/=o)*e+n},easeOutQuad:function(t,e,n,i,o){return-i*(e/=o)*(e-2)+n},easeInOutQuad:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,o){return i*(e/=o)*e*e+n},easeOutCubic:function(t,e,n,i,o){return i*((e=e/o-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,o){return i*(e/=o)*e*e*e+n},easeOutQuart:function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,o){return i*(e/=o)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,o){return i*((e=e/o-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,o){return-i*Math.cos(e/o*(Math.PI/2))+i+n},easeOutSine:function(t,e,n,i,o){return i*Math.sin(e/o*(Math.PI/2))+n},easeInOutSine:function(t,e,n,i,o){return-i/2*(Math.cos(Math.PI*e/o)-1)+n},easeInExpo:function(t,e,n,i,o){return 0==e?n:i*Math.pow(2,10*(e/o-1))+n},easeOutExpo:function(t,e,n,i,o){return e==o?n+i:i*(1-Math.pow(2,-10*e/o))+n},easeInOutExpo:function(t,e,n,i,o){return 0==e?n:e==o?n+i:(e/=o/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(2-Math.pow(2,-10*--e))+n},easeInCirc:function(t,e,n,i,o){return-i*(Math.sqrt(1-(e/=o)*e)-1)+n},easeOutCirc:function(t,e,n,i,o){return i*Math.sqrt(1-(e=e/o-1)*e)+n},easeInOutCirc:function(t,e,n,i,o){return(e/=o/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+n:i/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,i,o){var r=1.70158,s=0,a=i;if(0==e)return n;if(1==(e/=o))return n+i;if(s||(s=.3*o),a<Math.abs(i)){a=i;r=s/4}else r=s/(2*Math.PI)*Math.asin(i/a);return-a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/s)+n},easeOutElastic:function(t,e,n,i,o){var r=1.70158,s=0,a=i;if(0==e)return n;if(1==(e/=o))return n+i;if(s||(s=.3*o),a<Math.abs(i)){a=i;r=s/4}else r=s/(2*Math.PI)*Math.asin(i/a);return a*Math.pow(2,-10*e)*Math.sin(2*(e*o-r)*Math.PI/s)+i+n},easeInOutElastic:function(t,e,n,i,o){var r=1.70158,s=0,a=i;if(0==e)return n;if(2==(e/=o/2))return n+i;if(s||(s=.3*o*1.5),a<Math.abs(i)){a=i;r=s/4}else r=s/(2*Math.PI)*Math.asin(i/a);return e<1?-.5*a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/s)+n:a*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/s)*.5+i+n},easeInBack:function(t,e,n,i,o,r){return null==r&&(r=1.70158),i*(e/=o)*e*((r+1)*e-r)+n},easeOutBack:function(t,e,n,i,o,r){return null==r&&(r=1.70158),i*((e=e/o-1)*e*((r+1)*e+r)+1)+n},easeInOutBack:function(t,e,n,i,o,r){return null==r&&(r=1.70158),(e/=o/2)<1?i/2*e*e*((1+(r*=1.525))*e-r)+n:i/2*((e-=2)*e*((1+(r*=1.525))*e+r)+2)+n},easeInBounce:function(t,e,n,i,o){return i-jQuery.easing.easeOutBounce(t,o-e,0,i,o)+n},easeOutBounce:function(t,e,n,i,o){return(e/=o)<1/2.75?7.5625*i*e*e+n:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,i,o){return e<o/2?.5*jQuery.easing.easeInBounce(t,2*e,0,i,o)+n:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,i,o)+.5*i+n}}),function(){var e,n,t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},w=[].slice;e=window,n=function(l,r){var e,s,a,c,n,h,u,o,d,i,f,p,m,v,g,y;return e=l(r),o=0<=t.call(r,"ontouchstart"),c={horizontal:{},vertical:{}},u={},h="waypoints-context-id",f="resize.waypoints",p="scroll.waypoints",m=n=1,v="waypoints-waypoint-ids",g="waypoint",y="waypoints",s=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+n++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},this.element[h]=this.id,u[this.id]=this,t.bind(p,function(){var t;return e.didScroll||o?void 0:(e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},r.setTimeout(t,l[y].settings.scrollThrottle))}),t.bind(f,function(){var t;return e.didResize?void 0:(e.didResize=!0,t=function(){return l[y]("refresh"),e.didResize=!1},r.setTimeout(t,l[y].settings.resizeThrottle))})}return t.prototype.doScroll=function(){var t,i=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!o||t.vertical.oldScroll&&t.vertical.newScroll||l[y]("refresh"),l.each(t,function(t,o){var n,e,r;return r=[],e=o.newScroll>o.oldScroll,n=e?o.forward:o.backward,l.each(i.waypoints[t],function(t,e){var n,i;return o.oldScroll<(n=e.offset)&&n<=o.newScroll?r.push(e):o.newScroll<(i=e.offset)&&i<=o.oldScroll?r.push(e):void 0}),r.sort(function(t,e){return t.offset-e.offset}),e||r.reverse(),l.each(r,function(t,e){return e.options.continuous||t===r.length-1?e.trigger([n]):void 0})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,n,i=this;return n=l.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:n?0:e.left,contextScroll:n?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:n?0:e.top,contextScroll:n?0:this.oldScroll.y,contextDimension:n?l[y]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},l.each(t,function(t,a){return l.each(i.waypoints[t],function(t,e){var n,i,o,r,s;return n=e.options.offset,o=e.offset,i=l.isWindow(e.element)?0:e.$element.offset()[a.offsetProp],l.isFunction(n)?n=n.apply(e.element):"string"==typeof n&&(n=parseFloat(n),-1<e.options.offset.indexOf("%")&&(n=Math.ceil(a.contextDimension*n/100))),e.offset=i-a.contextOffset+a.contextScroll-n,e.options.onlyOnScroll&&null!=o||!e.enabled?void 0:null!==o&&o<(r=a.oldScroll)&&r<=e.offset?e.trigger([a.backward]):null!==o&&o>(s=a.oldScroll)&&s>=e.offset?e.trigger([a.forward]):null===o&&a.oldScroll>=e.offset?e.trigger([a.forward]):void 0})})},t.prototype.checkEmpty=function(){return l.isEmptyObject(this.waypoints.horizontal)&&l.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([f,p].join(" ")),delete u[this.id]):void 0},t}(),a=function(){function t(t,e,n){var i,o;"bottom-in-view"===n.offset&&(n.offset=function(){var t;return t=l[y]("viewportHeight"),l.isWindow(e.element)||(t=e.$element.height()),t-l(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=n.horizontal?"horizontal":"vertical",this.callback=n.handler,this.context=e,this.enabled=n.enabled,this.id="waypoints"+m++,this.offset=null,this.options=n,e.waypoints[this.axis][this.id]=this,(i=null!=(o=(c[this.axis][this.id]=this).element[v])?o:[]).push(this.id),this.element[v]=i}return t.prototype.trigger=function(t){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete c[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,n;return(n=t[v])?(e=l.extend({},c.horizontal,c.vertical),l.map(n,function(t){return e[t]})):[]},t}(),i={init:function(t,o){return null==(o=l.extend({},l.fn[g].defaults,o)).handler&&(o.handler=t),this.each(function(){var t,e,n,i;return t=l(this),n=null!=(i=o.context)?i:l.fn[g].defaults.context,l.isWindow(n)||(n=t.closest(n)),n=l(n),(e=u[n[0][h]])||(e=new s(n)),new a(t,e,o)}),l[y]("refresh"),this},disable:function(){return i._invoke.call(this,"disable")},enable:function(){return i._invoke.call(this,"enable")},destroy:function(){return i._invoke.call(this,"destroy")},prev:function(t,e){return i._traverse.call(this,t,e,function(t,e,n){return 0<e?t.push(n[e-1]):void 0})},next:function(t,e){return i._traverse.call(this,t,e,function(t,e,n){return e<n.length-1?t.push(n[e+1]):void 0})},_traverse:function(e,t,n){var i,o;return null==e&&(e="vertical"),null==t&&(t=r),o=d.aggregate(t),i=[],this.each(function(){var t;return t=l.inArray(this,o[e]),n(i,t,o[e])}),this.pushStack(i)},_invoke:function(n){return this.each(function(){var t;return t=a.getWaypointsByElement(this),l.each(t,function(t,e){return e[n](),!0})}),this}},l.fn[g]=function(){var t,e;return e=arguments[0],t=2<=arguments.length?w.call(arguments,1):[],i[e]?i[e].apply(this,t):l.isFunction(e)?i.init.apply(this,arguments):l.isPlainObject(e)?i.init.apply(this,[null,e]):l.error(e?"The "+e+" method does not exist in jQuery Waypoints.":"jQuery Waypoints needs a callback function or handler option.")},l.fn[g].defaults={context:r,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},d={refresh:function(){return l.each(u,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=r.innerHeight)?t:e.height()},aggregate:function(t){var e,i,n;return e=c,t&&(e=null!=(n=u[l(t)[0][h]])?n.waypoints:void 0),e?(i={horizontal:[],vertical:[]},l.each(i,function(t,n){return l.each(e[t],function(t,e){return n.push(e)}),n.sort(function(t,e){return t.offset-e.offset}),i[t]=l.map(n,function(t){return t.element}),i[t]=l.unique(i[t])}),i):[]},above:function(t){return null==t&&(t=r),d._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=r),d._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=r),d._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=r),d._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return d._invoke("enable")},disable:function(){return d._invoke("disable")},destroy:function(){return d._invoke("destroy")},extendFn:function(t,e){return i[t]=e},_invoke:function(n){var t;return t=l.extend({},c.vertical,c.horizontal),l.each(t,function(t,e){return e[n](),!0})},_filter:function(t,e,n){var i,o;return(i=u[l(t)[0][h]])?(o=[],l.each(i.waypoints[e],function(t,e){return n(i,e)?o.push(e):void 0}),o.sort(function(t,e){return t.offset-e.offset}),l.map(o,function(t){return t.element})):[]}},l[y]=function(){var t,e;return e=arguments[0],t=2<=arguments.length?w.call(arguments,1):[],d[e]?d[e].apply(null,t):d.aggregate.call(null,e)},l[y].settings={resizeThrottle:100,scrollThrottle:30},e.on("load.waypoints",function(){return l[y]("refresh")})},"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(t){return n(t,e)}):n(e.jQuery,e)}.call(this),function(r){"use strict";var t,e,s,i,n,o,a,l,c,h,u,d,f,p,m,v,g,y=(s="sf-breadcrumb",i="sf-js-enabled",n="sf-with-ul",o="sf-arrows",(e=/iPhone|iPad|iPod/i.test(navigator.userAgent))&&r(window).load(function(){r("body").children().on("click",r.noop)}),a=e,l="behavior"in(t=document.documentElement.style)&&"fill"in t&&/iemobile/i.test(navigator.userAgent),c=function(t,e){var n=i;e.cssArrows&&(n+=" "+o),t.toggleClass(n)},h=function(t){t.children("a").toggleClass(n)},u=function(t){var e=t.css("ms-touch-action");e="pan-y"===e?"auto":"pan-y",t.css("ms-touch-action",e)},d=function(t){var e=r(this),n=e.siblings(t.data.popUpSelector);0<n.length&&n.is(":hidden")&&(e.one("click.superfish",!1),"MSPointerDown"===t.type?e.trigger("focus"):r.proxy(f,e.parent("li"))())},f=function(){var t=r(this),e=g(t);clearTimeout(e.sfTimer),t.siblings().superfish("hide").end().superfish("show")},p=function(){var t=r(this),e=g(t);a?r.proxy(m,t,e)():(clearTimeout(e.sfTimer),e.sfTimer=setTimeout(r.proxy(m,t,e),e.delay))},m=function(t){t.retainPath=-1<r.inArray(this[0],t.$path),this.superfish("hide"),this.parents("."+t.hoverClass).length||(t.onIdle.call(v(this)),t.$path.length&&r.proxy(f,t.$path)())},v=function(t){return t.closest("."+i)},g=function(t){return v(t).data("sf-options")},{hide:function(t){if(this.length){var e=g(this);if(!e)return this;var n=!0===e.retainPath?e.$path:"",i=this.find("li."+e.hoverClass).add(this).not(n).removeClass(e.hoverClass).children(e.popUpSelector),o=e.speedOut;t&&(i.show(),o=0),e.retainPath=!1,e.onBeforeHide.call(i),i.stop(!0,!0).animate(e.animationOut,o,function(){var t=r(this);e.onHide.call(t)})}return this},show:function(){var t=g(this);if(!t)return this;var e=this.addClass(t.hoverClass).children(t.popUpSelector);t.onBeforeShow.call(e),e.stop(!0,!0).animate(t.animation,t.speed,function(){t.onShow.call(e)});var n=this.children("ul").first();if(n.length){var i=r(window).width(),o=n.offset().left+n.width();(i<o||n.parent().parent().hasClass("on-viewport"))&&(n.parent().parent().hasClass("sf-menu")?n.css("left","-"+(o-i)+"px"):(n.addClass("on-viewport"),n.css("left","-"+n.width()+"px")))}return this},destroy:function(){return this.each(function(){var t,e=r(this),n=e.data("sf-options");return!!n&&(t=e.find(n.popUpSelector).parent("li"),clearTimeout(n.sfTimer),c(e,n),h(t),u(e),e.off(".superfish").off(".hoverIntent"),t.children(n.popUpSelector).attr("style",function(t,e){return e.replace(/display[^;]+;?/g,"")}),n.$path.removeClass(n.hoverClass+" "+s).addClass(n.pathClass),e.find("."+n.hoverClass).removeClass(n.hoverClass),n.onDestroy.call(e),void e.removeData("sf-options"))})},init:function(o){return this.each(function(){var t=r(this);if(t.data("sf-options"))return!1;var e,n=r.extend({},r.fn.superfish.defaults,o),i=t.find(n.popUpSelector).parent("li");n.$path=(e=n,t.find("li."+e.pathClass).slice(0,e.pathLevels).addClass(e.hoverClass+" "+s).filter(function(){return r(this).children(e.popUpSelector).hide().show().length}).removeClass(e.pathClass)),t.data("sf-options",n),c(t,n),h(i),u(t),function(t,e){var n="li:has("+e.popUpSelector+")";r.fn.hoverIntent&&!e.disableHI?t.hoverIntent(f,p,n):t.on("mouseenter.superfish",n,f).on("mouseleave.superfish",n,p);var i="MSPointerDown.superfish";a||(i+=" touchend.superfish"),l&&(i+=" mousedown.superfish"),t.on("focusin.superfish","li",f).on("focusout.superfish","li",p).on(i,"a",e,d)}(t,n),i.not("."+s).superfish("hide",!0),n.onInit.call(this)})}});r.fn.superfish=function(t){return y[t]?y[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?r.error("Method "+t+" does not exist on jQuery.fn.superfish"):y.init.apply(this,arguments)},r.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:r.noop,onBeforeShow:r.noop,onShow:r.noop,onBeforeHide:r.noop,onHide:r.noop,onIdle:r.noop,onDestroy:r.noop},r.fn.extend({hideSuperfishUl:y.hide,showSuperfishUl:y.show})}(jQuery),function(u){u.fn.hoverIntent=function(t,e,n){var o={interval:100,sensitivity:6,timeout:0};o="object"==typeof t?u.extend(o,t):u.isFunction(e)?u.extend(o,{over:t,out:e,selector:n}):u.extend(o,{over:t,out:t,selector:e});var i,r,s,a,l=function(t){i=t.pageX,r=t.pageY},c=function(t,e){return e.hoverIntent_t=clearTimeout(e.hoverIntent_t),Math.sqrt((s-i)*(s-i)+(a-r)*(a-r))<o.sensitivity?(u(e).off("mousemove.hoverIntent",l),e.hoverIntent_s=!0,o.over.apply(e,[t])):(s=i,a=r,void(e.hoverIntent_t=setTimeout(function(){c(t,e)},o.interval)))},h=function(t){var n=u.extend({},t),i=this;i.hoverIntent_t&&(i.hoverIntent_t=clearTimeout(i.hoverIntent_t)),"mouseenter"===t.type?(s=n.pageX,a=n.pageY,u(i).on("mousemove.hoverIntent",l),i.hoverIntent_s||(i.hoverIntent_t=setTimeout(function(){c(n,i)},o.interval))):(u(i).off("mousemove.hoverIntent",l),i.hoverIntent_s&&(i.hoverIntent_t=setTimeout(function(){var t,e;t=n,(e=i).hoverIntent_t=clearTimeout(e.hoverIntent_t),e.hoverIntent_s=!1,o.out.apply(e,[t])},o.timeout)))};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},o.selector)}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t:t(jQuery)}(function(d){function e(t){var e=t||window.event,n=g.call(arguments,1),i=0,o=0,r=0,s=0,a=0,l=0;if((t=d.event.fix(e)).type="mousewheel","detail"in e&&(r=-1*e.detail),"wheelDelta"in e&&(r=e.wheelDelta),"wheelDeltaY"in e&&(r=e.wheelDeltaY),"wheelDeltaX"in e&&(o=-1*e.wheelDeltaX),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(o=-1*r,r=0),i=0===r?o:r,"deltaY"in e&&(i=r=-1*e.deltaY),"deltaX"in e&&(o=e.deltaX,0===r&&(i=-1*o)),0!==r||0!==o){if(1===e.deltaMode){var c=d.data(this,"mousewheel-line-height");i*=c,r*=c,o*=c}else if(2===e.deltaMode){var h=d.data(this,"mousewheel-page-height");i*=h,r*=h,o*=h}if(s=Math.max(Math.abs(r),Math.abs(o)),(!v||s<v)&&(p(e,v=s)&&(v/=40)),p(e,s)&&(i/=40,o/=40,r/=40),i=Math[1<=i?"floor":"ceil"](i/v),o=Math[1<=o?"floor":"ceil"](o/v),r=Math[1<=r?"floor":"ceil"](r/v),y.settings.normalizeOffset&&this.getBoundingClientRect){var u=this.getBoundingClientRect();a=t.clientX-u.left,l=t.clientY-u.top}return t.deltaX=o,t.deltaY=r,t.deltaFactor=v,t.offsetX=a,t.offsetY=l,t.deltaMode=0,n.unshift(t,i,o,r),m&&clearTimeout(m),m=setTimeout(f,200),(d.event.dispatch||d.event.handle).apply(this,n)}}function f(){v=null}function p(t,e){return y.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120==0}var m,v,t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(d.event.fixHooks)for(var i=t.length;i;)d.event.fixHooks[t[--i]]=d.event.mouseHooks;var y=d.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var t=n.length;t;)this.addEventListener(n[--t],e,!1);else this.onmousewheel=e;d.data(this,"mousewheel-line-height",y.getLineHeight(this)),d.data(this,"mousewheel-page-height",y.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=n.length;t;)this.removeEventListener(n[--t],e,!1);else this.onmousewheel=null;d.removeData(this,"mousewheel-line-height"),d.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var e=d(t),n=e["offsetParent"in d.fn?"offsetParent":"parent"]();return n.length||(n=d("body")),parseInt(n.css("fontSize"),10)||parseInt(e.css("fontSize"),10)||16},getPageHeight:function(t){return d(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};d.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}),function(t,e){"object"==typeof exports?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e(t.jQuery)}(this,function(n){var s=function(t,s){var n,e=document.createElement("canvas");t.appendChild(e),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(e);var o=e.getContext("2d");e.width=e.height=s.size;var i=1;1<window.devicePixelRatio&&(i=window.devicePixelRatio,e.style.width=e.style.height=[s.size,"px"].join(""),e.width=e.height=s.size*i,o.scale(i,i)),o.translate(s.size/2,s.size/2),o.rotate((s.rotate/180-.5)*Math.PI);var r=(s.size-s.lineWidth)/2;s.scaleColor&&s.scaleLength&&(r-=s.scaleLength+2),Date.now=Date.now||function(){return+new Date};var a=function(t,e,n){var i=(n=Math.min(Math.max(-1,n||0),1))<=0;o.beginPath(),o.arc(0,0,r,0,2*Math.PI*n,i),o.strokeStyle=t,o.lineWidth=e,o.stroke()},l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},c=function(){s.scaleColor&&function(){var t,e;o.lineWidth=1,o.fillStyle=s.scaleColor,o.save();for(var n=24;0<n;--n)t=n%6==0?(e=s.scaleLength,0):(e=.6*s.scaleLength,s.scaleLength-e),o.fillRect(-s.size/2+t,0,e,1),o.rotate(Math.PI/12);o.restore()}(),s.trackColor&&a(s.trackColor,s.lineWidth,1)};this.getCanvas=function(){return e},this.getCtx=function(){return o},this.clear=function(){o.clearRect(s.size/-2,s.size/-2,s.size,s.size)},this.draw=function(t){var e;s.scaleColor||s.trackColor?o.getImageData&&o.putImageData?n?o.putImageData(n,0,0):(c(),n=o.getImageData(0,0,s.size*i,s.size*i)):(this.clear(),c()):this.clear(),o.lineCap=s.lineCap,e="function"==typeof s.barColor?s.barColor(t):s.barColor,a(e,s.lineWidth,t/100)}.bind(this),this.animate=function(n,i){var o=Date.now();s.onStart(n,i);var r=function(){var t=Math.min(Date.now()-o,s.animate.duration),e=s.easing(this,t,n,i-n,s.animate.duration);this.draw(e),s.onStep(n,i,e),t>=s.animate.duration?s.onStop(n,i):l(r)}.bind(this);l(r)}.bind(this)},i=function(e,n){var i={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},onStart:function(){},onStep:function(){},onStop:function(){}};if(void 0!==s)i.renderer=s;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");i.renderer=SVGRenderer}var o={},r=0,t=function(){for(var t in this.el=e,this.options=o,i)i.hasOwnProperty(t)&&(o[t]=n&&void 0!==n[t]?n[t]:i[t],"function"==typeof o[t]&&(o[t]=o[t].bind(this)));o.easing="string"==typeof o.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[o.easing])?jQuery.easing[o.easing]:i.easing,"number"==typeof o.animate&&(o.animate={duration:o.animate,enabled:!0}),"boolean"!=typeof o.animate||o.animate||(o.animate={duration:1e3,enabled:o.animate}),this.renderer=new o.renderer(e,o),this.renderer.draw(r),e.dataset&&e.dataset.percent?this.update(parseFloat(e.dataset.percent)):e.getAttribute&&e.getAttribute("data-percent")&&this.update(parseFloat(e.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),o.animate.enabled?this.renderer.animate(r,t):this.renderer.draw(t),r=t,this}.bind(this),this.disableAnimation=function(){return o.animate.enabled=!1,this},this.enableAnimation=function(){return o.animate.enabled=!0,this},t()};n.fn.easyPieChart=function(e){return this.each(function(){var t;n.data(this,"easyPieChart")||(t=n.extend({},e,n(this).data()),n.data(this,"easyPieChart",new i(this,t)))})}}),function(l){var c=l(window),h=c.height();c.resize(function(){h=c.height()}),l.fn.parallax=function(i,o,t){function e(){var n=c.scrollTop();a.each(function(){var t=l(this),e=t.offset().top;e+r(t)<n||n+h<e||a.css("backgroundPosition",i+" "+Math.round((s-n)*o)+"px")})}var r,s,a=l(this);a.each(function(){s=a.offset().top}),r=t?function(t){return t.outerHeight(!0)}:function(t){return t.height()},(arguments.length<1||null===i)&&(i="50%"),(arguments.length<2||null===o)&&(o=.1),(arguments.length<3||null===t)&&(t=!0),c.bind("scroll",e).resize(e),e()}}(jQuery),function(){"use strict";function t(){}function r(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function e(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,i=this,o=i.EventEmitter;n.getListeners=function(t){var e,n,i=this._getEvents();if(t instanceof RegExp)for(n in e={},i)i.hasOwnProperty(n)&&t.test(n)&&(e[n]=i[n]);else e=i[t]||(i[t]=[]);return e},n.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},n.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},n.addListener=function(t,e){var n,i=this.getListenersAsObject(t),o="object"==typeof e;for(n in i)i.hasOwnProperty(n)&&-1===r(i[n],e)&&i[n].push(o?e:{listener:e,once:!1});return this},n.on=e("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=e("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,e){var n,i,o=this.getListenersAsObject(t);for(i in o)o.hasOwnProperty(i)&&(-1!==(n=r(o[i],e))&&o[i].splice(n,1));return this},n.off=e("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,n){var i,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(i=n.length;i--;)r.call(this,e,n[i]);else for(i in e)e.hasOwnProperty(i)&&(o=e[i])&&("function"==typeof o?r.call(this,i,o):s.call(this,i,o));return this},n.removeEvent=function(t){var e,n=typeof t,i=this._getEvents();if("string"===n)delete i[t];else if(t instanceof RegExp)for(e in i)i.hasOwnProperty(e)&&t.test(e)&&delete i[e];else delete this._events;return this},n.removeAllListeners=e("removeEvent"),n.emitEvent=function(t,e){var n,i,o,r=this.getListenersAsObject(t);for(o in r)if(r.hasOwnProperty(o))for(i=r[o].length;i--;)!0===(n=r[o][i]).once&&this.removeListener(t,n.listener),n.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},n.trigger=e("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return i.EventEmitter=o,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(n){"use strict";function i(t){var e=n.event;return e.target=e.target||e.srcElement||t,e}var t=document.documentElement,e=function(){};t.addEventListener?e=function(t,e,n){t.addEventListener(e,n,!1)}:t.attachEvent&&(e=function(e,t,n){e[t+n]=n.handleEvent?function(){var t=i(e);n.handleEvent.call(n,t)}:function(){var t=i(e);n.call(e,t)},e.attachEvent("on"+t,e[t+n])});var o=function(){};t.removeEventListener?o=function(t,e,n){t.removeEventListener(e,n,!1)}:t.detachEvent&&(o=function(e,n,i){e.detachEvent("on"+n,e[n+i]);try{delete e[n+i]}catch(t){e[n+i]=void 0}});var r={bind:e,unbind:o};"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r:n.eventie=r}(this),function(n,i){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(t,e){return i(n,t,e)}):"object"==typeof exports?module.exports=i(n,require("wolfy87-eventemitter"),require("eventie")):n.imagesLoaded=i(n,n.EventEmitter,n.eventie)}(window,function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e,n=[];if(e=t,"[object Array]"===u.call(e))n=t;else if("number"==typeof t.length)for(var i=0,o=t.length;i<o;i++)n.push(t[i]);else n.push(t);return n}function s(t,e,n){if(!(this instanceof s))return new s(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=o({},this.options),"function"==typeof e?n=e:o(this.options,e),n&&this.on("always",n),this.getImages(),l&&(this.jqDeferred=new l.Deferred);var i=this;setTimeout(function(){i.check()})}function i(t){this.img=t}function a(t){this.src=t,d[t]=this}var l=t.jQuery,c=t.console,h=void 0!==c,u=Object.prototype.toString;(s.prototype=new e).options={},s.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;t<e;t++){var n=this.elements[t];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var o=n.querySelectorAll("img"),r=0,s=o.length;r<s;r++){var a=o[r];this.addImage(a)}}},s.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},s.prototype.check=function(){function t(t,e){return n.options.debug&&h&&c.log("confirm",t,e),n.progress(t),++i===o&&n.complete(),!0}var n=this,i=0,o=this.images.length;if(this.hasAnyBroken=!1,o)for(var e=0;e<o;e++){var r=this.images[e];r.on("confirm",t),r.check()}else this.complete()},s.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var n=this;setTimeout(function(){if(n.emit(e,n),n.emit("always",n),n.jqDeferred){var t=n.hasAnyBroken?"reject":"resolve";n.jqDeferred[t](n)}})},l&&(l.fn.imagesLoaded=function(t,e){return new s(this,t,e).jqDeferred.promise(l(this))}),(i.prototype=new e).check=function(){var t=d[this.img.src]||new a(this.img.src);if(t.isConfirmed)this.confirm(t.isLoaded,"cached was confirmed");else if(this.img.complete&&void 0!==this.img.naturalWidth)this.confirm(0!==this.img.naturalWidth,"naturalWidth");else{var n=this;t.on("confirm",function(t,e){return n.confirm(t.isLoaded,e),!0}),t.check()}},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var d={};return(a.prototype=new e).check=function(){if(!this.isChecked){var t=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},a.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},a.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},a.prototype.unbindProxyEvents=function(t){n.unbind(t.target,"load",this),n.unbind(t.target,"error",this)},s}),function(e,v){"use strict";var g,y,r=e.document.documentElement,l=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},s="Moz Webkit O Ms".split(" "),t=function(t){var e,n=r.style;if("string"==typeof n[t])return t;t=l(t);for(var i=0,o=s.length;i<o;i++)if("string"==typeof n[e=s[i]+t])return e},c=t("transform"),n=t("transitionProperty");if(Modernizr.csstransforms){var h=Modernizr.csstransforms3d?{translate:function(t){return"translate3d("+t[0]+"px, "+t[1]+"px, 0) "},scale:function(t){return"scale3d("+t+", "+t+", 1) "}}:{translate:function(t){return"translate("+t[0]+"px, "+t[1]+"px) "},scale:function(t){return"scale("+t+") "}},i=function(t,e,n){var i,o,r=v.data(t,"isoTransform")||{},s={},a={};for(i in s[e]=n,v.extend(r,s),r)o=r[i],a[i]=h[i](o);var l=(a.translate||"")+(a.scale||"");v.data(t,"isoTransform",r),t.style[c]=l};v.cssNumber.scale=!0,v.cssHooks.scale={set:function(t,e){i(t,"scale",e)},get:function(t){var e=v.data(t,"isoTransform");return e&&e.scale?e.scale:1}},v.fx.step.scale=function(t){v.cssHooks.scale.set(t.elem,t.now+t.unit)},v.cssNumber.translate=!0,v.cssHooks.translate={set:function(t,e){i(t,"translate",e)},get:function(t){var e=v.data(t,"isoTransform");return e&&e.translate?e.translate:[0,0]}}}Modernizr.csstransitions&&(g={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[n],y=t("transitionDuration")),v.Isotope=function(t,e,n){this.element=v(e),this._create(t),this._init(n)};var u=["width","height"],d=v(e);v.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},v.Isotope.prototype={_create:function(t){this.options=v.extend({},v.Isotope.settings,t),this.styleQueue=[],this.elemCount=0;var e=this.element[0].style;this.originalStyle={};var n=u.slice(0);for(var i in this.options.containerStyle)n.push(i);for(var o=0,r=n.length;o<r;o++)i=n[o],this.originalStyle[i]=e[i]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var s={"original-order":function(t,e){return e.elemCount++,e.elemCount},random:function(){return Math.random()}};this.options.getSortData=v.extend(this.options.getSortData,s),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var a=this;setTimeout(function(){a.element.addClass(a.options.containerClass)},0),this.options.resizable&&d.bind("debouncedresize.isotope",function(){a.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(t){var e=this.options.itemSelector,n=e?t.filter(e).add(t.find(e)):t,i={position:"absolute"};return n=n.filter(function(t,e){return 1===e.nodeType}),this.usingTransforms&&(i.left=0,i.top=0),n.css(i).addClass(this.options.itemClass),this.updateSortData(n,!0),n},_init:function(t){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(t)},option:function(t){var e;if(v.isPlainObject(t))for(var n in this.options=v.extend(!0,this.options,t),t)this[e="_update"+l(n)]&&this[e]()},_updateAnimationEngine:function(){var t;switch(this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"")){case"css":case"none":t=!1;break;case"jquery":t=!0;break;default:t=!Modernizr.csstransitions}this.isUsingJQueryAnimation=t,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var t=this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!this.isUsingJQueryAnimation;t||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=t?this._translate:this._positionAbs},_filter:function(t){var e=""===this.options.filter?"*":this.options.filter;if(!e)return t;var n=this.options.hiddenClass,i="."+n,o=t.filter(i),r=o;if("*"!==e){r=o.filter(e);var s=t.not(i).not(e).addClass(n);this.styleQueue.push({$el:s,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:r,style:this.options.visibleStyle}),r.removeClass(n),t.filter(e)},updateSortData:function(t,e){var n,i,o=this,r=this.options.getSortData;t.each(function(){for(var t in n=v(this),i={},r)i[t]=e||"original-order"!==t?r[t](n,o):v.data(this,"isotope-sort-data")[t];v.data(this,"isotope-sort-data",i)})},_sort:function(){var o=this.options.sortBy,r=this._getSorter,s=this.options.sortAscending?1:-1;this.$filteredAtoms.sort(function(t,e){var n=r(t,o),i=r(e,o);return n===i&&"original-order"!==o&&(n=r(t,"original-order"),i=r(e,"original-order")),(i<n?1:n<i?-1:0)*s})},_getSorter:function(t,e){return v.data(t,"isotope-sort-data")[e]},_translate:function(t,e){return{translate:[t,e]}},_positionAbs:function(t,e){return{left:t,top:e}},_pushPosition:function(t,e,n){e=Math.round(e+this.offset.left),n=Math.round(n+this.offset.top);var i=this.getPositionStyles(e,n);this.styleQueue.push({$el:t,style:i}),this.options.itemPositionDataEnabled&&t.data("isotope-item-position",{x:e,y:n})},layout:function(t,e){var n=this.options.layoutMode;if(this["_"+n+"Layout"](t),this.options.resizesContainer){var i=this["_"+n+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:i})}this._processStyleQueue(t,e),this.isLaidOut=!0},_processStyleQueue:function(i,t){var n,e,o,r,s=this.isLaidOut&&this.isUsingJQueryAnimation?"animate":"css",a=this.options.animationOptions,l=this.options.onLayout;if(e=function(t,e){e.$el[s](e.style,a)},this._isInserting&&this.isUsingJQueryAnimation)e=function(t,e){n=e.$el.hasClass("no-transition")?"css":s,e.$el[n](e.style,a)};else if(t||l||a.complete){var c=!1,h=[t,l,a.complete],u=this;if(o=!0,r=function(){if(!c){for(var t,e=0,n=h.length;e<n;e++)"function"==typeof(t=h[e])&&t.call(u.element,i,u);c=!0}},this.isUsingJQueryAnimation&&"animate"===s)a.complete=r,o=!1;else if(Modernizr.csstransitions){for(var d,f=0,p=this.styleQueue[0],m=p&&p.$el;!m||!m.length;){if(!(d=this.styleQueue[f++]))return;m=d.$el}0<parseFloat(getComputedStyle(m[0])[y])&&(o=!(e=function(t,e){e.$el[s](e.style,a).one(g,r)}))}}v.each(this.styleQueue,e),o&&r(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(t){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,t)},addItems:function(t,e){var n=this._getAtoms(t);this.$allAtoms=this.$allAtoms.add(n),e&&e(n)},insert:function(t,n){this.element.append(t);var i=this;this.addItems(t,function(t){var e=i._filter(t);i._addHideAppended(e),i._sort(),i.reLayout(),i._revealAppended(e,n)})},appended:function(t,e){var n=this;this.addItems(t,function(t){n._addHideAppended(t),n.layout(t),n._revealAppended(t,e)})},_addHideAppended:function(t){this.$filteredAtoms=this.$filteredAtoms.add(t),t.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:t,style:this.options.hiddenStyle})},_revealAppended:function(t,e){var n=this;setTimeout(function(){t.removeClass("no-transition"),n.styleQueue.push({$el:t,style:n.options.visibleStyle}),n._isInserting=!1,n._processStyleQueue(t,e)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(t,e){this.$allAtoms=this.$allAtoms.not(t),this.$filteredAtoms=this.$filteredAtoms.not(t);var n=this,i=function(){t.remove(),e&&e.call(n.element)};t.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:t,style:this.options.hiddenStyle}),this._sort(),this.reLayout(i)):i()},shuffle:function(t){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(t)},destroy:function(){var e=this.usingTransforms,t=this.options;this.$allAtoms.removeClass(t.hiddenClass+" "+t.itemClass).each(function(){var t=this.style;t.position="",t.top="",t.left="",t.opacity="",e&&(t[c]="")});var n=this.element[0].style;for(var i in this.originalStyle)n[i]=this.originalStyle[i];this.element.unbind(".isotope").undelegate("."+t.hiddenClass,"click").removeClass(t.containerClass).removeData("isotope"),d.unbind(".isotope")},_getSegments:function(t){var e,n=this.options.layoutMode,i=t?"rowHeight":"columnWidth",o=t?"height":"width",r=t?"rows":"cols",s=this.element[o](),a=this.options[n]&&this.options[n][i]||this.$filteredAtoms["outer"+l(o)](!0)||s;e=Math.floor(s/a),e=Math.max(e,1),this[n][r]=e,this[n][i]=a},_checkIfSegmentsChanged:function(t){var e=this.options.layoutMode,n=t?"rows":"cols",i=this[e][n];return this._getSegments(t),this[e][n]!==i},_masonryReset:function(){var t=this.element.width(),e=this.$filteredAtoms.outerWidth(!0)||t;this.masonry={cols:Math.round(t/e),columnWidth:e};var n=this.masonry.cols;for(this.masonry.colYs=[];n--;)this.masonry.colYs.push(0)},_masonryLayout:function(t){var s=this,a=s.masonry;t.each(function(){var t=v(this),e=Math.ceil(t.outerWidth(!0)/a.columnWidth);if(1===(e=Math.min(e,a.cols)))s._masonryPlaceBrick(t,a.colYs);else{var n,i,o=a.cols+1-e,r=[];for(i=0;i<o;i++)n=a.colYs.slice(i,i+e),r[i]=Math.max.apply(Math,n);s._masonryPlaceBrick(t,r)}})},_masonryPlaceBrick:function(t,e){for(var n=Math.min.apply(Math,e),i=0,o=0,r=e.length;o<r;o++)if(e[o]===n){i=o;break}var s=this.masonry.columnWidth*i,a=n;this._pushPosition(t,s,a);var l=n+t.outerHeight(!0),c=this.masonry.cols+1-r;for(o=0;o<c;o++)this.masonry.colYs[i+o]=l},_masonryGetContainerSize:function(){return{height:Math.max.apply(Math,this.masonry.colYs)}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(t){var i=this,o=Math.round(Math.round(this.element.width()/this.$filteredAtoms.outerWidth(!0))*this.$filteredAtoms.outerWidth(!0)),r=this.fitRows;t.each(function(){var t=v(this),e=t.outerWidth(!0),n=t.outerHeight(!0);0!==r.x&&e+r.x>o&&(r.x=0,r.y=r.height),i._pushPosition(t,r.x,r.y),r.height=Math.max(r.y+n,r.height),r.x+=e})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0}};var o=function(t){e.console&&e.console.error(t)};v.fn.isotope=function(e,n){if("string"==typeof e){var i=Array.prototype.slice.call(arguments,1);this.each(function(){var t=v.data(this,"isotope");return t?v.isFunction(t[e])&&"_"!==e.charAt(0)?void t[e].apply(t,i):void o("no such method '"+e+"' for isotope instance"):void o("cannot call methods on isotope prior to initialization; attempted to call method '"+e+"'")})}else this.each(function(){var t=v.data(this,"isotope");t?(t.option(e),t._init(n)):v.data(this,"isotope",new v.Isotope(e,this,n))});return this}}(window,jQuery),function(o,n,D,d){"use strict";var r=D("html"),s=D(o),c=D(n),P=D.fancybox=function(){P.open.apply(this,arguments)},a=navigator.userAgent.match(/msie/i),l=null,h=n.createTouch!==d,f=function(t){return t&&t.hasOwnProperty&&t instanceof D},p=function(t){return t&&"string"===D.type(t)},L=function(t){return p(t)&&0<t.indexOf("%")},z=function(t,e){var n=parseInt(t,10)||0;return e&&L(t)&&(n=P.getViewport()[e]/100*n),Math.ceil(n)},W=function(t,e){return z(t,e)+"px"};D.extend(P,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!h,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(a?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:D.noop,beforeLoad:D.noop,afterLoad:D.noop,beforeShow:D.noop,afterShow:D.noop,beforeChange:D.noop,beforeClose:D.noop,afterClose:D.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(h,u){return h&&(D.isPlainObject(u)||(u={}),!1!==P.close(!0))?(D.isArray(h)||(h=f(h)?D(h).get():[h]),D.each(h,function(t,e){var n,i,o,r,s,a,l,c={};"object"===D.type(e)&&(e.nodeType&&(e=D(e)),f(e)?(c={href:e.data("fancybox-href")||e.attr("href"),title:e.data("fancybox-title")||e.attr("title"),isDom:!0,element:e},D.metadata&&D.extend(!0,c,e.metadata())):c=e),n=u.href||c.href||(p(e)?e:null),i=u.title!==d?u.title:c.title||"",!(r=(o=u.content||c.content)?"html":u.type||c.type)&&c.isDom&&((r=e.data("fancybox-type"))||(r=(s=e.prop("class").match(/fancybox\.(\w+)/))?s[1]:null)),p(n)&&(r||(P.isImage(n)?r="image":P.isSWF(n)?r="swf":"#"===n.charAt(0)?r="inline":p(e)&&(r="html",o=e)),"ajax"===r&&(n=(a=n.split(/\s+/,2)).shift(),l=a.shift())),o||("inline"===r?n?o=D(p(n)?n.replace(/.*(?=#[^\s]+$)/,""):n):c.isDom&&(o=e):"html"===r?o=n:r||n||!c.isDom||(r="inline",o=e)),D.extend(c,{href:n,type:r,content:o,title:i,selector:l}),h[t]=c}),P.opts=D.extend(!0,{},P.defaults,u),u.keys!==d&&(P.opts.keys=!!u.keys&&D.extend({},P.defaults.keys,u.keys)),P.group=h,P._start(P.opts.index)):void 0},cancel:function(){var t=P.coming;t&&!1!==P.trigger("onCancel")&&(P.hideLoading(),P.ajaxLoad&&P.ajaxLoad.abort(),P.ajaxLoad=null,P.imgPreload&&(P.imgPreload.onload=P.imgPreload.onerror=null),t.wrap&&t.wrap.stop(!0,!0).trigger("onReset").remove(),P.coming=null,P.current||P._afterZoomOut(t))},close:function(t){P.cancel(),!1!==P.trigger("beforeClose")&&(P.unbindEvents(),P.isActive&&(P.isOpen&&!0!==t?(P.isOpen=P.isOpened=!1,P.isClosing=!0,D(".fancybox-item, .fancybox-nav").remove(),P.wrap.stop(!0,!0).removeClass("fancybox-opened"),P.transitions[P.current.closeMethod]()):(D(".fancybox-wrap").stop(!0).trigger("onReset").remove(),P._afterZoomOut())))},play:function(t){var e=function(){clearTimeout(P.player.timer)},n=function(){e(),P.current&&P.player.isActive&&(P.player.timer=setTimeout(P.next,P.current.playSpeed))},i=function(){e(),c.unbind(".player"),P.player.isActive=!1,P.trigger("onPlayEnd")};!0===t||!P.player.isActive&&!1!==t?P.current&&(P.current.loop||P.current.index<P.group.length-1)&&(P.player.isActive=!0,c.bind({"onCancel.player beforeClose.player":i,"onUpdate.player":n,"beforeLoad.player":e}),n(),P.trigger("onPlayStart")):i()},next:function(t){var e=P.current;e&&(p(t)||(t=e.direction.next),P.jumpto(e.index+1,t,"next"))},prev:function(t){var e=P.current;e&&(p(t)||(t=e.direction.prev),P.jumpto(e.index-1,t,"prev"))},jumpto:function(t,e,n){var i=P.current;i&&(t=z(t),P.direction=e||i.direction[t>=i.index?"next":"prev"],P.router=n||"jumpto",i.loop&&(t<0&&(t=i.group.length+t%i.group.length),t%=i.group.length),i.group[t]!==d&&(P.cancel(),P._start(t)))},reposition:function(t,e){var n,i=P.current,o=i?i.wrap:null;o&&(n=P._getPosition(e),t&&"scroll"===t.type?(delete n.position,o.stop(!0,!0).animate(n,200)):(o.css(n),i.pos=D.extend({},i.dim,n)))},update:function(e){var n=e&&e.type,i=!n||"orientationchange"===n;i&&(clearTimeout(l),l=null),P.isOpen&&!l&&(l=setTimeout(function(){var t=P.current;t&&!P.isClosing&&(P.wrap.removeClass("fancybox-tmp"),(i||"load"===n||"resize"===n&&t.autoResize)&&P._setDimension(),"scroll"===n&&t.canShrink||P.reposition(e),P.trigger("onUpdate"),l=null)},i&&!h?0:300))},toggle:function(t){P.isOpen&&(P.current.fitToView="boolean"===D.type(t)?t:!P.current.fitToView,h&&(P.wrap.removeAttr("style").addClass("fancybox-tmp"),P.trigger("onUpdate")),P.update())},hideLoading:function(){c.unbind(".loading"),D("#fancybox-loading").remove()},showLoading:function(){var t,e;P.hideLoading(),t=D('<div id="fancybox-loading"><div></div></div>').click(P.cancel).appendTo("body"),c.bind("keydown.loading",function(t){27===(t.which||t.keyCode)&&(t.preventDefault(),P.cancel())}),P.defaults.fixed||(e=P.getViewport(),t.css({position:"absolute",top:.5*e.h+e.y,left:.5*e.w+e.x}))},getViewport:function(){var t=P.current&&P.current.locked||!1,e={x:s.scrollLeft(),y:s.scrollTop()};return e.h=t?(e.w=t[0].clientWidth,t[0].clientHeight):(e.w=h&&o.innerWidth?o.innerWidth:s.width(),h&&o.innerHeight?o.innerHeight:s.height()),e},unbindEvents:function(){P.wrap&&f(P.wrap)&&P.wrap.unbind(".fb"),c.unbind(".fb"),s.unbind(".fb")},bindEvents:function(){var e,l=P.current;l&&(s.bind("orientationchange.fb"+(h?"":" resize.fb")+(l.autoCenter&&!l.locked?" scroll.fb":""),P.update),(e=l.keys)&&c.bind("keydown.fb",function(n){var i=n.which||n.keyCode,t=n.target||n.srcElement;return(27!==i||!P.coming)&&void(n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||t&&(t.type||D(t).is("[contenteditable]"))||D.each(e,function(t,e){return 1<l.group.length&&e[i]!==d?(P[t](e[i]),n.preventDefault(),!1):-1<D.inArray(i,e)?(P[t](),n.preventDefault(),!1):void 0}))}),D.fn.mousewheel&&l.mouseWheel&&P.wrap.bind("mousewheel.fb",function(t,e,n,i){for(var o=t.target||null,r=D(o),s=!1;r.length&&!(s||r.is(".fancybox-skin")||r.is(".fancybox-wrap"));)s=(a=r[0])&&!(a.style.overflow&&"hidden"===a.style.overflow)&&(a.clientWidth&&a.scrollWidth>a.clientWidth||a.clientHeight&&a.scrollHeight>a.clientHeight),r=D(r).parent();var a;0===e||s||1<P.group.length&&!l.canShrink&&(0<i||0<n?P.prev(0<i?"down":"left"):(i<0||n<0)&&P.next(i<0?"up":"right"),t.preventDefault())}))},trigger:function(n,t){var e,i=t||P.coming||P.current;if(i){if(D.isFunction(i[n])&&(e=i[n].apply(i,Array.prototype.slice.call(arguments,1))),!1===e)return!1;i.helpers&&D.each(i.helpers,function(t,e){e&&P.helpers[t]&&D.isFunction(P.helpers[t][n])&&P.helpers[t][n](D.extend(!0,{},P.helpers[t].defaults,e),i)}),c.trigger(n)}},isImage:function(t){return p(t)&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(t){return p(t)&&t.match(/\.(swf)((\?|#).*)?$/i)},_start:function(t){var e,n,i,o,r,s={};if(t=z(t),!(e=P.group[t]||null))return!1;if(o=(s=D.extend(!0,{},P.opts,e)).margin,r=s.padding,"number"===D.type(o)&&(s.margin=[o,o,o,o]),"number"===D.type(r)&&(s.padding=[r,r,r,r]),s.modal&&D.extend(!0,s,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),s.autoSize&&(s.autoWidth=s.autoHeight=!0),"auto"===s.width&&(s.autoWidth=!0),"auto"===s.height&&(s.autoHeight=!0),s.group=P.group,s.index=t,P.coming=s,!1!==P.trigger("beforeLoad")){if(i=s.type,n=s.href,!i)return P.coming=null,!(!P.current||!P.router||"jumpto"===P.router)&&(P.current.index=t,P[P.router](P.direction));if(P.isActive=!0,("image"===i||"swf"===i)&&(s.autoHeight=s.autoWidth=!1,s.scrolling="visible"),"image"===i&&(s.aspectRatio=!0),"iframe"===i&&h&&(s.scrolling="scroll"),s.wrap=D(s.tpl.wrap).addClass("fancybox-"+(h?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+s.wrapCSS).appendTo(s.parent||"body"),D.extend(s,{skin:D(".fancybox-skin",s.wrap),outer:D(".fancybox-outer",s.wrap),inner:D(".fancybox-inner",s.wrap)}),D.each(["Top","Right","Bottom","Left"],function(t,e){s.skin.css("padding"+e,W(s.padding[t]))}),P.trigger("onReady"),"inline"===i||"html"===i){if(!s.content||!s.content.length)return P._error("content")}else if(!n)return P._error("href");"image"===i?P._loadImage():"ajax"===i?P._loadAjax():"iframe"===i?P._loadIframe():P._afterLoad()}else P.coming=null},_error:function(t){D.extend(P.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:t,content:P.coming.tpl.error}),P._afterLoad()},_loadImage:function(){var t=P.imgPreload=new Image;t.onload=function(){this.onload=this.onerror=null,P.coming.width=this.width/P.opts.pixelRatio,P.coming.height=this.height/P.opts.pixelRatio,P._afterLoad()},t.onerror=function(){this.onload=this.onerror=null,P._error("image")},t.src=P.coming.href,!0!==t.complete&&P.showLoading()},_loadAjax:function(){var n=P.coming;P.showLoading(),P.ajaxLoad=D.ajax(D.extend({},n.ajax,{url:n.href,error:function(t,e){P.coming&&"abort"!==e?P._error("ajax",t):P.hideLoading()},success:function(t,e){"success"===e&&(n.content=t,P._afterLoad())}}))},_loadIframe:function(){var t=P.coming,e=D(t.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",h?"auto":t.iframe.scrolling).attr("src",t.href);D(t.wrap).bind("onReset",function(){try{D(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}}),t.iframe.preload&&(P.showLoading(),e.one("load",function(){D(this).data("ready",1),h||D(this).bind("load.fb",P.update),D(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),P._afterLoad()})),t.content=e.appendTo(t.inner),t.iframe.preload||P._afterLoad()},_preloadImages:function(){var t,e,n=P.group,i=P.current,o=n.length,r=i.preload?Math.min(i.preload,o-1):0;for(e=1;e<=r;e+=1)"image"===(t=n[(i.index+e)%o]).type&&t.href&&((new Image).src=t.href)},_afterLoad:function(){var t,n,e,i,o,r,s=P.coming,a=P.current,l="fancybox-placeholder";if(P.hideLoading(),s&&!1!==P.isActive){if(!1===P.trigger("afterLoad",s,a))return s.wrap.stop(!0).trigger("onReset").remove(),void(P.coming=null);switch(a&&(P.trigger("beforeChange",a),a.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),P.unbindEvents(),n=(t=s).content,e=s.type,i=s.scrolling,D.extend(P,{wrap:t.wrap,skin:t.skin,outer:t.outer,inner:t.inner,current:t,previous:a}),o=t.href,e){case"inline":case"ajax":case"html":t.selector?n=D("<div>").html(n).find(t.selector):f(n)&&(n.data(l)||n.data(l,D('<div class="'+l+'"></div>').insertAfter(n).hide()),n=n.show().detach(),t.wrap.bind("onReset",function(){D(this).find(n).length&&n.hide().replaceAll(n.data(l)).data(l,!1)}));break;case"image":n=t.tpl.image.replace("{href}",o);break;case"swf":n='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+o+'"></param>',r="",D.each(t.swf,function(t,e){n+='<param name="'+t+'" value="'+e+'"></param>',r+=" "+t+'="'+e+'"'}),n+='<embed src="'+o+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}f(n)&&n.parent().is(t.inner)||t.inner.append(n),P.trigger("beforeShow"),t.inner.css("overflow","yes"===i?"scroll":"no"===i?"hidden":i),P._setDimension(),P.reposition(),P.isOpen=!1,P.coming=null,P.bindEvents(),P.isOpened?a.prevMethod&&P.transitions[a.prevMethod]():D(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(),P.transitions[P.isOpened?t.nextMethod:t.openMethod](),P._preloadImages()}},_setDimension:function(){var t,e,n,i,o,r,s,a,l,c,h,u,d,f,p,m,v,g=P.getViewport(),y=0,w=P.wrap,b=P.skin,x=P.inner,C=P.current,S=C.width,k=C.height,T=C.minWidth,E=C.minHeight,M=C.maxWidth,_=C.maxHeight,$=C.scrolling,A=C.scrollOutside?C.scrollbarWidth:0,O=C.margin,I=z(O[1]+O[3]),j=z(O[0]+O[2]);if(w.add(b).add(x).width("auto").height("auto").removeClass("fancybox-tmp"),n=I+(t=z(b.outerWidth(!0)-b.width())),i=j+(e=z(b.outerHeight(!0)-b.height())),o=L(S)?(g.w-n)*z(S)/100:S,r=L(k)?(g.h-i)*z(k)/100:k,"iframe"===C.type){if(f=C.content,C.autoHeight&&1===f.data("ready"))try{f[0].contentWindow.document.location&&(x.width(o).height(9999),p=f.contents().find("body"),A&&p.css("overflow-x","hidden"),r=p.outerHeight(!0))}catch(t){}}else(C.autoWidth||C.autoHeight)&&(x.addClass("fancybox-tmp"),C.autoWidth||x.width(o),C.autoHeight||x.height(r),C.autoWidth&&(o=x.width()),C.autoHeight&&(r=x.height()),x.removeClass("fancybox-tmp"));if(S=z(o),k=z(r),l=o/r,T=z(L(T)?z(T,"w")-n:T),M=z(L(M)?z(M,"w")-n:M),E=z(L(E)?z(E,"h")-i:E),s=M,a=_=z(L(_)?z(_,"h")-i:_),C.fitToView&&(M=Math.min(g.w-n,M),_=Math.min(g.h-i,_)),u=g.w-I,d=g.h-j,C.aspectRatio?(M<S&&(k=z((S=M)/l)),_<k&&(S=z((k=_)*l)),S<T&&(k=z((S=T)/l)),k<E&&(S=z((k=E)*l))):(S=Math.max(T,Math.min(S,M)),C.autoHeight&&"iframe"!==C.type&&(x.width(S),k=x.height()),k=Math.max(E,Math.min(k,_))),C.fitToView)if(x.width(S).height(k),w.width(S+t),c=w.width(),h=w.height(),C.aspectRatio)for(;(u<c||d<h)&&T<S&&E<k&&!(19<y++);)k=Math.max(E,Math.min(_,k-10)),(S=z(k*l))<T&&(k=z((S=T)/l)),M<S&&(k=z((S=M)/l)),x.width(S).height(k),w.width(S+t),c=w.width(),h=w.height();else S=Math.max(T,Math.min(S,S-(c-u))),k=Math.max(E,Math.min(k,k-(h-d)));A&&"auto"===$&&k<r&&S+t+A<u&&(S+=A),x.width(S).height(k),w.width(S+t),c=w.width(),h=w.height(),m=(u<c||d<h)&&T<S&&E<k,v=C.aspectRatio?S<s&&k<a&&S<o&&k<r:(S<s||k<a)&&(S<o||k<r),D.extend(C,{dim:{width:W(c),height:W(h)},origWidth:o,origHeight:r,canShrink:m,canExpand:v,wPadding:t,hPadding:e,wrapSpace:h-b.outerHeight(!0),skinSpace:b.height()-k}),!f&&C.autoHeight&&E<k&&k<_&&!v&&x.height("auto")},_getPosition:function(t){var e=P.current,n=P.getViewport(),i=e.margin,o=P.wrap.width()+i[1]+i[3],r=P.wrap.height()+i[0]+i[2],s={position:"absolute",top:i[0],left:i[3]};return e.autoCenter&&e.fixed&&!t&&r<=n.h&&o<=n.w?s.position="fixed":e.locked||(s.top+=n.y,s.left+=n.x),s.top=W(Math.max(s.top,s.top+(n.h-r)*e.topRatio)),s.left=W(Math.max(s.left,s.left+(n.w-o)*e.leftRatio)),s},_afterZoomIn:function(){var e=P.current;e&&(P.isOpen=P.isOpened=!0,P.wrap.css("overflow","visible").addClass("fancybox-opened"),P.update(),(e.closeClick||e.nextClick&&1<P.group.length)&&P.inner.css("cursor","pointer").bind("click.fb",function(t){D(t.target).is("a")||D(t.target).parent().is("a")||(t.preventDefault(),P[e.closeClick?"close":"next"]())}),e.closeBtn&&D(e.tpl.closeBtn).appendTo(P.skin).bind("click.fb",function(t){t.preventDefault(),P.close()}),e.arrows&&1<P.group.length&&((e.loop||0<e.index)&&D(e.tpl.prev).appendTo(P.outer).bind("click.fb",P.prev),(e.loop||e.index<P.group.length-1)&&D(e.tpl.next).appendTo(P.outer).bind("click.fb",P.next)),P.trigger("afterShow"),e.loop||e.index!==e.group.length-1?P.opts.autoPlay&&!P.player.isActive&&(P.opts.autoPlay=!1,P.play()):P.play(!1))},_afterZoomOut:function(t){t=t||P.current,D(".fancybox-wrap").trigger("onReset").remove(),D.extend(P,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),P.trigger("afterClose",t)}}),P.transitions={getOrigPosition:function(){var t=P.current,e=t.element,n=t.orig,i={},o=50,r=50,s=t.hPadding,a=t.wPadding,l=P.getViewport();return!n&&t.isDom&&e.is(":visible")&&((n=e.find("img:first")).length||(n=e)),f(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),r=n.outerHeight())):(i.top=l.y+(l.h-r)*t.topRatio,i.left=l.x+(l.w-o)*t.leftRatio),("fixed"===P.wrap.css("position")||t.locked)&&(i.top-=l.y,i.left-=l.x),{top:W(i.top-s*t.topRatio),left:W(i.left-a*t.leftRatio),width:W(o+a),height:W(r+s)}},step:function(t,e){var n,i,o=e.prop,r=P.current,s=r.wrapSpace,a=r.skinSpace;("width"===o||"height"===o)&&(n=e.end===e.start?1:(t-e.start)/(e.end-e.start),P.isClosing&&(n=1-n),i=t-("width"===o?r.wPadding:r.hPadding),P.skin[o](z("width"===o?i:i-s*n)),P.inner[o](z("width"===o?i:i-s*n-a*n)))},zoomIn:function(){var t=P.current,e=t.pos,n=t.openEffect,i="elastic"===n,o=D.extend({opacity:1},e);delete o.position,i?(e=this.getOrigPosition(),t.openOpacity&&(e.opacity=.1)):"fade"===n&&(e.opacity=.1),P.wrap.css(e).animate(o,{duration:"none"===n?0:t.openSpeed,easing:t.openEasing,step:i?this.step:null,complete:P._afterZoomIn})},zoomOut:function(){var t=P.current,e=t.closeEffect,n="elastic"===e,i={opacity:.1};n&&(i=this.getOrigPosition(),t.closeOpacity&&(i.opacity=.1)),P.wrap.animate(i,{duration:"none"===e?0:t.closeSpeed,easing:t.closeEasing,step:n?this.step:null,complete:P._afterZoomOut})},changeIn:function(){var t,e=P.current,n=e.nextEffect,i=e.pos,o={opacity:1},r=P.direction;i.opacity=.1,"elastic"===n&&(o[t="down"===r||"up"===r?"top":"left"]="down"===r||"right"===r?(i[t]=W(z(i[t])-200),"+=200px"):(i[t]=W(z(i[t])+200),"-=200px")),"none"===n?P._afterZoomIn():P.wrap.css(i).animate(o,{duration:e.nextSpeed,easing:e.nextEasing,complete:P._afterZoomIn})},changeOut:function(){var t=P.previous,e=t.prevEffect,n={opacity:.1},i=P.direction;"elastic"===e&&(n["down"===i||"up"===i?"top":"left"]=("up"===i||"left"===i?"-":"+")+"=200px"),t.wrap.animate(n,{duration:"none"===e?0:t.prevSpeed,easing:t.prevEasing,complete:function(){D(this).trigger("onReset").remove()}})}},P.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!h,fixed:!0},overlay:null,fixed:!1,el:D("html"),create:function(t){t=D.extend({},this.defaults,t),this.overlay&&this.close(),this.overlay=D('<div class="fancybox-overlay"></div>').appendTo(P.coming?P.coming.parent:t.parent),this.fixed=!1,t.fixed&&P.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(t){var e=this;t=D.extend({},this.defaults,t),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(t),this.fixed||(s.bind("resize.overlay",D.proxy(this.update,this)),this.update()),t.closeClick&&this.overlay.bind("click.overlay",function(t){return D(t.target).hasClass("fancybox-overlay")?(P.isActive?P.close():e.close(),!1):void 0}),this.overlay.css(t.css).show()},close:function(){var t,e;s.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(D(".fancybox-margin").removeClass("fancybox-margin"),t=s.scrollTop(),e=s.scrollLeft(),this.el.removeClass("fancybox-lock"),s.scrollTop(t).scrollLeft(e)),D(".fancybox-overlay").remove().hide(),D.extend(this,{overlay:null,fixed:!1})},update:function(){var t,e="100%";this.overlay.width(e).height("100%"),a?(t=Math.max(n.documentElement.offsetWidth,n.body.offsetWidth),c.width()>t&&(e=c.width())):c.width()>s.width()&&(e=c.width()),this.overlay.width(e).height(c.height())},onReady:function(t,e){var n=this.overlay;D(".fancybox-overlay").stop(!0,!0),n||this.create(t),t.locked&&this.fixed&&e.fixed&&(n||(this.margin=c.height()>s.height()&&D("html").css("margin-right").replace("px","")),e.locked=this.overlay.append(e.wrap),e.fixed=!1),!0===t.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(t,e){var n,i;e.locked&&(!1!==this.margin&&(D("*").filter(function(){return"fixed"===D(this).css("position")&&!D(this).hasClass("fancybox-overlay")&&!D(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),n=s.scrollTop(),i=s.scrollLeft(),this.el.addClass("fancybox-lock"),s.scrollTop(n).scrollLeft(i)),this.open(t)},onUpdate:function(){this.fixed||this.update()},afterClose:function(t){this.overlay&&!P.coming&&this.overlay.fadeOut(t.speedOut,D.proxy(this.close,this))}},P.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(t){var e,n,i=P.current,o=i.title,r=t.type;if(D.isFunction(o)&&(o=o.call(i.element,i)),p(o)&&""!==D.trim(o)){switch(e=D('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+o+"</div>"),r){case"inside":n=P.skin;break;case"outside":n=P.wrap;break;case"over":n=P.inner;break;default:n=P.skin,e.appendTo("body"),a&&e.width(e.width()),e.wrapInner('<span class="child"></span>'),P.current.margin[2]+=Math.abs(z(e.css("margin-bottom")))}e["top"===t.position?"prependTo":"appendTo"](n)}}},D.fn.fancybox=function(r){var s,a=D(this),l=this.selector||"",t=function(t){var e,n,i=D(this).blur(),o=s;t.ctrlKey||t.altKey||t.shiftKey||t.metaKey||i.is(".fancybox-wrap")||(e=r.groupAttr||"data-fancybox-group",(n=i.attr(e))||(e="rel",n=i.get(0)[e]),n&&""!==n&&"nofollow"!==n&&(o=(i=(i=l.length?D(l):a).filter("["+e+'="'+n+'"]')).index(this)),r.index=o,!1!==P.open(i,r)&&t.preventDefault())};return s=(r=r||{}).index||0,l&&!1!==r.live?c.undelegate(l,"click.fb-start").delegate(l+":not('.fancybox-item, .fancybox-nav')","click.fb-start",t):a.unbind("click.fb-start").bind("click.fb-start",t),this.filter("[data-fancybox-start=1]").trigger("click"),this},c.ready(function(){var t,e,n,i;D.scrollbarWidth===d&&(D.scrollbarWidth=function(){var t=D('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),e=t.children(),n=e.innerWidth()-e.height(99).innerWidth();return t.remove(),n}),D.support.fixedPosition===d&&(D.support.fixedPosition=(n=D('<div style="position:fixed;top:20px;"></div>').appendTo("body"),i=20===n[0].offsetTop||15===n[0].offsetTop,n.remove(),i)),D.extend(P.defaults,{scrollbarWidth:D.scrollbarWidth(),fixed:D.support.fixedPosition,parent:D("body")}),t=D(o).width(),r.addClass("fancybox-lock-test"),e=D(o).width(),r.removeClass("fancybox-lock-test"),D("<style type='text/css'>.fancybox-margin{margin-right:"+(e-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(i){var o=i.fancybox;o.helpers.buttons={defaults:{skipSingle:!1,position:"top",tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'},list:null,buttons:null,beforeLoad:function(t,e){return t.skipSingle&&e.group.length<2?(e.helpers.buttons=!1,void(e.closeBtn=!0)):void(e.margin["bottom"===t.position?2:0]+=30)},onPlayStart:function(){this.buttons&&this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")},onPlayEnd:function(){this.buttons&&this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")},afterShow:function(t,e){var n=this.buttons;n||(this.list=i(t.tpl).addClass(t.position).appendTo("body"),n={prev:this.list.find(".btnPrev").click(o.prev),next:this.list.find(".btnNext").click(o.next),play:this.list.find(".btnPlay").click(o.play),toggle:this.list.find(".btnToggle").click(o.toggle),close:this.list.find(".btnClose").click(o.close)}),0<e.index||e.loop?n.prev.removeClass("btnDisabled"):n.prev.addClass("btnDisabled"),e.loop||e.index<e.group.length-1?(n.next.removeClass("btnDisabled"),n.play.removeClass("btnDisabled")):(n.next.addClass("btnDisabled"),n.play.addClass("btnDisabled")),this.buttons=n,this.onUpdate(t,e)},onUpdate:function(t,e){var n;this.buttons&&(n=this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),e.canShrink?n.addClass("btnToggleOn"):e.canExpand||n.addClass("btnDisabled"))},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons=null}}}(jQuery),function(c){c.fancybox.helpers.thumbs={defaults:{width:50,height:50,position:"bottom",source:function(t){var e;return t.element&&(e=c(t.element).find("img").attr("src")),!e&&"image"===t.type&&t.href&&(e=t.href),e}},wrap:null,list:null,width:0,init:function(t,e){var n,s=this,a=t.width,l=t.height,i=t.source;n="";for(var o=0;o<e.group.length;o++)n+='<li><a style="width:'+a+"px;height:"+l+'px;" href="javascript:jQuery.fancybox.jumpto('+o+');"></a></li>';this.wrap=c('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"),this.list=c("<ul>"+n+"</ul>").appendTo(this.wrap),c.each(e.group,function(r){var t=i(e.group[r]);t&&c("<img />").load(function(){var t,e,n,i=this.width,o=this.height;s.list&&i&&o&&(t=i/a,e=o/l,n=s.list.children().eq(r).find("a"),1<=t&&1<=e&&(o=e<t?(i=Math.floor(i/e),l):(i=a,Math.floor(o/t))),c(this).css({width:i,height:o,top:Math.floor(l/2-o/2),left:Math.floor(a/2-i/2)}),n.width(a).height(l),c(this).hide().appendTo(n).fadeIn(300))}).attr("src",t)}),this.width=this.list.children().eq(0).outerWidth(!0),this.list.width(this.width*(e.group.length+1)).css("left",Math.floor(.5*c(window).width()-(e.index*this.width+.5*this.width)))},beforeLoad:function(t,e){return e.group.length<2?void(e.helpers.thumbs=!1):void(e.margin["top"===t.position?0:2]+=t.height+15)},afterShow:function(t,e){this.list?this.onUpdate(t,e):this.init(t,e),this.list.children().removeClass("active").eq(e.index).addClass("active")},onUpdate:function(t,e){this.list&&this.list.stop(!0).animate({left:Math.floor(.5*c(window).width()-(e.index*this.width+.5*this.width))},150)},beforeClose:function(){this.wrap&&this.wrap.remove(),this.wrap=null,this.list=null,this.width=0}}}(jQuery),function(l){"use strict";var t=l.fancybox,c=function(n,t,e){return e=e||"","object"===l.type(e)&&(e=l.param(e,!0)),l.each(t,function(t,e){n=n.replace("$"+t,e||"")}),e.length&&(n+=(0<n.indexOf("?")?"&":"?")+e),n};t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,e,n){return n.swf.flashVars="playerVars="+l.param(e,!0),"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[1]+"/"+t[3]+t[4]+"&output="+(0<t[4].indexOf("layer=c")?"svembed":"embed")}}},beforeLoad:function(t,e){var n,i,o,r,s=e.href||"",a=!1;for(n in t)if(t.hasOwnProperty(n)&&(i=t[n],o=s.match(i.matcher))){a=i.type,r=l.extend(!0,{},i.params,e[n]||(l.isPlainObject(t[n])?t[n].params:null)),s="function"===l.type(i.url)?i.url.call(this,o,r,e):c(i.url,o,r);break}a&&(e.href=s,e.type=a,e.autoHeight=!1)}}}(jQuery),function(o){function e(){i.each(function(){var t=o(this),e=t.width(),n=t.height(),i=t.data("csEventResize");(e!==i.w||n!==i.h)&&(i.w=e,i.h=n,t.triggerHandler("csEventResize"))}),n=setTimeout(e,250)}var n,i=o([]);o.event.special.csEventResize={setup:function(){var t=o(this);i=i.add(t),t.data("csEventResize",{w:t.width(),h:t.height()}),1===i.length&&e()},teardown:function(){var t=o(this);i=i.not(t),t.removeData("csEventResize"),i.length||clearTimeout(n)}}}(jQuery),function(t){var r,s,a=t.event;r=a.special.debouncedresize={setup:function(){t(this).on("resize",r.handler)},teardown:function(){t(this).off("resize",r.handler)},handler:function(t,e){var n=this,i=arguments,o=function(){t.type="debouncedresize",a.dispatch.apply(n,i)};s&&clearTimeout(s),e?o():s=setTimeout(o,r.threshold)},threshold:150}}(jQuery),function(o){var r,s,a,l=o.event,c={_:0},h=0;r=l.special.throttledresize={setup:function(){o(this).on("resize",r.handler)},teardown:function(){o(this).off("resize",r.handler)},handler:function(t,e){var n=this,i=arguments;s=!0,a||(setInterval(function(){(++h>r.threshold&&s||e)&&(t.type="throttledresize",l.dispatch.apply(n,i),s=!1,h=0),9<h&&(o(c).stop(),a=!1,h=0)},30),a=!0)},threshold:0}}(jQuery),function(i){"use strict";i.fn.emulateTransitionEnd=function(t){var e=!1,n=this;i(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||i(n).trigger(i.support.transition.end)},t),this},i(function(){i.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}(),i.support.transition&&(i.event.special.bsTransitionEnd={bindType:i.support.transition.end,delegateType:i.support.transition.end,handle:function(t){return i(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(v){"use strict";var o=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};o.VERSION="3.2.0",o.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},o.prototype.init=function(t,e,n){this.enabled=!0,this.type=t,this.$element=v(e),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&v(this.options.viewport.selector||this.options.viewport);for(var i=this.options.trigger.split(" "),o=i.length;o--;){var r=i[o];if("click"==r)this.$element.on("click."+this.type,this.options.selector,v.proxy(this.toggle,this));else if("manual"!=r){var s="hover"==r?"mouseenter":"focusin",a="hover"==r?"mouseleave":"focusout";this.$element.on(s+"."+this.type,this.options.selector,v.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,v.proxy(this.leave,this))}}this.options.selector?this._options=v.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.getOptions=function(t){return(t=v.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},o.prototype.getDelegateOptions=function(){var n={},i=this.getDefaults();return this._options&&v.each(this._options,function(t,e){i[t]!=e&&(n[t]=e)}),n},o.prototype.enter=function(t){var e=t instanceof this.constructor?t:v(t.currentTarget).data("bs."+this.type);return e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),v(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",e.options.delay&&e.options.delay.show?void(e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)):e.show()},o.prototype.leave=function(t){var e=t instanceof this.constructor?t:v(t.currentTarget).data("bs."+this.type);return e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),v(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",e.options.delay&&e.options.delay.hide?void(e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)):e.hide()},o.prototype.show=function(){var t=v.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=v.contains(document.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var n=this,i=this.tip(),o=this.getUID(this.type);this.setContent(),i.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&i.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,s=/\s?auto?\s?/i,a=s.test(r);a&&(r=r.replace(s,"")||"top"),i.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);var l=this.getPosition(),c=i[0].offsetWidth,h=i[0].offsetHeight;if(a){var u=r,d=this.$element.parent(),f=this.getPosition(d);r="bottom"==r&&l.top+l.height+h-f.scroll>f.height?"top":"top"==r&&l.top-f.scroll-h<0?"bottom":"right"==r&&l.right+c>f.width?"left":"left"==r&&l.left-c<f.left?"right":r,i.removeClass(u).addClass(r)}var p=this.getCalculatedOffset(r,l,c,h);this.applyPlacement(p,r);var m=function(){n.$element.trigger("shown.bs."+n.type),n.hoverState=null};v.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",m).emulateTransitionEnd(150):m()}},o.prototype.applyPlacement=function(t,e){var n=this.tip(),i=n[0].offsetWidth,o=n[0].offsetHeight,r=parseInt(n.css("margin-top"),10),s=parseInt(n.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(s)&&(s=0),t.top=t.top+r,t.left=t.left+s,v.offset.setOffset(n[0],v.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),n.addClass("in");var a=n[0].offsetWidth,l=n[0].offsetHeight;"top"==e&&l!=o&&(t.top=t.top+o-l);var c=this.getViewportAdjustedDelta(e,t,a,l);c.left?t.left+=c.left:t.top+=c.top;var h=c.left?2*c.left-i+a:2*c.top-o+l,u=c.left?"left":"top",d=c.left?"offsetWidth":"offsetHeight";n.offset(t),this.replaceArrow(h,n[0][d],u)},o.prototype.replaceArrow=function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},o.prototype.hide=function(){function t(){"in"!=e.hoverState&&n.detach(),e.$element.trigger("hidden.bs."+e.type)}var e=this,n=this.tip(),i=v.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(i),i.isDefaultPrevented()?void 0:(n.removeClass("in"),v.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",t).emulateTransitionEnd(150):t(),this.hoverState=null,this)},o.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},o.prototype.hasContent=function(){return this.getTitle()},o.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],n="BODY"==e.tagName;return v.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():null,{scroll:n?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop(),width:n?v(window).width():t.outerWidth(),height:n?v(window).height():t.outerHeight()},n?{top:0,left:0}:t.offset())},o.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},o.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+i;a<s.top?o.top=s.top-a:l>s.top+s.height&&(o.top=s.top+s.height-l)}else{var c=e.left-r,h=e.left+r+n;c<s.left?o.left=s.left-c:h>s.width&&(o.left=s.left+s.width-h)}return o},o.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},o.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},o.prototype.tip=function(){return this.$tip=this.$tip||v(this.options.template)},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},o.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},o.prototype.enable=function(){this.enabled=!0},o.prototype.disable=function(){this.enabled=!1},o.prototype.toggleEnabled=function(){this.enabled=!this.enabled},o.prototype.toggle=function(t){var e=this;t&&((e=v(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),v(t.currentTarget).data("bs."+this.type,e))),e.tip().hasClass("in")?e.leave(e):e.enter(e)},o.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var t=v.fn.tooltip;v.fn.tooltip=function(i){return this.each(function(){var t=v(this),e=t.data("bs.tooltip"),n="object"==typeof i&&i;(e||"destroy"!=i)&&(e||t.data("bs.tooltip",e=new o(this,n)),"string"==typeof i&&e[i]())})},v.fn.tooltip.Constructor=o,v.fn.tooltip.noConflict=function(){return v.fn.tooltip=t,this}}(jQuery),function(o){"use strict";var r=function(t,e){this.init("popover",t,e)};if(!o.fn.tooltip)throw new Error("Popover requires tooltip.js");r.VERSION="3.2.0",r.DEFAULTS=o.extend({},o.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((r.prototype=o.extend({},o.fn.tooltip.Constructor.prototype)).constructor=r).prototype.getDefaults=function(){return r.DEFAULTS},r.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},r.prototype.hasContent=function(){return this.getTitle()||this.getContent()},r.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},r.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},r.prototype.tip=function(){return this.$tip||(this.$tip=o(this.options.template)),this.$tip};var t=o.fn.popover;o.fn.popover=function(i){return this.each(function(){var t=o(this),e=t.data("bs.popover"),n="object"==typeof i&&i;(e||"destroy"!=i)&&(e||t.data("bs.popover",e=new r(this,n)),"string"==typeof i&&e[i]())})},o.fn.popover.Constructor=r,o.fn.popover.noConflict=function(){return o.fn.popover=t,this}}(jQuery),function(s){"use strict";function e(n){return this.each(function(){var t=s(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new i(this)),"string"==typeof n&&e[n]()})}var i=function(t){this.element=s(t)};i.VERSION="3.2.0",i.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),n=t.data("target");if(n||(n=(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var i=e.find(".active:last a")[0],o=s.Event("show.bs.tab",{relatedTarget:i});if(t.trigger(o),!o.isDefaultPrevented()){var r=s(n);this.activate(t.closest("li"),e),this.activate(r,r.parent(),function(){t.trigger({type:"shown.bs.tab",relatedTarget:i})})}}},i.prototype.activate=function(t,e,n){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),n&&n()}var o=e.find("> .active"),r=n&&s.support.transition&&o.hasClass("fade");r?o.one("bsTransitionEnd",i).emulateTransitionEnd(150):i(),o.removeClass("in")};var t=s.fn.tab;s.fn.tab=e,s.fn.tab.Constructor=i,s.fn.tab.noConflict=function(){return s.fn.tab=t,this},s(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e.call(s(this),"show")})}(jQuery),function(r){"use strict";function s(i,o){return this.each(function(){var t=r(this),e=t.data("bs.modal"),n=r.extend({},a.DEFAULTS,t.data(),"object"==typeof i&&i);e||t.data("bs.modal",e=new a(this,n)),"string"==typeof i?e[i](o):n.show&&e.show(o)})}var a=function(t,e){this.options=e,this.$body=r(document.body),this.$element=r(t),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,r.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};a.VERSION="3.2.0",a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},a.prototype.show=function(n){var i=this,t=r.Event("show.bs.modal",{relatedTarget:n});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',r.proxy(this.hide,this)),this.backdrop(function(){var t=r.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),t&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var e=r.Event("shown.bs.modal",{relatedTarget:n});t?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):i.$element.trigger("focus").trigger(e)}))},a.prototype.hide=function(t){t&&t.preventDefault(),t=r.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),r(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),r.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",r.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},a.prototype.enforceFocus=function(){r(document).off("focusin.bs.modal").on("focusin.bs.modal",r.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",r.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},a.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(t){var e=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=r.support.transition&&n;if(this.$backdrop=r('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",r.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(150):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var o=function(){e.removeBackdrop(),t&&t()};r.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(150):o()}else t&&t()},a.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},a.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},a.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},a.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=r.fn.modal;r.fn.modal=s,r.fn.modal.Constructor=a,r.fn.modal.noConflict=function(){return r.fn.modal=t,this},r(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=r(this),n=e.attr("href"),i=r(e.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),o=i.data("bs.modal")?"toggle":r.extend({remote:!/#/.test(n)&&n},i.data(),e.data());e.is("a")&&t.preventDefault(),i.one("show.bs.modal",function(t){t.isDefaultPrevented()||i.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),s.call(i,o,this)})}(jQuery),function(s){"use strict";s.fn.countUp=function(r){return r=s.extend({},{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},r),this.each(function(){var t=s(this),e=t.data("from")||0,n=t.data("to")||0,i=t.data("decimals")||0,o=t.data("duration")||1.5;r.separator=t.data("separator")||r.separator,r.useGrouping=!!t.data("separator"),new countUp(this,e,n,i,o,r).start()})}}(jQuery,window,document),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(y){"use strict";function w(t){return!t.nodeName||-1!==y.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function e(t){return y.isFunction(t)||y.isPlainObject(t)?t:{top:t,left:t}}var b=y.scrollTo=function(t,e,n){return y(window).scrollTo(t,e,n)};return b.defaults={axis:"xy",duration:0,limit:!0},y.fn.scrollTo=function(t,n,v){"object"==typeof n&&(v=n,n=0),"function"==typeof v&&(v={onAfter:v}),"max"===t&&(t=9e9),v=y.extend({},b.defaults,v),n=n||v.duration;var g=v.queue&&1<v.axis.length;return g&&(n/=2),v.offset=e(v.offset),v.over=e(v.over),this.each(function(){function l(t){var e=y.extend({},v,{queue:!0,duration:n,complete:t&&function(){t.call(u,f,v)}});d.animate(p,e)}if(null!==t){var c,h=w(this),u=h?this.contentWindow||window:this,d=y(u),f=t,p={};switch(typeof f){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=e(f);break}f=h?y(f):y(f,u);case"object":if(0===f.length)return;(f.is||f.style)&&(c=(f=y(f)).offset())}var m=y.isFunction(v.offset)&&v.offset(u,f)||v.offset;y.each(v.axis.split(""),function(t,e){var n="x"===e?"Left":"Top",i=n.toLowerCase(),o="scroll"+n,r=d[o](),s=b.max(u,e);if(c)p[o]=c[i]+(h?0:r-d.offset()[i]),v.margin&&(p[o]-=parseInt(f.css("margin"+n),10)||0,p[o]-=parseInt(f.css("border"+n+"Width"),10)||0),p[o]+=m[i]||0,v.over[i]&&(p[o]+=f["x"===e?"width":"height"]()*v.over[i]);else{var a=f[i];p[o]=a.slice&&"%"===a.slice(-1)?parseFloat(a)/100*s:a}v.limit&&/^\d+$/.test(p[o])&&(p[o]=p[o]<=0?0:Math.min(p[o],s)),!t&&1<v.axis.length&&(r===p[o]?p={}:g&&(l(v.onAfterFirst),p={}))}),l(v.onAfter)}})},b.max=function(t,e){var n="x"===e?"Width":"Height",i="scroll"+n;if(!w(t))return t[i]-y(t)[n.toLowerCase()]();var o="client"+n,r=t.ownerDocument||t.document,s=r.documentElement,a=r.body;return Math.max(s[i],a[i])-Math.min(s[o],a[o])},y.Tween.propHooks.scrollLeft=y.Tween.propHooks.scrollTop={get:function(t){return y(t.elem)[t.prop]()},set:function(t){var e=this.get(t);if(t.options.interrupt&&t._last&&t._last!==e)return y(t.elem).stop();var n=Math.round(t.now);e!==n&&(y(t.elem)[t.prop](n),t._last=this.get(t))}},b}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(l){function i(t,e,n){var i=e.hash.slice(1),o=document.getElementById(i)||document.getElementsByName(i)[0];if(o){t&&t.preventDefault();var r=l(n.target);if(!(n.lock&&r.is(":animated")||n.onBefore&&!1===n.onBefore(t,o,r))){if(n.hash){var s=o.id===i?"id":"name",a=l("<a> </a>").attr(s,i).css({position:"absolute",top:l(window).scrollTop(),left:l(window).scrollLeft()});o[s]="",l("body").prepend(a),location.hash=e.hash,a.remove(),o[s]=i}r.scrollTo(o,n).trigger("notify.serialScroll",[o])}}}var t=location.href.replace(/#.*/,""),o=l.localScroll=function(t){l("body").localScroll(t)};return o.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window},l.fn.localScroll=function(e){function n(){return!(!this.href||!this.hash||this.href.replace(this.hash,"")!=t||e.filter&&!l(this).is(e.filter))}return(e=l.extend({},o.defaults,e)).hash&&location.hash&&(e.target&&window.scrollTo(0,0),i(0,location,e)),e.lazy?this.on(e.event,"a,area",function(t){n.call(this)&&i(t,this,e)}):this.find("a,area").filter(n).bind(e.event,function(t){i(t,this,e)}).end().end()},o.hash=function(){},o}),function(){var c,a,l,r,n={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},v=n,h=!1,u=!1,s={x:0,y:0},d=!1,f=document.documentElement,p=[],m=/^Mac/.test(navigator.platform),g={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},y={37:1,38:1,39:1,40:1};function w(){if(!d&&document.body){d=!0;var t=document.body,e=document.documentElement,n=window.innerHeight,i=t.scrollHeight;if(f=0<=document.compatMode.indexOf("CSS")?e:t,c=t,v.keyboardSupport&&P("keydown",k),top!=self)u=!0;else if(Z&&n<i&&(t.offsetHeight<=n||e.offsetHeight<=n)){var o,r=document.createElement("div");r.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+f.scrollHeight+"px",document.body.appendChild(r),l=function(){o||(o=setTimeout(function(){h||(r.style.height="0",r.style.height=f.scrollHeight+"px",o=null)},500))},setTimeout(l,10),P("resize",l);if((a=new Q(l)).observe(t,{attributes:!0,childList:!0,characterData:!1}),f.offsetHeight<=n){var s=document.createElement("div");s.style.clear="both",t.appendChild(s)}}v.fixedBackground||h||(t.style.backgroundAttachment="scroll",e.style.backgroundAttachment="scroll")}}var b=[],x=!1,C=Date.now();function S(u,d,f){var t,e;if(t=0<(t=d)?1:-1,e=0<(e=f)?1:-1,(s.x!==t||s.y!==e)&&(s.x=t,s.y=e,b=[],C=0),1!=v.accelerationMax){var n=Date.now()-C;if(n<v.accelerationDelta){var i=(1+50/n)/2;1<i&&(i=Math.min(i,v.accelerationMax),d*=i,f*=i)}C=Date.now()}if(b.push({x:d,y:f,lastX:d<0?.99:-.99,lastY:f<0?.99:-.99,start:Date.now()}),!x){var o=B(),p=u===o||u===document.body;null==u.$scrollBehavior&&function(t){var e=T(t);if(null==_[e]){var n=getComputedStyle(t,"")["scroll-behavior"];_[e]="smooth"==n}return _[e]}(u)&&(u.$scrollBehavior=u.style.scrollBehavior,u.style.scrollBehavior="auto");var m=function(t){for(var e=Date.now(),n=0,i=0,o=0;o<b.length;o++){var r=b[o],s=e-r.start,a=s>=v.animationTime,l=a?1:s/v.animationTime;v.pulseAlgorithm&&(l=q(l));var c=r.x*l-r.lastX>>0,h=r.y*l-r.lastY>>0;n+=c,i+=h,r.lastX+=c,r.lastY+=h,a&&(b.splice(o,1),o--)}p?window.scrollBy(n,i):(n&&(u.scrollLeft+=n),i&&(u.scrollTop+=i)),d||f||(b=[]),b.length?V(m,u,1e3/v.frameRate+1):(x=!1,null!=u.$scrollBehavior&&(u.style.scrollBehavior=u.$scrollBehavior,u.$scrollBehavior=null))};V(m,u,0),x=!0}}function t(t){d||w();var e=t.target;if(t.defaultPrevented||t.ctrlKey)return!0;if(z(c,"embed")||z(e,"embed")&&/\.pdf/i.test(e.src)||z(c,"object")||e.shadowRoot)return!0;var n=-t.wheelDeltaX||t.deltaX||0,i=-t.wheelDeltaY||t.deltaY||0;m&&(t.wheelDeltaX&&W(t.wheelDeltaX,120)&&(n=t.wheelDeltaX/Math.abs(t.wheelDeltaX)*-120),t.wheelDeltaY&&W(t.wheelDeltaY,120)&&(i=t.wheelDeltaY/Math.abs(t.wheelDeltaY)*-120)),n||i||(i=-t.wheelDelta||0),1===t.deltaMode&&(n*=40,i*=40);var o=O(e);return o?!!function(t){if(!t)return;p.length||(p=[t,t,t]);t=Math.abs(t),p.push(t),p.shift(),clearTimeout(r),r=setTimeout(function(){try{localStorage.SS_deltaBuffer=p.join(",")}catch(t){}},1e3);var e=120<t&&R(t);return!R(120)&&!R(100)&&!e}(i)||(1.2<Math.abs(n)&&(n*=v.stepSize/120),1.2<Math.abs(i)&&(i*=v.stepSize/120),S(o,n,i),t.preventDefault(),void $()):!u||!Y||(Object.defineProperty(t,"target",{value:window.frameElement}),parent.wheel(t))}function k(t){var e=t.target,n=t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&t.keyCode!==g.spacebar;document.body.contains(c)||(c=document.activeElement);var i=/^(button|submit|radio|checkbox|file|color|image)$/i;if(t.defaultPrevented||/^(textarea|select|embed|object)$/i.test(e.nodeName)||z(e,"input")&&!i.test(e.type)||z(c,"video")||function(t){var e=t.target,n=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(n=e.classList&&e.classList.contains("html5-video-controls"))break}while(e=e.parentNode);return n}(t)||e.isContentEditable||n)return!0;if((z(e,"button")||z(e,"input")&&i.test(e.type))&&t.keyCode===g.spacebar)return!0;if(z(e,"input")&&"radio"==e.type&&y[t.keyCode])return!0;var o=0,r=0,s=O(c);if(!s)return!u||!Y||parent.keydown(t);var a=s.clientHeight;switch(s==document.body&&(a=window.innerHeight),t.keyCode){case g.up:r=-v.arrowScroll;break;case g.down:r=v.arrowScroll;break;case g.spacebar:r=-(t.shiftKey?1:-1)*a*.9;break;case g.pageup:r=.9*-a;break;case g.pagedown:r=.9*a;break;case g.home:s==document.body&&document.scrollingElement&&(s=document.scrollingElement),r=-s.scrollTop;break;case g.end:var l=s.scrollHeight-s.scrollTop-a;r=0<l?l+10:0;break;case g.left:o=-v.arrowScroll;break;case g.right:o=v.arrowScroll;break;default:return!0}S(s,o,r),t.preventDefault(),$()}function e(t){c=t.target}var i,o,T=(i=0,function(t){return t.uniqueID||(t.uniqueID=i++)}),E={},M={},_={};function $(){clearTimeout(o),o=setInterval(function(){E=M=_={}},1e3)}function A(t,e,n){for(var i=n?E:M,o=t.length;o--;)i[T(t[o])]=e;return e}function O(t){var e=[],n=document.body,i=f.scrollHeight;do{var o=(!1?E:M)[T(t)];if(o)return A(e,o);if(e.push(t),i===t.scrollHeight){var r=j(f)&&j(n)||D(f);if(u&&I(f)||!u&&r)return A(e,B())}else if(I(t)&&D(t))return A(e,t)}while(t=t.parentElement)}function I(t){return t.clientHeight+10<t.scrollHeight}function j(t){return"hidden"!==getComputedStyle(t,"").getPropertyValue("overflow-y")}function D(t){var e=getComputedStyle(t,"").getPropertyValue("overflow-y");return"scroll"===e||"auto"===e}function P(t,e,n){window.addEventListener(t,e,n||!1)}function L(t,e,n){window.removeEventListener(t,e,n||!1)}function z(t,e){return t&&(t.nodeName||"").toLowerCase()===e.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{p=localStorage.SS_deltaBuffer.split(",")}catch(t){}function W(t,e){return Math.floor(t/e)==t/e}function R(t){return W(p[0],t)&&W(p[1],t)&&W(p[2],t)}var H,V=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t,e,n){window.setTimeout(t,n||1e3/60)},Q=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,B=(H=document.scrollingElement,function(){if(!H){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var e=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),H=document.body.scrollTop!=e?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return H});function F(t){var e;return((t*=v.pulseScale)<1?t-(1-Math.exp(-t)):(t-=1,(e=Math.exp(-1))+(1-Math.exp(-t))*(1-e)))*v.pulseNormalize}function q(t){return 1<=t?1:t<=0?0:(1==v.pulseNormalize&&(v.pulseNormalize/=F(1)),F(t))}var U=window.navigator.userAgent,N=/Edge/.test(U),Y=/chrome/i.test(U)&&!N,X=/safari/i.test(U)&&!N,K=/mobile/i.test(U),G=/Windows NT 6.1/i.test(U)&&/rv:11/i.test(U),Z=X&&(/Version\/8/i.test(U)||/Version\/9/i.test(U)),J=(Y||X||G)&&!K,tt=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){tt=!0}}))}catch(t){}var et=!!tt&&{passive:!1},nt="onwheel"in document.createElement("div")?"wheel":"mousewheel";function it(t){for(var e in t)n.hasOwnProperty(e)&&(v[e]=t[e])}nt&&J&&(P(nt,t,et),P("mousedown",e),P("load",w)),it.destroy=function(){a&&a.disconnect(),L(nt,t),L("mousedown",e),L("keydown",k),L("resize",l),L("load",w)},window.SmoothScrollOptions&&it(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return it}):"object"==typeof exports?module.exports=it:window.SmoothScroll=it}(),function(e,t,n,i){"use strict";e.exists=function(t){return 0<e(t).length},e.jqexists=function(t){return void 0!==e.fn[t]}}(jQuery,window,document);
;(function($, window, document, undefined){
'use strict';
var ROUTE=window.ROUTE||{};
var $cs_body, $cs_html, $cs_main, $cs_masthead, $cs_window, $cs_document,
cs_is_device, cs_is_sticky, cs_is_transparent, cs_is_small, cs_has_admin_bar,
cs_is_blank, cs_no_mobile_anim, cs_sticky_height, cs_admin_bar_height, cs_header_height, cs_header_top;
ROUTE.staticVariables=function(){
$cs_html=$('html');
$cs_body=$('body');
$cs_masthead=$('#masthead');
$cs_main=$('#main');
$cs_window=$(window);
$cs_document=$(document);
cs_is_device=(navigator.userAgent.toLowerCase().match(/(android|webos|blackberry|ipod|iphone|ipad|opera mini|iemobile|windows phone|windows mobile)/)) ? true:false;
cs_is_sticky=(parseInt(cs_ajax.sticky)) ? true:false;
cs_is_transparent=($cs_body.hasClass('cs-header-transparent')) ? true:false;
cs_is_blank=($cs_body.hasClass('cs-blank')) ? true:false;
cs_has_admin_bar=($cs_body.hasClass('admin-bar')) ? true:false;
cs_no_mobile_anim=($cs_body.hasClass('cs-no-mobile-animations')) ? true:false;
cs_sticky_height=(parseInt(cs_ajax.header)) ? parseInt(cs_ajax.header):50;
cs_admin_bar_height=(cs_has_admin_bar) ? 32:0;
cs_header_height=($cs_masthead) ? $cs_masthead.outerHeight():0;
cs_header_top=($cs_masthead&&$cs_masthead.offset()) ? $cs_masthead.offset().top:0;
};
ROUTE.dynamicVariables=function(){
cs_is_small=(window.innerWidth < parseInt(cs_ajax.viewport)) ? true:false;
};
ROUTE.stickyHeader=function(){
if(cs_is_sticky&&!cs_is_device&&!cs_is_transparent&&!cs_is_blank){
var _header_top=(cs_has_admin_bar) ? parseInt(cs_header_top-cs_admin_bar_height):cs_header_top,
_header_height,
_scroll_top;
$cs_window.scroll(function(){
if(!cs_is_small){
_header_height=cs_header_height;
_scroll_top=$(this).scrollTop();
if(_scroll_top > _header_top){
$cs_masthead.trigger('close-modals').addClass('is-sticky');
$cs_main.css('padding-top', _header_height);
}else{
$cs_masthead.removeClass('is-sticky');
$cs_main.removeAttr('style');
}
if(_scroll_top >(_header_height + _header_top)){
$cs_masthead.addClass('is-compact');
}else{
$cs_masthead.removeClass('is-compact');
}}
});
}};
ROUTE.transparentHeader=function(){
if(cs_is_sticky&&cs_is_transparent){
var $logo=$('#site-logo'),
$logo1x=$logo.find('.cs-logo'),
$logo2x=$logo.find('.cs-logo2x'),
$logo1x_src=$logo1x.attr('src'),
$logo2x_src=$logo2x.attr('src'),
$logo1x_alt=$logo1x.data('alternative')||$logo1x_src,
$logo2x_alt=$logo2x.data('alternative')||$logo2x_src,
$page_header=$('#page-header'),
$container=$page_header.find('.container'),
_header_height,
_scroll_top;
$cs_masthead.addClass('is-sticky');
$cs_window.scroll(function(){
if(!cs_is_small){
_header_height=parseInt($page_header.outerHeight() / 2);
_scroll_top=$(this).scrollTop();
$container.css('opacity', 1-(_scroll_top/_header_height));
if(_scroll_top > 0){
$cs_body.removeClass('is-transparent');
$cs_masthead.addClass('is-sticky is-compact');
$logo1x.attr('src', $logo1x_alt);
$logo2x.attr('src', $logo2x_alt);
}else{
$cs_body.addClass('is-transparent');
$cs_masthead.removeClass('is-compact');
$logo1x.attr('src', $logo1x_src);
$logo2x.attr('src', $logo2x_src);
}}else{
$logo1x.attr('src', $logo1x_src);
$logo2x.attr('src', $logo2x_src);
}});
}};
ROUTE.fixSticky=function(){
if(cs_is_sticky&&cs_is_small){
$cs_masthead.removeClass('is-sticky is-compact');
$cs_main.removeAttr('style');
if(cs_is_transparent){
$cs_body.addClass('is-transparent cs-is-small');
$cs_window.scroll();
}}else{
$cs_body.removeClass('cs-is-small');
if(cs_is_transparent){
$cs_window.scroll();
}}
};
ROUTE.mainNavigation=function(){
$('.main-navigation').superfish({
delay: 200,
animation: {
opacity: 'show',
},
speed: 'fast',
speedOut: 'fast',
cssArrows: false,
});
};
ROUTE.mobileNavigation=function(){
$('#cs-mobile-icon').on('click', function(e){
e.preventDefault();
$(this).toggleClass('cs-collapse');
$('#navigation-mobile').slideToggle(500, 'easeInOutExpo');
});
$('#navigation-mobile li:has(ul) > .cs-dropdown-plus').on('click', function(e){
e.preventDefault();
$(this).toggleClass('cs-times');
$(this).parent().find('> ul').slideToggle(500, 'easeInOutExpo');
});
$('#navigation-mobile li:has(ul) > a').on('click', function(e){
if($(this).attr('href')==='#'){
e.preventDefault();
var $parent=$(this).parent();
$parent.find('> .cs-dropdown-plus').toggleClass('cs-times');
$parent.find('> ul').slideToggle(500, 'easeInOutExpo');
}});
};
ROUTE.topModals=function(){
$('.cs-top-modal-hover').each(function(){
var $this=$(this),
$content=$this.find('.cs-modal-content-hover');
$this.mouseover(function(){
$content.stop().fadeIn('fast');
}).mouseout(function(){
$content.stop().fadeOut('fast');
});
});
$('.cs-top-modal').each(function(){
var $this=$(this),
$open=$this.find('.cs-open-modal'),
$content=$this.find('.cs-modal-content');
$open.on('click', function(e){
e.preventDefault();
e.stopPropagation();
if($content.hasClass('cs-opened')){
$content.removeClass('cs-opened').fadeOut('fast');
}else{
$content.trigger('close-modals').addClass('cs-opened').fadeIn('fast');
$content.find('input').focus();
}});
$content.on('click', function(event){
if(event.stopPropagation){
event.stopPropagation();
}else if(window.event){
window.event.cancelBubble=true;
}});
});
$(document.body).on('click close-modals', function (){
$('.cs-modal-content').removeClass('cs-opened').fadeOut('fast');
});
};
ROUTE.animationElements=function(){
if(cs_no_mobile_anim&&cs_is_device){
return;
}
$('.cs-animation').waypoint(function (){
var $this=$(this),
_delay=$this.data('delay'),
_duration=$this.data('duration');
if(_delay){
$this.css('animation-delay', _delay + 's');
}
if(_duration){
$this.css('animation-duration', _duration + 's');
}
$this.addClass('cs-start-animation');
}, {
offset: '95%',
triggerOnce: true
});
};
ROUTE.parallaxSection=function(){
if(!cs_is_device){
$('section.parallax').each(function(){
var $this=$(this),
speedFactor=$this.data('parallax-speed')||0.4;
$this.parallax('50%', speedFactor);
});
}};
ROUTE.heightSection=function(){
$('.cs-full-height').each(function(){
var $this=$(this),
winHeight=$cs_window.outerHeight(),
elHeight=$this.outerHeight(),
maxHeight=parseInt($this.data('full-height-rate'))||100;
$this.css('min-height',(maxHeight * winHeight) / 100);
});
};
ROUTE.videoSection=function(){
$('.video-section-wrap').each(function(){
var $this=$(this),
$video=$this.find('video');
if(!$video.length){ return; }
var $wrap=$this.find('.video-wrap'),
_outW=$this.outerWidth(),
_outH=$this.outerHeight();
$wrap.css({ width: _outW, height: _outH });
$video.mediaelementplayer();
if(cs_is_device){
$wrap.remove();
}});
};
ROUTE.videoSectionResize=function(){
$('.video-section-wrap').each(function(){
var $this=$(this),
$video=$this.find('video, iframe');
if(!$video.length){ return; }
var $wrap=$this.find('.video-wrap'),
_orgW=1280,
_orgH=720,
_outW=$this.outerWidth(),
_outH=$this.outerHeight(),
_radio=_orgW / _orgH;
if(_orgH < _outH){
_orgH=_outH;
_orgW=Math.ceil(_orgH * _radio);
}
if(_orgW < _outW){
_orgW=_outW;
_orgH=Math.ceil(_orgW / _radio);
}
var _left=(_outW <  _orgW) ? Math.ceil(( _outW - _orgW) / 2):0,
_top=Math.ceil(( _outH - _orgH) / 2);
$wrap.css({ width: _outW, height: _outH });
$video.css({ width: _orgW, height: _orgH, marginLeft: _left, marginTop: _top }).addClass('cs-video-loaded');
});
};
ROUTE.videoOnLoad=function(){
$('.video-onload').each(function(){
var $this=$(this),
$data=$this.data(),
$poster=($data.poster) ? ' poster="'+ $data.poster +'"':'',
videoStr='';
videoStr='<video width="1920" height="1080" autoplay muted loop'+ $poster +'>';
if($data.mp4){  videoStr +='<source type="video/mp4" src="'+ $data.mp4 +'"></source>';   }
if($data.ogv){  videoStr +='<source type="video/ogv" src="'+ $data.ogv +'"></source>';   }
if($data.webm){  videoStr +='<source type="video/webm" src="'+ $data.webm +'"></source>'; }
videoStr +='</video>';
$(videoStr).insertAfter($this);
$this.remove();
ROUTE.videoSection();
ROUTE.videoSectionResize();
});
};
ROUTE.isotopeInitalize=function(){
$('.isotope-container').each(function(){
var $this=$(this),
$iso=$this.find('.isotope-loop'),
$iso_loader=$this.find('.isotope-loading'),
$iso_wrapper=$this.find('.isotope-wrapper'),
$iso_filter=$this.find('.isotope-filter a'),
$iso_item=$this.find('.isotope-item');
$iso_loader.show();
$iso.imagesLoaded(function(){
setTimeout(function(){
$iso_loader.hide();
$iso_wrapper.addClass('isotope-loaded');
$iso_item.waypoint(function (){
$(this).addClass('in');
},{
offset: "95%",
triggerOnce: false
});
}, 300);
ROUTE.portfolioWidthHeightFix($iso_item);
$iso.isotope({
animationEngine: 'best-available',
layoutMode: $iso.data('layout')||'masonry',
});
$cs_window.on('debouncedresize', function(){
setTimeout(function(){
ROUTE.portfolioWidthHeightFix($iso_item);
$iso.isotope('reLayout');
$cs_window.resize();
}, 300);
});
});
$iso_filter.on('click', function(e){
e.preventDefault();
$(this).addClass('active').siblings().removeClass('active');
$iso_item.addClass('in');
var selector=$(this).attr('data-filter');
$iso.isotope({ filter: selector });
});
$('blockquote.twitter-tweet', $iso).bind("csEventResize", function(){
$iso.isotope('reLayout');
});
});
};
ROUTE.ajaxPagination=function(){
$('.ajax-load-more').each(function(){
var $this=$(this),
$container=$this.parent().parent().find('.isotope-loop'),
token=$this.data('token'),
settings=window['cs_load_more_'+token],
is_isotope=parseInt(settings.isotope),
paging=1,
flood=false,
ajax_data;
$this.bind('click', function(){
if(flood===false){
paging++;
flood=true;
ajax_data=$.extend({}, { action: "ajax-pagination", paged: paging }, settings);
$.ajax({
type: "POST",
url: cs_ajax.ajaxurl,
data: ajax_data,
dataType: "html",
beforeSend: function(){
$this.addClass('more-loading');
},
success: function(html){
var content=$(html).css('opacity', 0);
if(is_isotope){
$container.append(content);
}else{
$(content).insertBefore($this.parent());
}
$container.imagesLoaded(function(){
if($.jqexists('mediaelementplayer')){
$('video, audio').mediaelementplayer();
}
if(is_isotope){
$container.isotope('appended', content);
$container.isotope('reLayout');
$('blockquote.twitter-tweet').bind("csEventResize", function(){
$container.isotope('reLayout');
});
ROUTE.portfolioWidthHeightFix($container);
}else{
content.animate({'opacity': 1}, 250, 'easeInOutExpo');
ROUTE.portfolioWidthHeightFix($container);
}
$this.removeClass('more-loading');
if(parseInt(settings.max_pages)==paging){ $this.hide(); }});
flood=false;
}});
}
return false;
});
});
};
ROUTE.ajaxPortfolio=function(){
$('.portfolio-model-ajax').each(function(){
var $this=$(this),
$loader=$this.find('.cs-loader'),
$container=$this.find('.ajax-portfolio-container'),
$content=$this.find('.ajax-content'),
_current=0;
$this.on('click', '.item-ajax-load', function(e){
e.preventDefault();
var $project=$(this),
_project_id=$project.data('post-id'),
_scrollTop=parseInt($this.offset().top) - 130;
if(_current==_project_id){ return; }
if($container.hasClass('project-opened')){
$container.removeClass('project-opened');
}
$.ajax({
type: "POST",
url: cs_ajax.ajaxurl,
data: {
action: 'ajax-portfolio',
id: _project_id
},
dataType: "html",
beforeSend: function(){
$loader.show();
$('body,html').animate({ scrollTop: _scrollTop }, 500, 'easeInOutExpo');
},
success: function(html){
var _obj=$content.html(html);
_obj.imagesLoaded(function(){
$loader.hide();
$container.addClass('project-opened');
_current=_project_id;
});
if($.jqexists('mediaelementplayer')){
$('video, audio').mediaelementplayer();
}
$content.trigger('ajax-portfolio-loaded');
}});
});
$this.on('click', '.ajax-close', function(e){
e.preventDefault();
$container.removeAttr('data-post-id').removeClass('project-opened');
setTimeout(function(){ $content.html(''); }, 1000);
_current=0;
});
});
};
ROUTE.portfolioWidthHeightFix=function(container){
$('.portfolio-item-info', container).each(function(){
var $this=$(this),
$elem=$this.find('.portfolio-item-hover'),
el_width=$this.outerWidth(true),
el_height=$this.outerHeight(true);
$elem.css({"height": el_height, "width": el_width});
});
};
ROUTE.postLove=function(){
$cs_body.on('click', '.entry-love-it', function(e){
e.preventDefault();
var $this=$(this),
$count=$this.find('.love-count'),
_post_id=$this.data('post-id');
if($this.hasClass('entry-loved')){
alert(cs_ajax.loved);
return false;
}else{
$count.text(parseInt($count.text()) + 1);
$this.addClass('entry-loved');
}
$.ajax({
type: 'POST',
url: cs_ajax.ajaxurl,
data:({ action: 'post-love', id: _post_id, love_it_nonce: cs_ajax.nonce }),
});
});
};
ROUTE.onePage=function(){
var _offset=(!cs_is_small&&cs_has_admin_bar) ? cs_admin_bar_height:0;
$('.cs-start').each(function(){
$(this).on('click', function(e){
e.preventDefault();
var _target=$(this).data('target')||'page';
$.scrollTo('#'+_target , 1000, { offset:-_offset, easing:'easeInOutExpo' });
});
});
$('.cs-scrollto').each(function(){
$(this).on('click', function(e){
e.preventDefault();
$.scrollTo($(this).attr('href') , 1000, { offset:-_offset, easing:'easeInOutExpo' });
});
});
if($cs_body.hasClass('page-template-page-one-page')){
var _header_height=parseInt(cs_header_height + cs_header_top),
$navigation=$('#site-nav, #navigation-mobile, #cs-fixed-nav'),
$fixed_nav=$('#cs-fixed-nav'),
_waypoint_offset=_header_height,
page_ids=$.makeArray(),
header_before=$.exists('#header-before'),
count=0;
$fixed_nav.css('margin-top', - Math.floor($fixed_nav.outerHeight(true) / 2));
$('#site-logo a').on('click', function(e){
e.preventDefault();
$.scrollTo(0, 1000, { easing:'easeInOutExpo', onAfter:function(){
window.location.hash='';
}});
});
$navigation.localScroll({
target: 'body',
queue: true,
duration: 1000,
hash: true,
easing: 'easeInOutExpo',
onBefore:function(e, anchor, $target){
if(cs_is_small){
this.offset=0;
}else if($(anchor).offset().top > _header_height||header_before){
this.offset=-(cs_sticky_height + cs_admin_bar_height);
}else{
this.offset=-_header_height;
}
_waypoint_offset=-this.offset;
},
});
$('.cs-section').each(function(){
$(this).waypoint(function(direction){
var $this=$(this),
$id=$this.attr('id');
if(direction=='down'){
count++;
page_ids[count]=$id;
}else{
count--;
}
$navigation.find('li').removeClass('current-menu-item');
$navigation.find('a[href="#'+ page_ids[count] +'"]').parent().addClass('current-menu-item');
}, {
offset:(_waypoint_offset + 100)
});
});
}};
ROUTE.smoothLink=function(){
$('.cs-smooth-link').each(function(){
$(this).on('click', function(e){
e.preventDefault();
var $this=$(this),
$target=$($this.attr('href'));
if($target){
var sticky_height=(cs_is_sticky) ? cs_sticky_height:0;
var top=sticky_height + cs_admin_bar_height;
$.scrollTo($target, 1000, { offset: -top, easing: 'easeInOutExpo' });
}});
});
};
ROUTE.smoothScrollLink=function(){
$('.cs-scroll-link').each(function(){
$(this).on('click', function(e){
e.preventDefault();
var $this=$(this),
$classes=$this.attr('class').split(' '),
$target=$('.'+$classes[$classes.length-1].replace('cs-scroll-target-', ''));
if($target){
var sticky_height=(cs_is_sticky) ? cs_sticky_height:0;
var top=sticky_height + cs_admin_bar_height;
$.scrollTo($target, 1000, { offset: -top, easing: 'easeInOutExpo' });
}});
});
};
ROUTE.goTop=function(){
$('#cs-top').each(function(){
var $this=$(this),
innerHeight=parseInt($cs_window.innerHeight() / 2);
$this.on('click', function(e){
e.preventDefault();
$.scrollTo(0 , 1000, { easing:'easeInOutExpo' });
});
$cs_window.scroll(function(){
if($cs_window.scrollTop() > innerHeight){
$this.addClass('in');
}else{
$this.removeClass('in');
}});
});
$('.cs-scroll').each(function(){
$(this).on('click', function(e){
e.preventDefault();
var target=$(this).data('target')||'page';
$.scrollTo('#'+target , 1000, { easing:'easeInOutExpo' });
});
});
};
ROUTE.fancybox=function(){
$('.gallery-fancybox a, .fancybox-thumb').fancybox({
beforeLoad: function(){
if(!this.title.length){
this.title=this.element.find('img').attr('alt');
}},
arrows: true,
padding: 7,
helpers: {
media: {},
buttons: {},
thumbs:{
width: 60,
height: 50,
source: function(item){
var href, thumb;
thumb=$(item.element).data('thumbnail');
if(item.element){
href=$(item.element).find('img').attr('src');
}
if(!href&&item.type==='image'&&item.href){
href=item.href;
}
if(thumb){
href=thumb;
}
return href;
}}
}});
$('.fancybox').fancybox({
beforeLoad: function(){
if(!this.title.length){
this.title=this.element.find('img').attr('alt');
}},
padding: 7,
helpers: {
media: {}}
});
};
ROUTE.csTab=function(){
$(document).on('click.bs.tab.data-api', '.bs-tab-nav a', function (e){
e.preventDefault();
$(this).tab('show');
$(document).trigger('gmap-resize');
$(document).trigger('debouncedresize');
});
};
ROUTE.csAccordion=function(){
$('.cs-accordions').each(function(){
var $this=$(this),
$wrap=$this.find('.cs-accordion');
$wrap.each(function(){
var $accordion=$(this),
$content=$accordion.find('.cs-accordion-content');
$accordion.on('click', '.cs-accordion-title:not(.selected)', function(e){
e.preventDefault();
$wrap.find('.cs-accordion-title').removeClass('selected');
$(this).addClass('selected');
$this.find('.cs-accordion-content:visible').slideUp(250, 'easeInOutExpo');
$content.slideDown(250, 'easeInOutExpo');
$(document).trigger('gmap-resize');
});
});
});
};
ROUTE.csToggle=function(){
$('.cs-toggle').each(function(){
var $this=$(this),
$content=$this.find('.cs-toggle-content');
$this.on('click', '.cs-toggle-title', function(e){
e.preventDefault();
$content.slideToggle(250, 'easeInOutExpo');
$(this).toggleClass('selected');
$(document).trigger('gmap-resize');
});
});
};
ROUTE.csAlert=function(){
$('.cs-alert-dismissable').each(function(){
var $this=$(this);
$this.on('click', '.cs-alert-close', function(e){
e.preventDefault();
$this.slideUp(250, 'easeInOutExpo');
});
});
};
ROUTE.csProgressBar=function(){
$('.cs-progress').each(function(){
var $this=$(this),
$bar=$this.find('.cs-progress-bar'),
$number=$this.find('.cs-progress-number span'),
_type=$bar.data('type'),
_group=$bar.data('group'),
_percentage=parseInt($bar.data('percentage')),
_data;
if(_type=='horizontal'){
_data={ width: _percentage + '%', countNum: _percentage };}else{
_data={ height: _percentage + '%', countNum: _percentage };}
if(_group&&_type=='vertical'){
}else if(_group){
_data={ width: '100%', countNum: _percentage };}
$this.waypoint(function (){
$bar.animate(_data, {
duration: 1500,
easing:'easeInOutExpo',
step: function(){
if(this.countNum===undefined){
this.countNum=0;
}
$number.text(Math.round(this.countNum));
},
complete: function(){
$number.text(this.countNum);
}});
}, {
offset: '100%',
triggerOnce: false
});
});
};
ROUTE.csPieChart=function(){
$('.cs-piechart').each(function(){
var $this=$(this),
$counter=$this.find('.cs-piecount');
$this.waypoint(function (){
$this.easyPieChart({
barColor: '#555',
trackColor: '#f1f1f1',
scaleColor: '#fff',
scaleLength: 0,
lineCap: 'round',
lineWidth: 2,
size: 120,
rotate: 0,
animate: {
duration: 1300,
enabled: true
},
onStart: function(from, to){
$counter.countUp({
useEasing: false
});
},
});
}, {
offset: '100%',
triggerOnce: false
});
});
};
ROUTE.csProgressIcon=function(){
$('.cs-progress-icon').each(function(){
var $this=$(this),
$icon=$this.find('.count'),
_count=parseInt($this.data('count')),
_duration=parseInt($this.data('duration'))||50,
_color=$this.data('active-color')||false;
$this.waypoint(function (){
$icon.each(function(i){
if(i < _count){
setTimeout(function(){
if(_color){
$($icon[i]).css({'color': _color});
}else{
$($icon[i]).addClass('active');
}}, (i + 1) * _duration);
}});
}, {
offset: '100%',
triggerOnce: false
});
});
};
ROUTE.csCount=function(){
$('.cs-count').waypoint(function (){
$(this).countUp();
}, {
offset: '100%',
triggerOnce: true
});
};
ROUTE.csTestimonial=function(){
if($.jqexists('royalSlider')){
$('.testimonialSlider').royalSlider({
autoHeight: true,
arrowsNav: false,
fadeinLoadedSlide: true,
controlNavigation: 'bullets',
imageScaleMode: 'none',
imageAlignCenter: false,
loop: true,
loopRewind: true,
usePreloader: false,
transitionSpeed: 1000,
easeInOut: 'easeInOutExpo',
easeOut: 'easeInOutExpo',
autoPlay: {
enabled: true,
pauseOnHover: true,
delay: 5000,
}});
}};
ROUTE.csFaq=function(){
$('.cs-faq').each(function(){
var $faq=$(this),
$faq_filter=$faq.find('.cs-faq-filter a'),
$faq_iso=$faq.find('.cs-faq-isotope');
$faq_iso.isotope({
containerClass: '',
hiddenClass: 'cs-faq-hidden',
animationEngine: 'best-available',
itemClass: 'cs-faq-item',
transformsEnabled: false,
resizesContainer: false,
hiddenStyle: {},
visibleStyle: {},
containerStyle: {},
});
$faq_filter.on('click', function(e){
e.preventDefault();
var $filter=$(this);
$filter.addClass('active').siblings().removeClass('active');
$faq_iso.isotope({ filter: $filter.attr('data-filter') });
});
});
};
ROUTE.csGmap=function(){
$('.cs-gmap').each(function(){
var $this=$(this),
token=$this.data('token'),
gmap=window[token];
var marker;
var map;
var infowindow;
var iterator=0;
var mapLocation=new google.maps.LatLng(parseFloat(gmap.lat), parseFloat(gmap.lng));
var mapOptions={
center: mapLocation,
zoom: parseInt(gmap.zoom),
zoomControl: parseInt(gmap.zoom_control),
mapTypeId: gmap.mapTypeId||'roadmap',
scrollwheel: gmap.scrollwheel||true,
panControl: true,
mapTypeControl: true,
streetViewControl: true,
};
map=new google.maps.Map(document.getElementById(token), mapOptions);
if(gmap.markers!==undefined&&gmap.markers.length){
google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
for (var i=0; i < gmap.markers.length; i++){
setTimeout(addMarker, i * 500);
}});
}else if(gmap.markers===undefined&&gmap.icon){
new google.maps.Marker({
map: map,
position: new google.maps.LatLng(parseFloat(gmap.lat), parseFloat(gmap.lng)),
animation: google.maps.Animation.DROP,
icon: gmap.icon,
});
}
function addMarker(){
marker=new google.maps.Marker({
map: map,
position: new google.maps.LatLng(parseFloat(gmap.markers[iterator].lat), parseFloat(gmap.markers[iterator].lng)),
animation: google.maps.Animation.DROP,
icon: gmap.icon,
});
infowindow=new google.maps.InfoWindow({
maxWidth: 300
});
google.maps.event.addListener(marker, 'click', (function(marker, i){
return function(){
map.setCenter(marker.getPosition());
infowindow.setContent(gmap.markers[i].content);
infowindow.open(map, marker);
};})(marker, iterator));
iterator++;
}
google.maps.event.addDomListener(window, "resize", function(){
var center=map.getCenter();
google.maps.event.trigger(map, "resize");
map.setCenter(center);
});
$(document).bind('gmap-resize', function (){
var center=map.getCenter();
google.maps.event.trigger(map, "resize");
map.setCenter(center);
});
});
};
ROUTE.bsModal=function(){
$('.bs-modal').each(function(){
var $modal=$(this);
$($modal.data('selector')).on('click', function(e){
e.preventDefault();
$modal.modal();
});
});
function adjustModalMaxHeightAndPosition(){
$('.modal-center').each(function(){
var $this=$(this);
if($this.hasClass('in')===false){
$this.show();
}
var contentHeight=$cs_window.height() - 60;
var headerHeight=$this.find('.modal-header').outerHeight()||2;
var footerHeight=$this.find('.modal-footer').outerHeight()||2;
$this.find('.modal-content').css({
'max-height': function (){
return contentHeight;
}});
$this.find('.modal-body').css({
'max-height': function (){
return contentHeight -(headerHeight + footerHeight);
}});
$this.find('.modal-dialog').addClass('modal-dialog-center').css({
'margin-top': function (){
return -($(this).outerHeight() / 2);
},
'margin-left': function (){
return -($(this).outerWidth() / 2);
}});
if($this.hasClass('in')===false){
$this.hide();
}});
}
if($cs_window.height() >=320){
$cs_window.resize(adjustModalMaxHeightAndPosition).trigger("resize");
}};
ROUTE.bsToolTip=function(){
$('[data-toggle=tooltip]').tooltip();
$('.cs-tooltip-trigger').each(function(){
var $this=$(this);
$($this.data('selector')).tooltip({
title: $this.html(),
placement: $this.data('placement'),
trigger: $this.data('trigger'),
html: true,
container: 'body',
});
});
};
ROUTE.bsPopover=function(){
$('[data-toggle=popover]').popover();
$('.cs-popover-trigger').each(function(){
var $this=$(this);
$($this.data('selector')).popover({
placement: $this.data('placement'),
trigger: $this.data('trigger'),
title: $this.data('title'),
content: $this.html(),
html: true,
container: 'body',
});
});
};
ROUTE.smoothScroll=function(){
if(parseInt(cs_ajax.no_smoothscroll)){
SmoothScroll.destroy();
}};
ROUTE.youtubePlayer=function(){
var $videos=$('.cs-youtube-video');
var defaults={
autoplay: 1,
loop: 1,
muted: 1,
playerVars: {
controls: 0,
showinfo: 0,
branding: 0,
rel: 0,
autohide: 1,
modestbranding: 1,
iv_load_policy: 3
},
events: null
};
var YTQueue=[];
var loadYouTubeIframeAPI=false;
if($videos.length > 0&&!loadYouTubeIframeAPI){
$.getScript('//www.youtube.com/iframe_api', function(data, textStatus, jqxhr){
if(textStatus==='success'){
window.onYouTubeIframeAPIReady=function(){
for(var key in YTQueue){
if(YTQueue.hasOwnProperty(key)){
var fnc=YTQueue[key];
if(typeof fnc=="function"){
fnc();
}}
}};}});
loadYouTubeIframeAPI=true;
}
$videos.each(function(){
var base=this;
base.$this=$(this);
defaults.events={
onReady: function(event){
if(base.options.autoplay){
event.target.playVideo();
}
if(base.options.muted){
event.target.mute();
}},
onStateChange: function(event){
if(event.data===YT.PlayerState.ENDED&&base.options.loop){
base.player.seekTo(base.options.start);
}}
};
base.options=$.extend({}, defaults, base.$this.data());
base.checkEndTime=function(){
var stateInterval=setInterval(function(){
if(base.player.getCurrentTime() >=base.options.end){
if(base.options.start&&base.options.loop){
base.player.seekTo(base.options.start);
}else{
base.player.stopVideo();
clearInterval(stateInterval);
}}
}, 100);
};
base.YTPlayer=function(){
base.player=new YT.Player(base, base.options);
};
if(typeof YT==='undefined'||(YT.hasOwnProperty('loaded')&&!YT.loaded)){
YTQueue.push(function(){
base.YTPlayer();
});
}else{
base.YTPlayer();
}});
};
$(document).ready(function(){
ROUTE.staticVariables();
ROUTE.dynamicVariables();
ROUTE.stickyHeader();
ROUTE.transparentHeader();
ROUTE.mainNavigation();
ROUTE.mobileNavigation();
ROUTE.topModals();
ROUTE.animationElements();
ROUTE.parallaxSection();
ROUTE.videoSection();
ROUTE.heightSection();
ROUTE.videoSectionResize();
ROUTE.isotopeInitalize();
ROUTE.ajaxPagination();
ROUTE.ajaxPortfolio();
ROUTE.postLove();
ROUTE.smoothLink();
ROUTE.smoothScrollLink();
ROUTE.goTop();
ROUTE.fancybox();
ROUTE.csTab();
ROUTE.csAccordion();
ROUTE.csToggle();
ROUTE.csAlert();
ROUTE.csProgressBar();
ROUTE.csPieChart();
ROUTE.csProgressIcon();
ROUTE.csCount();
ROUTE.csTestimonial();
ROUTE.csFaq();
ROUTE.bsModal();
ROUTE.bsToolTip();
ROUTE.bsPopover();
ROUTE.smoothScroll();
ROUTE.onePage();
ROUTE.youtubePlayer();
});
$(window).resize(function(){
ROUTE.staticVariables();
ROUTE.dynamicVariables();
ROUTE.fixSticky();
ROUTE.heightSection();
ROUTE.videoSectionResize();
});
$(window).scroll(function(){
});
$(window).load(function(){
ROUTE.csGmap();
ROUTE.videoOnLoad();
});
})(jQuery, window, document);