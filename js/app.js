!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var i={};return t.m=e,t.c=i,t.p="/2017/js/",t(0)}([function(e,t,i){e.exports=i(2)},function(e,t){e.exports=jQuery},function(e,t,i){"use strict";i(4);var n=i(1);n("[data-activates]").sideNav()},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var i=(0,r.default)(e);i.data("hammer")||i.data("hammer",new u.default(i[0],t))}var o=i(1),r=n(o),s=i(5),u=n(s);r.default.fn.hammer=function(e){return this.each(function(){a(this,e)})},u.default.Manager.prototype.emit=function(e){return function(t,i){e.call(this,t,i),(0,r.default)(this.element).trigger({type:t,gesture:i})}}(u.default.Manager.prototype.emit)},function(e,t,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(1);i(3);var o={init:function(e){var t={menuWidth:300,edge:"left",closeOnClick:!1,draggable:!0};e=a.extend(t,e),a(this).each(function(){var t=a(this),i=t.attr("data-activates"),n=a("#"+i);300!=e.menuWidth&&n.css("width",e.menuWidth);var o=a('.drag-target[data-sidenav="'+i+'"]');e.draggable?(o.length&&o.remove(),o=a('<div class="drag-target"></div>').attr("data-sidenav",i),a("body").append(o)):o=a(),"left"==e.edge?(n.css("transform","translateX(-100%)"),o.css({left:0})):(n.addClass("right-aligned").css("transform","translateX(100%)"),o.css({right:0})),n.hasClass("fixed")&&window.innerWidth>992&&n.css("transform","translateX(0)"),n.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").length&&u?r(!0):n.css("transform","translateX(0%)"):u===!1&&("left"===e.edge?n.css("transform","translateX(-100%)"):n.css("transform","translateX(100%)"))}),e.closeOnClick===!0&&n.on("click.itemclick","a:not(.collapsible-header)",function(){r()});var r=function(t){s=!1,u=!1,a("body").css({overflow:"",width:""}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===e.edge?(o.css({width:"",right:"",left:"0"}),n.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){t===!0&&(n.removeAttr("style"),n.css("width",e.menuWidth))}})):(o.css({width:"",right:"0",left:""}),n.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){t===!0&&(n.removeAttr("style"),n.css("width",e.menuWidth))}}))},s=!1,u=!1;e.draggable&&(o.on("click",function(){u&&r()}),o.hammer({prevent_default:!1}).bind("pan",function(t){if("touch"==t.gesture.pointerType){var i=t.gesture.center.x,o=a(document.body),s=a("#sidenav-overlay"),d=o.innerWidth();o.css("overflow","hidden"),o.width(d),0===s.length&&(s=a('<div id="sidenav-overlay"></div>'),s.css("opacity",0).click(function(){r()}),a("body").append(s)),"left"===e.edge&&(i>e.menuWidth?i=e.menuWidth:i<0&&(i=0)),"left"===e.edge&&(i<e.menuWidth/2?u=!1:i>=e.menuWidth/2&&(u=!0)),n.css("transform","translateX("+(i-e.menuWidth)+"px)")}else{x<window.innerWidth-e.menuWidth/2?u=!0:x>=window.innerWidth-e.menuWidth/2&&(u=!1);var c=x-e.menuWidth/2;c<0&&(c=0),n.css("transform","translateX("+c+"px)")}var l=void 0;"left"===e.edge?(l=x/e.menuWidth,$overlay.velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"})):(l=Math.abs((x-window.innerWidth)/e.menuWidth),$overlay.velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"}))}).bind("panend",function(t){if("touch"==t.gesture.pointerType){var i=a('<div id="sidenav-overlay"></div>'),r=t.gesture.velocityX,d=t.gesture.center.x,c=d-e.menuWidth,l=d-e.menuWidth/2;c>0&&(c=0),l<0&&(l=0),s=!1,"left"===e.edge?u&&r<=.3||r<-.5?(0!==c&&n.velocity({translateX:[0,c]},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),o.css({width:"50%",right:0,left:""}),u=!0):(!u||r>.3)&&(a("body").css({overflow:"",width:""}),n.velocity({translateX:[-1*e.menuWidth-10,c]},{duration:200,queue:!1,easing:"easeOutQuad"}),i.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),o.css({width:"10px",right:"",left:0})):u&&r>=-.3||r>.5?(0!==l&&n.velocity({translateX:[0,l]},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),o.css({width:"50%",right:"",left:0}),u=!0):(!u||r<-.3)&&(a("body").css({overflow:"",width:""}),n.velocity({translateX:[e.menuWidth+10,l]},{duration:200,queue:!1,easing:"easeOutQuad"}),i.velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),o.css({width:"10px",right:0,left:""}))}})),t.off("click.sidenav").on("click.sidenav",function(){return u===!0?(u=!1,s=!1,r()):!function(){var t=a("body"),i=a('<div id="sidenav-overlay"></div>'),d=t.innerWidth();t.css("overflow","hidden"),t.width(d),t.append(o),"left"===e.edge?(o.css({width:"50%",right:0,left:""}),n.velocity({translateX:[0,-1*e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(o.css({width:"50%",right:"",left:0}),n.velocity({translateX:[0,e.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})),i.css("opacity",0).click(function(){u=!1,s=!1,r(),i.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),t.append(i),i.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){u=!0,s=!1}})}(),!1})})},destroy:function(){var e=a("#sidenav-overlay"),t=a('.drag-target[data-sidenav="'+a(this).attr("data-activates")+'"]');e.trigger("click"),t.remove(),a(this).off("click"),e.remove()},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(e){return o[e]?o[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==("undefined"==typeof e?"undefined":n(e))&&e?void a.error("Method "+e+" does not exist on jQuery.sideNav"):o.init.apply(this,arguments)}},function(e,t){e.exports=Hammer}]);
//# sourceMappingURL=app.js.map