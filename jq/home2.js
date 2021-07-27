$(function () {

  //圓點
  //向左
  //向右
  var $container = $('#container')
  var $list = $('#list')
  var $points = $('#pointsDiv>span')
  var $prev = $('#prev')
  var $next = $('#next')
  
  
   //一頁的寬度
    // 翻頁的持續時間
	// 單元移動的間隔時間
	//當前下標
	// 標識是否正在翻頁(默認沒有)
  var PAGE_WIDTH = 600
  var TIME = 200
  var ITEM_TIME = 20 
  var imgCount = $points.length
  var index = 0 
  var moving = false 


  // 1. 點擊向右(左)的圖標, 平滑切換到下(上)一頁
   //點擊向右的圖標，切換到下一頁，list向左移動600px,即(相對於container)left：-600px
    //點擊向左的圖標，切換到上一頁，list向右移動600px,即(相對於container)left：+600px
  $next.click(function () {
    nextPage(true)
  })
  $prev.click(function () {
    nextPage(false)
  })


  // 3. 每隔3s自動滑動到下一頁
  var intervalId = setInterval(function () {
    nextPage(true)
  }, 3000)

  // 4. 當鼠標進入圖片區域時, 自動切換停止, 當鼠標離開后,又開始自動切換
    // 清除定時器
  $container.hover(function () {
    clearInterval(intervalId)
  }, function () {
    intervalId = setInterval(function () {
      nextPage(true)
    }, 3000)
  })

  // 6. 點擊圓點圖標切換到對應的頁
  //每個圓點都加一個點擊監聽事件
    // 目標頁的下標
    // 只有當點擊的不是當前頁的圓點時才翻頁
  $points.click(function () {
    var targetIndex = $(this).index()
    if(targetIndex!=index) {
      nextPage(targetIndex)
    }
  })

  /**
   * 平滑翻頁
   * @param next
   * true: 下一頁
   * false: 上一頁
   * 數值: 指定下標頁
   */
   
   
    /*
      總的時間: TIME=400
      單元移動的間隔時間: ITEM_TIME = 20
      總的偏移量: offset
      單元移動的偏移量: itemOffset = offset/(TIME/ITEM_TIME)

      啟動循環定時器不斷更新$list的left, 到達目標處停止停止定時器
     */

    //如果正在翻頁, 直接結束
	//已經正在翻頁中
	 // 標識正在翻頁
    // 總的偏移量: offset
    // 計算offset
  function nextPage (next) {
    if(moving) { 
      return
    }
    moving = true

    var offset = 0
    if(typeof next==='boolean') {
      offset = next ? -PAGE_WIDTH : PAGE_WIDTH
    } else {
      offset = -(next-index)* PAGE_WIDTH
    }

    // 計算單元移動的偏移量: itemOffset
    // 得到相對於父元素偏移量的left值
    // 計算出目標處的left值
    var itemOffset = offset/(TIME/ITEM_TIME)
    var currLeft = $list.position().left
    var targetLeft = currLeft + offset

    // 啟動循環定時器不斷更新$list的left, 到達目標處停止停止定時器
      // 計算出最新的currLeft
	   // 到達目標位置
        // 清除定時器
        // 標識翻頁停止
    var intervalId = setInterval(function () {
      currLeft += itemOffset
      if(currLeft===targetLeft) {
        clearInterval(intervalId)
        moving = false

        //2. 無限循環切換: 第一頁的上一頁為最后頁, 最后一頁的下一頁是第一頁
        // 如果到達了最右邊的圖片(1.jpg), 跳轉到最左邊的第2張圖片(1.jpg)
          // 如果到達了最左邊的圖片(5.jpg), 跳轉到最右邊的第2張圖片(5.jpg)
        if(currLeft===-(imgCount+1) * PAGE_WIDTH) {
          currLeft = -PAGE_WIDTH
        } else if(currLeft===0){
          currLeft = -imgCount * PAGE_WIDTH
        }

      }
      // 設置left
    // 更新圓點
      $list.css('left', currLeft)
    }, ITEM_TIME)

    updatePoints(next)
  }

  /**
   * 更新圓點
   * @param next
   */
    // 計算出目標圓點的下標targetIndex
	 // [0, imgCount-1]
	 // 此時看到的是1.jpg-->第1個圓點
	  // 此時看到的是5.jpg-->第5個圓點
        //next表示點擊圓點的跳到的頁數
  function updatePoints (next) {

    var targetIndex = 0
    if(typeof next === 'boolean') {
      if(next) {
        targetIndex = index + 1  
        if(targetIndex===imgCount) {
          targetIndex = 0
        }
      } else {
        targetIndex = index - 1
        if(targetIndex===-1) {
          targetIndex = imgCount-1
        }
      }
    } else {
      targetIndex = next
    }

    // 將當前index的<span>的class移除
    // $points.eq(index).removeClass('on')
    // 給目標圓點添加class='on'
    // $points.eq(targetIndex).addClass('on')
    // 將index更新為targetIndex
    $points[index].className = ''
    $points[targetIndex].className = 'on'
    index = targetIndex
  }
})
 //2. 無限循環切換: 第一頁的上一頁為最后頁, 最后一頁的下一頁是第一頁
        // 如果到達了最右邊的圖片(1.jpg), 跳轉到最左邊的第2張圖片(1.jpg)
          // 如果到達了最左邊的圖片(5.jpg), 跳轉到最右邊的第2張圖片(5.jpg)
if(currLeft===-(imgCount+1) * PAGE_WIDTH) {
          currLeft = -PAGE_WIDTH
        } else if(currLeft===0){
          currLeft = -imgCount * PAGE_WIDTH
        }