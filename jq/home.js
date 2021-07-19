
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
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
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
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
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
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
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
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
	});

	$(window).on( 'load scroll', function() {
		if ( $(this).scrollTop() <= 20 ) {
			$('#header').removeClass("fixed");
		} else {
			$('#header').addClass("fixed");
		}
	});
	
	/*==========================index===================================*/
	$("[name=mi]").click(function(){
		$(".st_ms").html(
		`
					  <div><p>2021-05-28 【重大】 GASH遊戲點數詐欺案件帳號鎖定</p></div>
				<div><p>2021-05-15 【重大】 2021/5/15因應三級防疫相關服務影響公告</p></div>
				<div><p>2021-03-12 【重大】 （20：24 已排除）GASH儲值/購點系統功能異常公告</p></div>
				<div><p>2020-12-11 【重大】 beanfun! 遊戲閒置帳號刪除說明通知</p></div>
				<div><p>2020-10-11 【重大】 （12：55 已排除）進階認證語音電話異常說明公告</p></div>
				<div><p>2020-10-10 【重大】 （13：25 已排除）儲值系統功能異常公告說明</p></div>
				<div><p>2020-08-11 【重大】 （21:30已排除）beanfun! 官網儲值購點功能異常說明</p></div>
				<div><p>2020-02-18 【重大】 （02：50 已排除）儲值系統功能異常公告</p></div>
				<div><p>2020-02-18 【重大】 儲值系統功能異常公告說明</p></div>
				<div><p>2020-01-14 【重大】 如何避免IE 10以下無法開啟beanfun! 遊戲官網</p></div>
				<div><p>2019-11-26 【重大】 (11/27 17:20更新) 12/4中華電信維護期間遊戲連線提醒公告</p></div>
				<div><p>2019-11-13 【重大】 （週年慶-金橘賞）活動網頁09:00 ~ 10:00 維護公告</p></div>
				<div><p>2019-10-06 【重大】 儲值系統功能異常排除公告(2019/10/06 21:08排除)</p></div>
				<div><p>2019-10-06 【重大】 儲值系統功能異常說明公告</p></div>
				<div><p>2019-09-16 【重大】 (9/18 20:45更新) 帳號保護機制通知暨[PlaySafe數位安全卡]服務下架說明</p></div>
				<div><p>2019-08-31 【重大】 儲值系統功能異常排除公告</p></div>
				<div><p>2019-08-31 【重大】 儲值系統功能異常說明公告</p></div>
				<div><p>2019-08-16 【重大】 beanfun! 遊戲Plugin元件更版通知</p></div>
				<div><p>2019-04-16 【重大】 【如何使用ＩＥ９及ＩＥ１０瀏覽器啟動遊戲】</p></div>
				<div><p>2019-04-10 【重大】 beanfun! 遊戲客服專線電話更改囉！</p></div>
					  `
					  );
		$("#a,#b,#c,#d").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
	});
	$("[name=up]").click(function(){
		$(".st_ms").html(
		`
					  <div><p>2021-05-05 【更新】 beanfun! Webstart更新公告</p></div>
					  <div><p>2020-01-08 【更新】 進階認證語音電話異常說明公告 (10:00已排除)</p></div>
					  <div><p>2019-01-17 【更新】 【beanfun! 遊戲】01/21維護更新作業-說明公告</p></div>
					  `
					  );
		$("#a,#b,#c,#d").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
	});
	
	$("[name=ev]").click(function(){
	$(".st_ms").html(
	`
					  <div><p>2021-07-05 【活動】 6月簽到簿得獎名單出爐囉~</p></div>
					  <div><p>2021-07-01 【活動】 7月簽到簿好禮『暑』不完</p></div>
					  <div><p>2021-06-23 【活動】 beanfun!楓好康限時活動開跑<椅子大楓吹></p></div>
					  `
					  );
		$("#a,#b,#c,#d").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
	});
	$("[name=fi]").click(function(){
	$(".st_ms").html(
	`
					  <div><p>2021-06-23 【維護】 《beanfun!楓好康-椅子大楓吹》虛寶領取異常</p></div>
					  <div><p>2021-06-23 【維護】 《椅子大楓吹》青蛙滑水道椅子-虛寶補發</p></div>
					  <div><p>2021-05-13 【維護】 2021/5/13 台電分區停電服務影響公告(已修復)</p></div>
	`
	);
		$("#a,#b,#c,#d").css("backgroundColor","").css("color","").css("height","25px").css("border-bottom-color","rgba(243,203,159,1.00)");
		$(this).css("backgroundColor","rgb(255 255 255)").css("color","#ff8200").css("height","30px").css("border-bottom-color","white");
	});
	/*===============================News=====================================*/
	$("#G1").click(function(){
		$("[name=G-out]").html(
		`
			  <ul><div class="dd_me">
			  <li id="GA1"><div><p>台灣客服-電子郵件</p></div></li>
			  <li id="GA2"><div><p>台灣客服-線上客服</p></div></li>
			  <li id="GA3"><div><p>香港客服-電子郵件</p></div></li>
			  <div></ul>
				<hr>
			  <div class="GA-out"></div>
			  `
		)
		$("#GA1").click(function(){
		$(".GA-out").html(
		`
		<a href="https://service.antspw.com/MSGBoardUI/MSGBoard/GASH">
		<img src="img/sev/GA1.jpg">
		</a>
		<p>
		<br>親愛的玩家，您們好：<br>

		為快速處理您的問題，請您點擊下方"問題回報"圖示後，<br>
		務必於頁面內完整填寫所需欄位資訊，非常感謝您的配合呦。<br>
		服務時間：每天上午9點~晚上10點<br><br>

		客服專員收到您的來信後，會於七個工作天內<br>
		(不含國定例假日以及災害停班)回信到您的電子信箱，感謝您的耐心等候。<br><br>

		防範詐騙宣導：詐騙手法層出不窮，請您提高警覺，<br>
		一旦查覺有問題馬上撥反詐騙專線165查詢。
		</p>
		`
		)
		});
		$("#GA2").click(function(){
		$(".GA-out").html(
		`
		<a href="https://im.antspw.com/phplive.php?d=3&onpage=livechatimagelink">
		<img src="img/sev/GA2.png">
		</a>
		<p>
		請點擊上方"GASH客服在線"圖示。<br><br>

		請稍候我們將立即有客服專員為您服務，謝謝您的耐心等候。<br><br>

		親愛的玩家，您們好：建議透過IE瀏覽器使用本服務。另提醒您，<br>
		當GASH線上客服繁忙時，系統會將您導至電子郵件頁面，歡迎透過電子郵件與我們聯繫，感謝您的使用。<br>

		服務時間：每天上午9點~晚上10點服務說明： 提供訂單交易紀錄的查詢服務，<br>
		如有其他相關問題也歡迎透過電子郵件與我們聯繫，感謝您的使用。<br><br>

		查詢GASH點數卡訂單交易紀錄：請提供GASH點數卡的卡片序號(Serial Number)，<br>
		請勿提供GASH點數卡儲值密碼。<br>
		查詢電信金融小額付費訂單交易紀錄：請提供GASH交易訂單編號(VP或GPS訂單編號)，<br>
		該組訂單編號可向電信金融客服中心諮詢。為確保使用者權益，<br>
		請勿於線上客服內容提及使用者信用卡或金融卡或手機號碼資訊，謝謝您的配合。<br>
		防範詐騙宣導：詐騙手法層出不窮，請您提供警覺，一旦查覺有問題馬上撥反詐騙專線165查詢。<br>
		</p>
		
		`
		)
		});
		$("#GA3").click(function(){
		$(".GA-out").html(
		`
		<img src="img/sev/GA3.png">
		<p><br><br>

		透過線上系統提交您的查詢，後續將統一由台灣客服團隊協助。<br><br>

		請注意，我們將就您提供的電郵回覆，若您提供的電郵信箱不再使用或不正確，<br>
		客服人員將無法回覆喔！<br>
		
		</p>
		
		`
		)
		});
	});
	
	
	$("#G2").click(function(){
		$("[name=G-out]").html(
		`
			  <ul><div class="dd_me">
			  <li id="GB1"><div><p>帳號證明/通訊歷程申請表格</p></div></li>
			  <li id="GB2"><div><p>樂豆點遭異常消耗查詢申請表</p></div></li>
			  <li id="GB3"><div><p>專案事件歷程詢表</p></div></li>
			  <li id="GB4"><div><p>異常接收加值道具/<br>點數鎖定扣除點數申請書</p></div></li>
			  <li id="GB5"><div><p>異常持有道具同意書</p></div></li>
			  <div></ul>
				<hr>
			  <div class="GA-out">
				</div>
		`
		)
		$("#GB1").click(function(){
		$(".GA-out").html(
		`
		<p>
			帳號證明/通訊歷程申請表格<br><br>
			※填妥後務必簽名+蓋章並掛號寄回遊戲橘子處理。<br>
			※處理時間：7天。<br>
			※寄件地址：台北市內湖區瑞湖街111號 郵遞區號：11494 收件人：遊戲橘子客服中心收<br>
			※未滿20歲之會員須提供法定代理人證件<br>
			</p><br>
			<a class="GB-DL" href="https://tw.hicdn.beanfun.com/csrat/bf_newgama.doc?20210203">表單下載點</a>
		`
		)
		});
		$("#GB2").click(function(){
		$(".GA-out").html(
		`
		<p>
			樂豆點遭異常消耗查詢申請表<br><br>
			※填妥後務必簽名+蓋章並掛號寄回遊戲橘子處理。<br>
			※處理時間：7天。<br>
			※寄件地址：台北市內湖區瑞湖街111號 郵遞區號：11494 收件人：遊戲橘子客服中心收<br>
			※未滿20歲之會員須提供法定代理人證件<br>
			※歷程保留時間：2個月
			</p><br>
			<a class="GB-DL" href="https://tw.hicdn.beanfun.com/csrat/item-mix1.doc?20210203">表單下載點</a>
		`
		)
		});
		$("#GB3").click(function(){
		$(".GA-out").html(
		`
		<p>
			專案事件歷程查詢表<br><br>
			※填妥後務必簽名+蓋章並掛號寄回遊戲橘子處理。<br>
			※處理時間：7天。<br>
			※寄件地址：台北市內湖區瑞湖街111號 郵遞區號：11494 收件人：遊戲橘子客服中心收<br>
			※未滿20歲之會員須提供法定代理人證件<br>
			※專案處理時間依據各遊戲不同，請【按此查詢】
			</p><br>
			<a class="GB-DL" href="https://tw.hicdn.beanfun.com/csrat/Lineage1.doc?20210203">表單下載點</a>
		`
		)
		});
		$("#GB4").click(function(){
		$(".GA-out").html(
		`
		<p>
			異常接收加值道具/點數鎖定扣除點數申請書<br><br>
			※填妥後務必簽名+蓋章並掛號寄回遊戲橘子處理。<br>
			※處理時間：7-14個工作天。<br>
			※寄件地址：台北市內湖區瑞湖街111號 郵遞區號：11494 收件人：遊戲橘子客服中心收<br>
			※此表格僅提供2009/04/01前遭鎖定會員下載。<br>
			</p><br>
			<a class="GB-DL" href="https://tw.hicdn.beanfun.com/csrat/item-gash.doc?20210203">表單下載點</a>
		`
		)
		});
		$("#GB5").click(function(){
		$(".GA-out").html(
		`
		<p>
			異常持有道具處理同意書<br><br>
			※填妥後務必簽名+蓋章，於帳號鎖定7日內，並用數位身分驗證方式上傳表格。<br>
			※處理時間：1-3個工作天。<br>
			※請附上
			進階認證資料影本：<br>
			身分證正反面or手機近兩個月內帳單or市話近兩個月內帳單(未滿20歲需附上法代身份證件)+使用者證件：<br>
			身分證or駕照or戶口名簿or護照<br>
			※未滿20歲之會員須提供法定代理人證件
			</p><br>
			<a class="GB-DL" href="https://tw.hicdn.beanfun.com/csrat/Lineage2.doc?20210203">表單下載點</a>
		`
		)
		});
	});
	
	
	$("#G3").click(function(){
		$("[name=G-out]").html(
		`
		<div style="padding:50px;">
		<h1 style="text-align: center;">《防詐騙宣導公告》</h1><hr>
		<p>
		親愛的玩家，您好：<br>
		遊戲橘子客服中心陸續接獲玩家反應遭詐騙問題。<br>
		在此特別提醒您：<br>
		當收到不明來源或無法辨認是否為官方網頁連結、遊戲信件訊息、手機簡訊、即時通訊訊息、E-MAIL..等， <br>
		請不要依指示點選、操作或提供任何您的個人資料。<br><br>

		並注意！官方不會以電話、簡訊通知作為辦理活動退費之方式，或要求您進行任何轉帳、匯款或劃撥費用之動作！<br>
		請您多加小心預防詐騙。<br><br>

		也請玩家切勿任意點選、進入可疑網址，依照指示進行購買遊戲點數或是當您要輸入會員帳號、密碼登入網頁前，<br>
		再次確認網址真假，以免受騙上當！<br><br>

		在此提醒所有會員，任何遊戲點數相關商品，請至官方認可的實體及線上通路購買，使用來路不明的遊戲點數，<br>
		均有可能造成您的帳號因不正常交易而遭到鎖定，請留意提防詐欺行為。<hr>
		</p>
		<h1 style="text-align: center;">反詐騙諮詢</h1><hr>
		<div style="    padding: 5px;
    background-color: lavender;
    border-radius: 15px;">
		<div style="background-Color: #008c8c;
    border-radius: 15px;
    display: flex;padding: 15px;
    flex-direction: column;
    align-items: center;">
		<p>反詐騙專線：165</p>
		<p>內政部警政署反詐騙諮詢專線：0800-018-110</p>
		<p>全國各地報案電話：110</p>
		</p></div></div>
		</div>
		`
		)
	});
	
	
	$("#G4").click(function(){
		$("[name=G-out]").html(
		`<div style="padding:30px;">
		<h1>數位身份驗證服務
</h1><hr>
		<p>當您需要使用此數位身份驗證服務時，請上傳帳號進階認證資訊的持有者相關個人資料過來即可。<br>
請依照您個人所選擇的進階認證方式來提供相關證明文件。<br>
請注意，上傳時請務必確認下列證明文件所需資料填寫是否齊全。<br>
數位身份驗證服務服務時間為：每日 09：00 ~ 22：00 <含國定例假日><br></p>
		<hr><h1>可使用圖檔
</h1><hr>
		<p>	
此服務受理證件正本及影本【拍照】或【掃描】。<br>
圖檔格式僅限.JPG、.JPEG、.PNG、.TIF上傳圖檔每張大小限制為1MB。<br><br>


如提供之圖檔不符合下述可使用資料規則，將由系統判定為無效案件逕行作廢恕不另行通知。<br></p>
		<hr><h1>遊戲橘子帳號進階認證可使用資料

</h1><hr>
		<p>進階認證採用身分證認證時：<br>
新版身分證正反面：姓名、出生年月日、統一編號、父母姓名欄、住址、空白證號(背面右下角)… 等資料應清晰可辨識。<br>
進階認證採用電話認證時：<br><br>

若使用手機/市話認證，請提供該市話號碼或是手機門號近二個月內其中一份電信帳單（非便利商店繳款之感熱紙收據）正本拍照或掃描後，將電信帳單上傳<br>
若欲變更手機/市話驗證號碼，請附上原號碼電信帳單 (提供近二個月內之帳單乙份，非便利商店繳款之感熱紙收據)及申請人有效證件乙份正本拍照或掃描後上傳。<br></p>
		<hr><h1>GASH帳號可用證件

</h1><hr>
		<p>新版身分證正反面：姓名、出生年月日、統一編號、父母姓名欄、住址、空白證號(背面右下角)… 等資料應清晰可辨識。<br>
駕照正反面：駕照自2013/7/1起免換證，故駕照有效日期於2013/6/1(含2013/6/1當日)之後均可受理，<br>
在此之前到期者均需換新照及背面之"印製號碼"是否完整清楚，始可受理。<br>
護照：需附護照親筆簽名內頁並留意護照有效期限。<br><br>

戶口名簿：須上傳整份戶口名簿，且戶籍地址及戶號為清晰可辨識，<br>
若已遷出則此份資料無效且無法受理，若會員有戶員資料外流之疑慮，<br>
可使用粗體筆將其它戶員的身份證字號保留２碼（英文數字各一），<br>
其餘數字塗黑，請留意不可使用打叉、畫線、畫圈圈的方式塗改，且除身分證字號以外的其它資料仍須保留。<br>
 ．若您的姓名或身分證字號異動過，須檢附戶政單位證明文件；並請會員您前來親訪變更，以確保帳號資料安全。<br>
 </p>
		<hr><h1>註明資料
</h1><hr>
		<p> 	
1.聯絡電話 (手機門號優先；室內電話請註明區碼，譬如：台北02)。<br><br>


 	2.帳號 (請註明要處理"何種"遊戲的帳號服務，例如：天堂 帳號 XXXX1234)。<br><br>

 	3.需協助處理之問題描述(例如：變更進階認證資料)。<br>
	</p><br>
	<img src="img/Sev/01.gif"><br><hr>
		<h1>注意事項
</h1><hr>
		<p>
1.	遊戲橘子帳號在您完成申請的同時就無法再進行任何更改了唷！<br><br>
2.	依據合約同意書內容，傳真證明文件內容須與遊戲橘子會員資料相符，<br>
會員傳真前可先至會員中心查詢您的會員資料是否正確。<br>
</p><br>
<a class="GB-DL" href="https://service.antspw.com/MSGBoardUI/PCForm">數位身分驗證服務申請</a>
</div>
		`
		)
	});
	
	
	$("#G6").click(function(){
		$("[name=G-out]").html(
		`
		<div style="padding:30px;">
		<div class="cover"><img src="img/Sev/01.png"></div>
		<p>
		<br><br>
		遊戲橘子客服專線<br>
		電話：(02)2192-6100 <請按1>  服務時間：24 hr 全年無休</p>
		<hr><br>
		<a style="background-color:#ffcc99;padding:10px;border-radius:10px;" href="https://service.antspw.com/MSGBoardUI/PCForm">Email服務</a>
		</div>
		`
		)
	});
	
	
});
/*==================switch======================*/

$(document).ready(function(){
         var random_bg=Math.floor(Math.random()*4+1);
         var bg='url(img/bg/bg'+random_bg+'.jpg)';
         $(".bgimg").css("background-image",bg);
});
/*===================randombg==================*/

	function pagt(){ 
            window.scroll(0,0); 
    } ;
/*=================pagescroll===================*/	