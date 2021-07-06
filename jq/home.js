
	$(document).ready(function(){

	// dynamic Web
	$("[name=news]").click(function(){
		$("#msg-all").html(`<div class="msg"><p></p></div>
					  <div class="msg"><p></p></div>
					  <div class="msg"><p></p></div>`);
	});
	$("[name=updata]").click(function(){
		$("#msg-all").html(`<div class="msg"><p></p></div>
					  <div class="msg"><p></p></div>
					  <div class="msg"><p></p></div>`);
	});
	$("[name=events]").click(function(){
	$("#msg-all").html(`<div class="msg">
<p>2021-07-05 【活動】 6月簽到簿得獎名單出爐囉~</p></div>
					  <div class="msg"><p></p></div>
					  <div class="msg"><p></p></div>`);
	});
	$("[name=fix]").click(function(){
	$("#msg-all").html(`<div class="msg"><p></p></div>
    <div class="msg"><p></p></div>
    <div class="msg"><p></p></div>`);
	});

});
/*==================switch*/