function getViewportSize() {
    var elmt = window, prop = "inner";
    if (!("innerWidth" in window)) {
        elmt = document.documentElement || document.body;
        prop = "client";
    }
    return {
        width: elmt[prop + "Width"],
        height: elmt[prop + "Height"]
    };
}

//jQ timecyrcles
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H($){F s=2x;G(!1e.1m){1e.1m=(H(){\'4y 3A\';F 1y=1e.N.1y,2R=!({24:M}).2T(\'24\'),1V=[\'24\',\'3K\',\'3J\',\'1y\',\'3E\',\'2T\',\'3u\'],38=1V.15;K H(a){G(O a!==\'2c\'&&(O a!==\'H\'||a===M)){4e 11 4a(\'1e.1m 46 42 41-2c\');}F b=[],23,i;13(23 20 a){G(1y.1B(a,23)){b.1S(23)}}G(2R){13(i=0;i<38;i++){G(1y.1B(a,1V[i])){b.1S(1V[i])}}}K b}}())}F t=V;F u=3w;F v=(4p.4j==="#3R");H 3O(a){G(v){3g.3M(a)}}F z=["18","1d","1a","1j"];F A={1j:"1a",1a:"1d",1d:"18",18:"1A"};F B={1j:1,1a:4B,1d:4o,18:49,3h:3Q,1A:3U};H 3m(a){F c=/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;a=a.2K(c,H(m,r,g,b){K r+r+g+g+b+b});F d=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.3N(a);K d?{r:28(d[1],16),g:28(d[2],16),b:28(d[3],16)}:M}H 3s(){F a=3r.3q(\'1s\');K!!(a.2y&&a.2y(\'2d\'))}H 1c(){K J.U((1+J.3T())*3z).24(16).3C(1)}H 3k(){K 1c()+1c()+\'-\'+1c()+\'-\'+1c()+\'-\'+1c()+\'-\'+1c()+1c()+1c()}G(!3j.N.2u){3j.N.2u=H(a){F b=6.15>>>0;F c=3W(43[1])||0;c=(c<0)?J.2w(c):J.U(c);G(c<0)c+=b;13(;c<b;c++){G(c 20 6&&6[c]===a)K c}K-1}}H 3i(a){F b=a.3D(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);G(b!==M&&b.15>0){F c=a.2B(" ");F e=c[0].2B("-");F f=c[1].2B(":");K 11 12(e[0],e[1]-1,e[2],f[0],f[1],f[2])}F d=12.2F(a);G(!2G(d))K d;d=12.2F(a.2K(/-/g,\'/\').2K(\'T\',\' \'));G(!2G(d))K d;K 11 12()}H 2H(a,b,c,d,e){F f={};F g={};F h={};F j={};F k={};F l={};F m=M;13(F i=0;i<d.15;i++){F n=d[i];F o;G(m===M){o=c/B[n]}P{o=B[m]/B[n]}F p=(a/B[n]);F q=(b/B[n]);G(e){G(p>0)p=J.U(p);P p=J.2w(p);G(q>0)q=J.U(q);P q=J.2w(q)}G(n!=="18"){p=p%o;q=q%o}f[n]=p;h[n]=J.1u(p);g[n]=q;l[n]=J.1u(q);j[n]=J.1u(p)/o;k[n]=J.1u(q)/o;m=n}K{2e:f,2f:g,S:h,2h:l,2i:j,3f:k}}F C={};H 3e(){G(O s.2s!=="Z"){C=s.2s}P{s.2s=C}3c(s)};H 3c(w){F g=[\'4q\',\'4z\'];13(F x=0;x<g.15&&!w.1q;++x){w.1q=w[g[x]+\'3y\'];w.1z=w[g[x]+\'3B\']}G(!w.1q||!w.1z){w.1q=H(a,b,c){G(O c==="Z")c={7:{26:0}};F d=11 12().1v();F e=J.2C(0,16-(d-c.7.26));F f=w.1Q(H(){a(d+e)},e);c.7.26=d+e;K f};w.1z=H(a){3a(a)}}};F D=H(a,b){6.X=a;6.1k;6.1w=M;6.7={1h:V,26:0,1o:M,1P:M,17:V,14:M,2a:M,19:[],1D:{18:M,1d:M,1a:M,1j:M},I:{1s:M,W:M,R:M,1r:M,1F:M,2g:M},1G:{1H:{18:V,1d:V,1a:V,1j:V}}};6.L=M;6.2j(b);6.2k()};D.N.2l=H(){6.1w={37:[],1T:[]}};D.N.2o=H(a){G(6.7.I.Y 3F 12){F d=6.7.I.Y;d.3H(d.3I()+a)}P G(!2G(6.7.I.Y)){6.7.I.Y+=(a*1f)}};D.N.2k=H(a){6.7.19=[];13(F i=0;i<1e.1m(6.L.S).15;i++){F b=1e.1m(6.L.S)[i];G(6.L.S[b].1l){6.7.19.1S(b)}}$(6.X).3L(\'2p.31\').2X();G(O a==="Z")a=Q;G(a||6.1w===M){6.2l()}6.1k=$("<2p>");6.1k.3t(\'31\');6.1k.1J(6.X);F c=6.X.4I;F d=6.X.3S;G(c===0)c=$(6.X).1Y();G(d===0)d=$(6.X).1Z();G(c===0&&d>0)c=d/6.7.19.15;P G(d===0&&c>0)d=c*6.7.19.15;F e=3r.3q(\'1s\');e.1Z=d;e.1Y=c;6.7.I.1s=$(e);6.7.I.1s.1J(6.1k);F f=3s();G(!f&&O 2W!=="Z"){2W.3Y(e);t=Q;f=Q}G(f){6.7.I.W=e.2y(\'2d\')}6.7.I.R=J.40(d/6.7.19.15,c);6.7.I.1r=6.7.I.R*6.L.2V;6.7.I.1F=((6.7.I.R*0.8)-6.7.I.1r)/2;6.7.I.2g=6.7.I.1F+0.5*J.2C(6.7.I.1r,6.7.I.1r*6.L.2A);F i=0;13(F g 20 6.7.1D){G(!6.L.S[g].1l)2U;F h=$("<2p>");h.3t(\'45\'+g);h.1i("2S",J.1n(0.35*6.7.I.R));h.1i("4c",J.1n(i++*6.7.I.R));h.1i("1Z",6.7.I.R);h.1J(6.1k);F j=$("<4d>");j.1g(6.L.S[g].1g);j.1i("2Q-2O",J.1n(6.L.1O*6.7.I.R));j.1i("39-1Y",J.1n(6.L.1O*6.7.I.R)+"2M");j.1J(h);F k=$("<4A>");k.1i("2Q-2O",J.1n(3*6.L.1O*6.7.I.R));k.1i("39-1Y",J.1n(6.L.1O*6.7.I.R)+"2M");k.1J(h);6.7.1D[g]=k}6.1p();G(!6.L.1p){6.7.1h=Q}F l=6;6.7.1P=s.4C(H(){l.27.1B(l,Q)},3v)};D.N.27=H(a){G(O a==="Z"){a=V}P G(a&&6.7.1h){K}G(t){6.7.I.W.2N(0,0,6.7.I.1s[0].1Z,6.7.I.1s[0].3x)}F b,25;F c=6.7.2a;F d=11 12();6.7.2a=d;G(c===M)c=d;G(!6.L.2P){G(d>6.7.I.Y){13(F i=0;i<6.7.19.15;i++){F e=6.7.19[i];6.7.1D[e].1g("0");F x=(i*6.7.I.R)+(6.7.I.R/2);F y=6.7.I.R/2;F f=6.L.S[e].1x;6.1M(x,y,f,0)}6.1L();K}}b=(6.7.I.Y-d)/1f;25=(6.7.I.Y-c)/1f;F g=6.L.22!=="21";F h=2H(b,25,6.7.14,6.7.19,g);F k=2H(b,25,B["1A"],z,g);F i=0;F j=0;F l=M;F m=6.7.19.3G();13(F i 20 z){F e=z[i];G(J.U(k.2e[e])!==J.U(k.2f[e])){6.2z(e,J.U(k.S[e]),J.U(b),"37")}G(m.2u(e)<0)2U;G(J.U(h.2e[e])!==J.U(h.2f[e])){6.2z(e,J.U(h.S[e]),J.U(b),"1T")}G(!a){6.7.1D[e].1g(J.U(J.1u(h.S[e])));F x=(j*6.7.I.R)+(6.7.I.R/2);F y=6.7.I.R/2;F f=6.L.S[e].1x;G(6.L.22==="21"){G(l!==M&&!t){G(J.U(h.S[l])>J.U(h.2h[l])){6.1K(x,y,f,1,e);6.7.1G.1H[e]=Q}P G(J.U(h.S[l])<J.U(h.2h[l])){6.1K(x,y,f,0,e);6.7.1G.1H[e]=Q}}G(!6.7.1G.1H[e]){6.1M(x,y,f,h.2i[e])}}P{6.2t(x,y,f,h.2i[e],h.3f[e],(11 12()).1v()+u)}}l=e;j++}G(6.7.1h||a){K}F n=6;F o=H(){n.27.1B(n)};G(6.L.22==="21"){6.7.1o=s.1q(o,n.X,n)}P{F p=(b%1)*1f;G(p<0)p=1f+p;p+=2r;n.7.1o=s.1Q(H(){n.7.1o=s.1q(o,n.X,n)},p)}};D.N.2t=H(x,y,a,b,c,d){G(6.7.I.W===M)K;F e=c-b;G(J.1u(e)>0.5){G(b===0){6.1K(x,y,a,1)}P{6.1K(x,y,a,0)}}P{F f=(u-(d-(11 12()).1v()))/u;G(f>1)f=1;F g=(c*(1-f))+(b*f);6.1M(x,y,a,g);G(f>=1)K;F h=6;s.1q(H(){h.2t(x,y,a,b,c,d)},6.X)}};D.N.1M=H(x,y,a,b){G(6.7.I.W===M)K;F c=J.2C(6.7.I.2g,6.7.I.R/2);G(!t){6.7.I.W.2N(x-c,y-c,c*2,c*2)}G(6.L.2Y){6.7.I.W.2Z();6.7.I.W.30(x,y,6.7.I.1F,0,2*J.1U,V);6.7.I.W.32=6.7.I.1r*6.L.2A;6.7.I.W.33=6.L.34;6.7.I.W.36()}F d,1I,1E;F e=(-0.5*J.1U);F f=2*J.1U;d=e+(6.L.2L/3V*f);F g=(2*b*J.1U);G(6.L.2E==="3X"){1E=V;d-=(g/2);1I=d+g}P{G(6.L.2E==="3b"){1E=V;1I=d+g}P{1E=Q;1I=d-g}}6.7.I.W.2Z();6.7.I.W.30(x,y,6.7.I.1F,d,1I,1E);6.7.I.W.32=6.7.I.1r;6.7.I.W.33=a;6.7.I.W.36()};D.N.1K=H(x,y,c,d,e){F f=3m(c);F g=6;F h=0.2*((d===1)?-1:1);F i;13(i=0;d<=1&&d>=0;i++){(H(){F a=2r*i;F b="3Z("+f.r+", "+f.g+", "+f.b+", "+(J.1n(d*10)/10)+")";s.1Q(H(){g.1M(x,y,b,1)},a)}());d+=h}G(O e!==Z){s.1Q(H(){g.7.1G.1H[e]=V},2r*i)}};D.N.2v=H(){G(6.7.1h&&O 6.7.17==="1X"){K 6.7.17}F a=11 12();K((6.7.I.Y-a)/1f)};D.N.1p=H(){s.1z(6.7.1o);s.3a(6.7.1o);F a=$(6.X).7(\'3d\');G(O a==="Z"){a=$(6.X).2q(\'7-3d\')}G(O a==="1N"){6.7.I.Y=3i(a)}P G(O 6.7.17==="1X"){G(6.7.1h){6.7.I.Y=(11 12()).1v()+(6.7.17*1f)}}P{F b=$(6.X).7(\'17\');G(O b==="Z"){b=$(6.X).2q(\'7-17\')}G(O b==="1N"){b=44(b)}G(O b==="1X"){6.7.17=b;6.7.I.Y=(11 12()).1v()+(b*1f)}P{6.7.I.Y=6.L.Y}}6.7.1h=V;6.27.1B(6)};D.N.29=H(){6.7.17=V;6.1p()};D.N.1L=H(){G(O 6.7.17==="1X"){6.7.17=6.2v(6)}6.7.1h=Q;s.1z(6.7.1o)};D.N.2J=H(){6.2l();6.1L();s.47(6.7.1P);6.7.1P=M;6.1k.2X();$(6.X).48(\'7-1R-1W\');$(6.X).4b(\'1R-1W\')};D.N.2j=H(a){G(6.L===M){6.2n.Y=11 12();6.L=$.2m(Q,{},6.2n)}$.2m(Q,6.L,a);G(6.L.3l){s=2x.2S}P{s=2x}3e();6.7.14=6.L.14;G(O 6.7.14==="1N"){G(O B[6.7.14]!=="Z"){6.7.14=B[6.7.14]}P G(6.7.14==="2b"){13(F i=0;i<1e.1m(6.L.S).15;i++){F b=1e.1m(6.L.S)[i];G(6.L.S[b].1l){6.7.14=B[A[b]];4f}}}P{6.7.14=B["1A"];3g.4g("4h 4i 13 3n L.14 4k 4l 4m, 4n (1N) 1A, 3h, 18, 1d, 1a, 2b")}}};D.N.2D=H(f,a,b){G(O f!=="H")K;G(O b==="Z")b="1T";6.1w[b].1S({3o:f,3p:a})};D.N.2z=H(a,b,c,d){13(F i=0;i<6.1w[d].15;i++){F e=6.1w[d][i];e.3o.4r(e.3p,[a,b,c])}};D.N.2n={Y:11 12(),1p:Q,22:"21",2P:Q,34:"#4s",2Y:Q,2V:0.1,2A:1.2,1O:0.4t,14:"2b",2E:"3b",3l:V,2L:0,S:{18:{1l:Q,1g:"18",1x:"#4u"},1d:{1l:Q,1g:"1d",1x:"#4v"},1a:{1l:Q,1g:"1a",1x:"#4w"},1j:{1l:Q,1g:"1j",1x:"#4x"}}};F E=H(a,b){6.1C=a;6.1t=b;6.1b()};E.N.2I=H(a){F b;F c=$(a).7("1R-1W");G(O c==="Z"){c=3k();$(a).2q("7-1R-1W",c)}G(O C[c]==="Z"){F d=6.1t;F e=$(a).7(\'1t\');G(O e==="1N"){e=4D.2F(e)}G(O e==="2c"){d=$.2m(Q,{},6.1t,e)}b=11 D(a,d);C[c]=b}P{b=C[c];G(O 6.1t!=="Z"){b.2j(6.1t)}}K b};E.N.2o=H(b){6.1b(H(a){a.2o(b)})};E.N.1b=H(b){F c=6;6.1C.4E(H(){F a=c.2I(6);G(O b==="H"){b(a)}});K 6};E.N.1p=H(){6.1b(H(a){a.1p()});K 6};E.N.1L=H(){6.1b(H(a){a.1L()});K 6};E.N.29=H(){6.1b(H(a){a.29()});K 6};E.N.4F=H(){6.1b(H(a){a.2k(V)});K 6};E.N.1v=H(){K 6.2I(6.1C[0]).2v()};E.N.2D=H(f,b){G(O b==="Z")b="1T";F c=6;6.1b(H(a){a.2D(f,c.1C,b)});K 6};E.N.2J=H(){6.1b(H(a){a.2J()});K 6};E.N.4G=H(){K 6.1C};$.4H.3n=H(a){K 11 E(6,a)}}(3P));',62,293,'||||||this|data||||||||||||||||||||||||||||||||||var|if|function|attributes|Math|return|config|null|prototype|typeof|else|true|item_size|time||floor|false|context|element|ref_date|undefined||new|Date|for|total_duration|length||timer|Days|drawn_units|Minutes|foreach|s4|Hours|Object|1000|text|paused|css|Seconds|container|show|keys|round|animation_frame|start|requestAnimationFrame|line_width|canvas|options|abs|getTime|listeners|color|hasOwnProperty|cancelAnimationFrame|Years|call|elements|text_elements|counterClockwise|radius|state|fading|endAngle|appendTo|radialFade|stop|drawArc|string|text_size|interval_fallback|setTimeout|tc|push|visible|PI|dontEnums|id|number|height|width|in|smooth|animation|prop|toString|old_diff|last_frame|update|parseInt|restart|prev_time|Auto|object||raw_time|raw_old_time|outer_radius|old_time|pct|setOptions|initialize|clearListeners|extend|default_options|addTime|div|attr|50|TC_Instance_List|animateArc|indexOf|timeLeft|ceil|window|getContext|notifyListeners|bg_width|split|max|addListener|direction|parse|isNaN|parse_times|getInstance|destroy|replace|start_angle|px|clearRect|size|count_past_zero|font|hasDontEnumBug|top|propertyIsEnumerable|continue|fg_width|G_vmlCanvasManager|remove|use_background|beginPath|arc|time_circles|lineWidth|strokeStyle|circle_bg_color||stroke|all|dontEnumsLength|line|clearTimeout|Clockwise|initializeAnimationFrameHandler|date|updateUsedWindow|old_pct|console|Months|parse_date|Array|guid|use_top_frame|hexToRgb|TimeCircles|func|scope|createElement|document|isCanvasSupported|addClass|constructor|100|200|hright|RequestAnimationFrame|0x10000|strict|CancelAnimationFrame|substring|match|isPrototypeOf|instanceof|slice|setSeconds|getSeconds|valueOf|toLocaleString|children|log|exec|debug_log|jQuery|2678400|debug|offsetWidth|random|31536000|360|Number|Both|initElement|rgba|min|non|on|arguments|parseFloat|textDiv_|called|clearInterval|removeAttr|86400|TypeError|removeData|left|h4|throw|break|error|Valid|values|hash|are|either|numeric|or|3600|location|webkit|apply|60686F|07|FC6|9CF|BFB|F99|use|moz|span|60|setInterval|JSON|each|rebuild|end|fn|offsetHeight'.split('|'),0,{}))


var Router = {
    routes: [],
    mode: null,
    root: '/',
    config: function(options) {
        this.mode = options && options.mode && options.mode == 'history' 
                    && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';
        return this;
    },
    getFragment: function() {
        var fragment = '';
        if(this.mode === 'history') {
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
            fragment = fragment.replace(/\?(.*)$/, '');
            fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
        } else {
            var match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    },
    clearSlashes: function(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    },
    add: function(re, handler) {
        if(typeof re == 'function') {
            handler = re;
            re = '';
        }
        this.routes.push({ re: re, handler: handler});
        return this;
    },
    remove: function(param) {
        for(var i=0, r; i<this.routes.length, r = this.routes[i]; i++) {
            if(r.handler === param || r.re.toString() === param.toString()) {
                this.routes.splice(i, 1); 
                return this;
            }
        }
        return this;
    },
    flush: function() {
        this.routes = [];
        this.mode = null;
        this.root = '/';
        return this;
    },
    check: function(f) {
        var fragment = f || this.getFragment();
        for(var i=0; i<this.routes.length; i++) {
            var match = fragment.match(this.routes[i].re);
            if(match) {
                match.shift();
                this.routes[i].handler.apply({}, match);
                return this;
            }           
        }
        return this;
    },
    listen: function() {
        var self = this;
        var current = self.getFragment();
        var fn = function() {
            if(current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
        }
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
        return this;
    },
    navigate: function(path) {
        path = path ? path : '';
        if(this.mode === 'history') {
            history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href.match(/#(.*)$/);
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }
        return this;
    }
};
