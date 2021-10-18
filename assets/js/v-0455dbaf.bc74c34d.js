(self.webpackChunklnnapi=self.webpackChunklnnapi||[]).push([[954],{8814:(t,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>n});const n={key:"v-0455dbaf",path:"/zh-hk/ws/orderbook.html",title:"現貨盤口掛單數據",lang:"zh-HK",frontmatter:{},excerpt:"",headers:[{level:3,title:"盤口掛單訂閱請求",slug:"盤口掛單訂閱請求",children:[]},{level:3,title:"訂閱盤口掛單響應數據",slug:"訂閱盤口掛單響應數據",children:[]},{level:3,title:"取消盤口掛單訂閱",slug:"取消盤口掛單訂閱",children:[]},{level:3,title:"取消盤口掛單訂閱響應數據",slug:"取消盤口掛單訂閱響應數據",children:[]},{level:3,title:"盤口掛單推送數據",slug:"盤口掛單推送數據",children:[]}],filePathRelative:"zh-hk/ws/orderbook.md",git:{updatedTime:1634539287e3,contributors:[{name:"Lawetis-Lee",email:"es6china@163.com",commits:1}]}}},5737:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});const n=(0,a(6252).uE)('<h1 id="現貨盤口掛單數據" tabindex="-1"><a class="header-anchor" href="#現貨盤口掛單數據" aria-hidden="true">#</a> 現貨盤口掛單數據</h1><h3 id="盤口掛單訂閱請求" tabindex="-1"><a class="header-anchor" href="#盤口掛單訂閱請求" aria-hidden="true">#</a> 盤口掛單訂閱請求</h3><table><thead><tr><th>參數名稱</th><th>類型</th><th>說明</th></tr></thead><tbody><tr><td>Op</td><td>String</td><td>固定為<code>Sub</code></td></tr><tr><td>Channel</td><td>String</td><td>固定為<code>SpotOrderBook</code></td></tr><tr><td>Data</td><td>String數組</td><td>例如[<code>BTC_USDT</code>,<code>ETH_USDT</code>]</td></tr></tbody></table><h3 id="訂閱盤口掛單響應數據" tabindex="-1"><a class="header-anchor" href="#訂閱盤口掛單響應數據" aria-hidden="true">#</a> 訂閱盤口掛單響應數據</h3><table><thead><tr><th>參數名稱</th><th>類型</th><th>說明</th></tr></thead><tbody><tr><td>Op</td><td>String</td><td>固定為<code>Sub</code></td></tr><tr><td>Channel</td><td>String</td><td>固定為<code>SpotOrderBook</code></td></tr><tr><td>Data</td><td>String數組</td><td>訂閱成功的交易對例如[<code>BTC_USDT</code>,<code>ETH_USDT</code>]</td></tr></tbody></table><h3 id="取消盤口掛單訂閱" tabindex="-1"><a class="header-anchor" href="#取消盤口掛單訂閱" aria-hidden="true">#</a> 取消盤口掛單訂閱</h3><table><thead><tr><th>參數名稱</th><th>類型</th><th>說明</th></tr></thead><tbody><tr><td>Op</td><td>String</td><td>固定為<code>Unsubscribe</code></td></tr><tr><td>Channel</td><td>String</td><td>固定為<code>SpotOrderBook</code></td></tr><tr><td>Data</td><td>String數組</td><td>例如[<code>BTC_USDT</code>,<code>ETH_USDT</code>]</td></tr></tbody></table><h3 id="取消盤口掛單訂閱響應數據" tabindex="-1"><a class="header-anchor" href="#取消盤口掛單訂閱響應數據" aria-hidden="true">#</a> 取消盤口掛單訂閱響應數據</h3><table><thead><tr><th>參數名稱</th><th>類型</th><th>說明</th></tr></thead><tbody><tr><td>Op</td><td>String</td><td>固定為<code>Unsubscribe</code></td></tr><tr><td>Channel</td><td>String</td><td>固定為<code>SpotOrderBook</code></td></tr><tr><td>Data</td><td>String數組</td><td>取消成功的交易對例如[<code>BTC_USDT</code>,<code>ETH_USDT</code>]</td></tr></tbody></table><h3 id="盤口掛單推送數據" tabindex="-1"><a class="header-anchor" href="#盤口掛單推送數據" aria-hidden="true">#</a> 盤口掛單推送數據</h3><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">    {</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Channel&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;SpotOrderBook&quot;</span><span style="color:#000000;">, </span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Nonce&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">消息唯一編號(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Symbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易對名稱(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Data&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t{</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;ts&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">時間戳精確到毫秒(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#A31515;">&quot;Bids&quot;</span><span style="color:#CD3131;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">價格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">數量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Asks&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">價格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">數量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t]</span></span>\n<span class="line"><span style="color:#000000;">\t\t}</span></span>\n<span class="line"><span style="color:#000000;">    }</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div>',11),l={render:function(t,s){return n}}}}]);