(self.webpackChunklnnapi=self.webpackChunklnnapi||[]).push([[996],{5147:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>l});const l={key:"v-bbb37926",path:"/zh-hk/http/common.html",title:"其他公共信息模塊(common)",lang:"zh-HK",frontmatter:{},excerpt:"",headers:[{level:3,title:"獲取現貨交易對基礎信息(SymbolInfo)",slug:"獲取現貨交易對基礎信息-symbolinfo",children:[]},{level:3,title:"OrderBook數據",slug:"orderbook數據",children:[]},{level:3,title:"K線數據(KLine)",slug:"k線數據-kline",children:[]}],filePathRelative:"zh-hk/http/common.md",git:{updatedTime:1634539287e3,contributors:[{name:"Lawetis-Lee",email:"es6china@163.com",commits:1}]}}},274:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>o});const l=(0,a(6252).uE)('<h1 id="其他公共信息模塊-common" tabindex="-1"><a class="header-anchor" href="#其他公共信息模塊-common" aria-hidden="true">#</a> 其他公共信息模塊(common)</h1><h3 id="獲取現貨交易對基礎信息-symbolinfo" tabindex="-1"><a class="header-anchor" href="#獲取現貨交易對基礎信息-symbolinfo" aria-hidden="true">#</a> 獲取現貨交易對基礎信息(SymbolInfo)</h3><p>接口地址: <code>https://common.lnncoin.io/SymbolInfo</code><br> 請求方式: <code>GET</code><br> 參數列表:</p><table><thead><tr><th>參數名</th><th>類型</th><th>參數説明</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td>現貨市場固定為<code>Spot</code></td></tr></tbody></table><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">{</span></span>\n<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;Symbols&quot;</span><span style="color:#000000;">: [</span></span>\n<span class="line"><span style="color:#000000;">        {</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;Symbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易對名稱(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;SymbolId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易對ID(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;QuoteMinNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Quote最小精度(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;BaseMinNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">Base最小精度(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;IfForbidTrade&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否禁止交易(Bool:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">禁止true</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允許false)</span></span>\n<span class="line"><span style="color:#000000;">        },</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">     ]</span></span>\n<span class="line"><span style="color:#000000;">     </span><span style="color:#A31515;">&quot;Coins&quot;</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> [</span></span>\n<span class="line"><span style="color:#000000;">        {</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CoinName&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">幣種名稱(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanWithdraw&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否能夠提現(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">禁止</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允許</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanDeposit&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否能夠充值(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">:</span><span style="color:#000000;"> </span><span style="color:#CD3131;">禁止</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允許</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CanTransfer&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">是否能夠轉賬(Int</span><span style="color:#098658;">8</span><span style="color:#CD3131;">：禁止</span><span style="color:#000000;"> </span><span style="color:#098658;">0</span><span style="color:#000000;">, </span><span style="color:#CD3131;">允許</span><span style="color:#000000;"> </span><span style="color:#CD3131;">1),</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;CoinId&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">幣種Id(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;Desc&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">幣種描述(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;WithdrawFee&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">提現手續費(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinDepositNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">最小充值金額(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinOperateNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">最小操作數(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;MinWithdrawNum&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">最小提現數量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">        },</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">     ]</span></span>\n<span class="line"></span></code></pre></div><h3 id="orderbook數據" tabindex="-1"><a class="header-anchor" href="#orderbook數據" aria-hidden="true">#</a> OrderBook數據</h3><p>接口地址: <code>https://common.lnncoin.io/OrderBook</code><br> 請求方式: <code>GET</code><br> 參數列表:</p><table><thead><tr><th>參數名</th><th>類型</th><th>參數説明</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td>現貨市場固定為<code>Spot</code></td></tr><tr><td>Symbol</td><td>String</td><td>交易對名稱，例如<code>BTC_USDT</code></td></tr></tbody></table><p>響應數據解碼:</p><ul><li>響應數據需要先經過<code>base64</code>解碼，再用標準<code>zlib</code>解壓縮得到<code>json</code>數據</li></ul><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">    {</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Channel&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;SpotOrderBook&quot;</span><span style="color:#000000;">, </span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;Nonce&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">消息唯一編號(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Symbol&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易對名稱(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t</span><span style="color:#0451A5;">&quot;Data&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t{</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;ts&quot;</span><span style="color:#000000;">: </span><span style="color:#CD3131;">時間戳精確到毫秒(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#A31515;">&quot;Bids&quot;</span><span style="color:#CD3131;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">價格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">數量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t</span><span style="color:#0451A5;">&quot;Asks&quot;</span><span style="color:#000000;">:</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t[</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">價格(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t\t</span><span style="color:#CD3131;">數量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">\t</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t\t],</span></span>\n<span class="line"><span style="color:#000000;">                </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">\t\t\t]</span></span>\n<span class="line"><span style="color:#000000;">\t\t}</span></span>\n<span class="line"><span style="color:#000000;">    }</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><h3 id="k線數據-kline" tabindex="-1"><a class="header-anchor" href="#k線數據-kline" aria-hidden="true">#</a> K線數據(KLine)</h3><p>接口地址: <code>https://common.lnncoin.io/KLine</code><br> 請求方式: <code>GET</code><br> 參數列表:</p><table><thead><tr><th>參數名</th><th>類型</th><th>參數説明</th></tr></thead><tbody><tr><td>MarketType</td><td>String</td><td>現貨市場固定為<code>Spot</code></td></tr><tr><td>Symbol</td><td>String</td><td>交易對名稱, 例如<code>BTC_USDT</code></td></tr><tr><td>KLineType</td><td>String</td><td>K線類型, 按照不同周期可取值:<code>1Min</code>, <code>5Min</code>, <code>15Min</code>, <code>30Min</code>, <code>1Hour</code>, <code>4Hour</code>, <code>24Hour</code>, <code>1Week</code>, <code>1Month</code></td></tr></tbody></table><p>響應數據解碼:</p><ul><li>響應數據需要先經過<code>base64</code>解碼，再用標準<code>zlib</code>解壓縮得到<code>json</code>數據</li></ul><p>返回值:</p><div class="language-json ext-json"><pre class="shiki" style="background-color:#FFFFFF;"><code><span class="line"><span style="color:#000000;">    {  </span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">DataType</span><span style="color:#000000;">: </span><span style="color:#CD3131;">K線類型(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Nonce</span><span style="color:#000000;">: </span><span style="color:#CD3131;">消息唯一編號(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Symbol</span><span style="color:#000000;">: </span><span style="color:#CD3131;">交易對名稱(String)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">IsUpdate</span><span style="color:#000000;">: </span><span style="color:#CD3131;">固定為false</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">        </span><span style="color:#CD3131;">Data</span><span style="color:#000000;">: [</span></span>\n<span class="line"><span style="color:#000000;">            [</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">時間戳(Int</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">交易次數(Int</span><span style="color:#098658;">32</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">交易量(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">交易額(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">開盤價(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">收盤價(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">最高價(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span><span style="color:#000000;">,</span></span>\n<span class="line"><span style="color:#000000;">              </span><span style="color:#CD3131;">最低價(Float</span><span style="color:#098658;">64</span><span style="color:#CD3131;">)</span></span>\n<span class="line"><span style="color:#000000;">            ],</span></span>\n<span class="line"><span style="color:#000000;">            </span><span style="color:#CD3131;">...</span></span>\n<span class="line"><span style="color:#000000;">        ]</span></span>\n<span class="line"><span style="color:#000000;">    }</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div>',20),o={render:function(s,n){return l}}}}]);