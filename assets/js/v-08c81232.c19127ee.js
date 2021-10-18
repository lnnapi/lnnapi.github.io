(self.webpackChunklnnapi=self.webpackChunklnnapi||[]).push([[809],{3822:(t,e,d)=>{"use strict";d.r(e),d.d(e,{data:()=>o});const o={key:"v-08c81232",path:"/zh-hk/ws/introduction.html",title:"說明",lang:"zh-HK",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh-hk/ws/introduction.md",git:{updatedTime:1634539287e3,contributors:[{name:"Lawetis-Lee",email:"es6china@163.com",commits:1}]}}},7501:(t,e,d)=>{"use strict";d.r(e),d.d(e,{default:()=>i});const o=(0,d(6252).uE)('<h1 id="說明" tabindex="-1"><a class="header-anchor" href="#說明" aria-hidden="true">#</a> 說明</h1><ul><li>Websocket連接地址及URL參數: <code>wss://ws.lnncoin.io?SecretId=&amp;UnixTime=&amp;Sign=</code></li></ul><table><thead><tr><th>參數名稱</th><th>參數説明</th></tr></thead><tbody><tr><td>SecretId</td><td>私鑰ID</td></tr><tr><td>UnixTime</td><td>連接時間精確到秒</td></tr><tr><td>Sign</td><td>簽名(String)</td></tr></tbody></table><ul><li><p>心跳: 連接成功後每隔5秒需發送一次<code>Ping</code>消息以保持鏈接，發送內容為字符串<code>&quot;Ping&quot;</code>，服務端響應內容為字符串<code>&quot;Pong&quot;</code></p></li><li><p>Websocket連接以及頻道訂閱限製: 暫無</p></li><li><p>傳輸數據類型: 訂閱響應(<code>json</code>)、<code>&quot;Pong&quot;</code>以<code>Text</code>格式返回; 其它所有推送數據以<code>二進製</code>格式傳輸，<code>二進製</code>數據在處理前需先進行標準Zlib解壓縮以得到實際<code>json</code>數據</p></li></ul>',4),i={render:function(t,e){return o}}}}]);