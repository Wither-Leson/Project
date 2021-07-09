
$(document).ready(function(){

	$("[name=news]").click(function(){
		$("#msg-all").html(
		`
					  <div class="msg"><p>2021-05-28 <br> 【重大】 GASH遊戲點數詐欺案件帳號鎖定</p></div>
					  <div class="msg"><p>2021-05-15 <br> 【重大】 2021/5/15因應三級防疫相關服務影響公告</p></div>
					  <div class="msg"><p>2021-03-12 <br> 【重大】 （20：24 已排除）GASH儲值/購點系統功能異常公告</p></div>
					  `
					  );
		$(".f-bod").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","37px").css("border-bottom-color","white");
	});
	$("[name=updata]").click(function(){
		$("#msg-all").html(
		`
					  <div class="msg"><p>2021-05-05 <br> 【更新】 beanfun! Webstart更新公告</p></div>
					  <div class="msg"><p>2020-01-08 <br> 【更新】 進階認證語音電話異常說明公告 (10:00已排除)</p></div>
					  <div class="msg"><p>2019-01-17 <br> 【更新】 【beanfun! 遊戲】01/21維護更新作業-說明公告</p></div>
					  `
					  );
		$(".f-bod").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","37px").css("height","37px").css("border-bottom-color","white");
	});
	
	$("[name=events]").click(function(){
	$("#msg-all").html(
	`
					  <div class="msg"><p>2021-07-05 <br> 【活動】 6月簽到簿得獎名單出爐囉~</p></div>
					  <div class="msg"><p>2021-07-01 <br> 【活動】 7月簽到簿好禮『暑』不完</p></div>
					  <div class="msg"><p>2021-06-23 <br> 【活動】 beanfun!楓好康限時活動開跑<椅子大楓吹></p></div>
					  `
					  );
		$(".f-bod").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","37px").css("height","37px").css("border-bottom-color","white");
	});
	$("[name=fix]").click(function(){
	$("#msg-all").html(
	`
					  <div class="msg"><p>2021-06-23 <br> 【維護】 《beanfun!楓好康-椅子大楓吹》虛寶領取異常</p></div>
					  <div class="msg"><p>2021-06-23 <br> 【維護】 《椅子大楓吹》青蛙滑水道椅子-虛寶補發</p></div>
					  <div class="msg"><p>2021-05-13 <br> 【維護】 2021/5/13 台電分區停電服務影響公告(已修復)</p></div>
	`
	);
		$(".f-bod").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","37px").css("height","37px").css("border-bottom-color","white");
	});

	$(window).on( 'load scroll', function() {
		if ( $(this).scrollTop() <= 20 ) {
			$('#header').removeClass("fixed");
		} else {
			$('#header').addClass("fixed");
		}
	});

});
/*==================switch======================*/
	function pagt(){ 
            window.scroll(0,0); 
    } ;
/*=================pagescroll===================*/	
