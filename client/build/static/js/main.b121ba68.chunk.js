(this["webpackJsonptyping-game"]=this["webpackJsonptyping-game"]||[]).push([[0],{40:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),o=a(32),r=a.n(o),l=(a(40),a(33)),c=a(2),d=a(11),h=a(12),u=a(9),b=a(14),m=a(13),g=a(8),p=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={name:"",desc:"",curWord:"temp",input:"",wordBank:"",bankTitles:["English","Spanish","Danish"],title:"",score:0,seconds:60,wordCount:0,bank:0},s.onChange=s.onChange.bind(Object(u.a)(s)),s.countDown=s.countDown.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e="";switch(this.setState({title:this.state.bankTitles[localStorage.getItem("bankID")]}),localStorage.getItem("bankID")){case"0":e=g.eng.split(" "),this.loadBank(e);break;case"1":this.loadBank(g.esp.split(" "));break;case"2":this.loadBank(g.dan.split(" "));break;default:this.props.history.push("/")}}},{key:"loadBank",value:function(e){var t=this;this.setState({wordBank:e},(function(){t.timer=setInterval(t.countDown,1e3),t.getRandomWord()}))}},{key:"getRandomWord",value:function(){var e=Math.floor(Math.random()*this.state.wordBank.length);this.setState({curWord:this.state.wordBank[e]})}},{key:"countDown",value:function(){var e=this.state.seconds-1;this.setState({seconds:e}),0===this.state.seconds&&(clearInterval(this.timer),localStorage.setItem("score",this.state.score),localStorage.setItem("words",this.state.wordCount),this.props.history.push("/scores"))}},{key:"onChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState(t),this.state.input===this.state.curWord&&(this.setState({score:this.state.score+this.state.curWord.length}),this.setState({wordCount:this.state.wordCount+1}),this.getRandomWord(),this.setState({input:""}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container p-2 rounded shadow bg-light",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-4",children:Object(s.jsxs)("h3",{children:["Score: ",this.state.score," Word Count: ",this.state.wordCount]})}),Object(s.jsx)("div",{className:"col-6 text-center",children:Object(s.jsxs)("h3",{children:["Word Bank : ",this.state.title]})}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsxs)("h3",{className:"text-right",children:["Time: ",this.state.seconds]})})]}),Object(s.jsx)("div",{className:"text-center mb-4",children:Object(s.jsx)("h1",{children:this.state.curWord})}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",name:"input",value:this.state.input,onChange:this.onChange,className:"form-control",autocomplete:"off",autoFocus:!0})})]})}}]),a}(n.Component),j=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={name:"",desc:"",bank:["English","Spanish","Danish"],bankDesc:[g.engDesc,g.espDesc,g.danDesc],bdesc:"",bname:"",index:0},s.onChange=s.onChange.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.doesNameExist(),this.setState({bname:this.state.bank[0]}),this.setState({bdesc:this.state.bankDesc[this.state.index]});var e=window.location.href.split("/");e[0],e[2]}},{key:"doesNameExist",value:function(){""===localStorage.getItem("name")&&null===localStorage.getItem("name")||this.setState({name:localStorage.getItem("name")})}},{key:"onChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,this.setState(t)}},{key:"changeIndex",value:function(e){var t=this;0===this.state.index&&e<0?this.setState({index:this.state.bank.length-1},(function(){t.setState({bname:t.state.bank[t.state.index]}),t.setState({bdesc:t.state.bankDesc[t.state.index]})})):this.state.index===this.state.bank.length-1&&e>0?this.setState({index:0},(function(){t.setState({bname:t.state.bank[t.state.index]}),t.setState({bdesc:t.state.bankDesc[t.state.index]})})):this.setState({index:this.state.index+e},(function(){t.setState({bname:t.state.bank[t.state.index]}),t.setState({bdesc:t.state.bankDesc[t.state.index]})}))}},{key:"onConfirm",value:function(){""!==this.state.name&&(localStorage.setItem("name",this.state.name),localStorage.setItem("bankID",this.state.index),this.props.history.push("/game"))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container p-2 rounded shadow bg-light",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col mb-3",children:Object(s.jsx)("input",{type:"text",placeholder:"name",name:"name",value:this.state.name,onChange:this.onChange,className:"form-control"})})}),Object(s.jsxs)("div",{className:"row col mb-3 m-0 p-0",children:[Object(s.jsx)("div",{className:"col-1 p-0",children:Object(s.jsx)("button",{className:"btn btn-lg btn-primary btn-block",onClick:function(){return e.changeIndex(-1)},children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})})})}),Object(s.jsx)("div",{className:"col-10 text-center",children:Object(s.jsx)("h1",{children:this.state.bname})}),Object(s.jsx)("div",{className:"col-1 p-0",children:Object(s.jsx)("button",{className:"btn btn-lg btn-primary btn-block float-right",onClick:function(){return e.changeIndex(1)},children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})})})})]}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("p",{children:this.state.bdesc})}),Object(s.jsx)("button",{class:"btn btn-primary w-100",onClick:function(){return e.onConfirm()},children:" Submit"})]})}}]),a}(n.Component),k=a(15),f=a.n(k),v=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(e){var s;Object(d.a)(this,a),s=t.call(this,e);var n=window.location.href.split("/"),i=n[0]+"//"+n[2];return s.state={word:"",input:"",scores:[],bid:0,bname:"",count:0,bank:["English","Spanish","Danish"],path:i},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){console.log(this.state.path+"/api/"),this.setState({bid:localStorage.getItem("bankID")}),localStorage.getItem("bankID")?(this.setState({bname:this.state.bank[localStorage.getItem("bankID")]}),this.saveScore()):(this.setState({bname:"!Invalid Bank!"}),this.props.history.push("/"))}},{key:"saveScore",value:function(){var e=this,t=localStorage.getItem("bankID"),a=localStorage.getItem("name"),s=localStorage.getItem("score"),n=localStorage.getItem("words");console.log("nametest: "+a),console.log("score "+s),console.log("words "+n),localStorage.removeItem("bankID"),localStorage.removeItem("score"),localStorage.removeItem("words"),f.a.get(this.state.path+"/api/score/count/"+t).then((function(t){e.setState({count:t.data})})).finally((function(){e.state.count>=10?f.a.get(e.state.path+"/api/score/board/"+e.state.bid).then((function(t){e.setState({scores:t.data})})).finally((function(){var i=e.state.scores;i.sort((function(e,t){return e.value-t.value}));for(var o=!1,r=0;r<=30;r++){if(!0===o)return;if(s>i[r].score){f.a.put(e.state.path+"/api/score/"+i[r]._id,{bid:t,name:a,score:s,words:n}),o=!0;var l={};l.bid=t,l.name=a,l.score=s,l.words=n,i.splice(i.length-1,1),i.push(l),i.sort((function(e,t){return t.score-e.score})),e.setState({scores:i})}}})):f.a.post(e.state.path+"/api/score/",{bid:t,name:a,score:s,words:n}).finally((function(){e.getScores()}))}))}},{key:"getScores",value:function(){var e=this;f.a.get(this.state.path+"/api/score/board/"+this.state.bid).then((function(t){e.setState({scores:t.data})}))}},{key:"onConfirm",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container p-2 rounded shadow bg-light",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsxs)("h3",{children:["Top Scores For ",this.state.bname]})}),Object(s.jsx)("div",{className:"",children:Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{className:"thead-dark",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Rank"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Score"}),Object(s.jsx)("th",{scope:"col",children:"Words"})]})}),this.state.scores.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:t+1},t),Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.score}),Object(s.jsx)("td",{children:e.words})]})}))]})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{class:"btn btn-primary w-100",onClick:function(){return e.onConfirm()},children:"Return"})})]})}}]),a}(n.Component);a(59);var x=function(){return Object(s.jsx)("main",{className:"main full-height h-100 w-100 bg-dark",children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(c.b,{path:"/",component:Object(c.f)(j),exact:!0}),Object(s.jsx)(c.b,{path:"/game",component:Object(c.f)(p)}),Object(s.jsx)(c.b,{path:"/scores",component:Object(c.f)(v)}),Object(s.jsx)(c.b,{render:function(){return Object(s.jsx)(c.a,{to:{pathname:"/"}})}})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),i(e),o(e)}))};a(31),a(64),a(65),a(66);r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),y()},8:function(e){e.exports=JSON.parse('{"eng":"aardvark aaron abacuses abolitionism aboveground acclimates acclimating aces actuators adjudications aesthetically afoot aggravatingly anatomically andalusian anglophobia animated anointed archaeologically artlessly bulldozing browsing broiled brightening bricklaying breathlessly brazzaville bracelets bountiful borrowers bordello bootleggers boomerangs bookkeeping bonaventure crepuscular creating creakiest cravenness cowardliness counterexample clarification circumstantially gurgling gush gulpingly groundlessness globetrotter gesticulating geographically gastrointestinal furtherance fundamentalists fulfillment frequencies fossiliferous foamflower fisherman fastidiously expository holidaymaker hoisted hoarseness histrionically hexafluoride hesitatingly hermaphrodites hematology ignominiously idiosyncrasies identifications immobilization impatiently imponderousness improvidentially inalienability incapabilities infinitesimally juxtaposition kafkaesque kampuchea kazakhstan kerosene kinesthetically kleptomaniacs knickerbockers knowledgeable lackadaisical lamentations lasciviously lattermost leeringly legitimately lepidoptera macedonia machiavellianism meaningless meticulously minneapolis mollycoddling mudslinging namelessness nationalizations nebraska necromantic nitrobenzene northbound oatmeal obediences obtrusiveness odoriferously oligarchical optimistically osmotically pacemakers painfulness parallelogram parenthesized peacefulness pepperoni permutations philanthropically plainclothes practicability prevarications publications quadragenarians quarantines quickened rachmaninoff racketeering radioastronomy ramifications readmittance recidivists remembrance restrictively scapegoating scandalizing savableness saute seismograph sheepishness shortsightedness sinker slovenliness sociocultural squiggly straggle studs suicidal suppose tabula tanglement teems tench theist thoughtlessness tiffs totes turnaround ukrainian ubiquitously unaccountableness unadvertised unamortized unattuned unconstitutionally undernourishment unenforcible ungrumblingly unmanufactured unscholarliness unsung vaccinator vaingloriousness vauxhall vehicular vibratability vilify vulnerability waffling waistcoat wallflowers watercolorist weatherbeaten wheelwright woolgather xylophones xenon youthfully zabaglione zanzibar zoroastrian zip","esp":"abaceros absorbentes agarrotaba ametrallo antojaba brincarais breve bucal brava brida cabalgar centuplicas chaflanes cuneabais cuticula dadivoso deambularais dispendios dramatizas ducado ebriedad efectivas egoismo ejecutas exultaremos fabricaba federamos fichases flagelar fustiguemos gabardina gritador grosella gruta guillotinada habana hechura hidrocarburo holgan hueso ibais ignorar ilumina impaciencia isomorfo jabona jeringada juntan juzgases juzgaba kilogramo kilometraje kilovatio kurdo kirie labial leches liberada llamada lucimos macabra menestra mosaica murmuremos mutualismo nacen necesitan nivelabas nombre nutriese obedece obliteran ofende oleosa oxidaciones paciencias perseveras pianista planchabais puntoso quebraba quince quitas quitaste quitar rabeaba reabres recios rumiasen rumorean sabe secado sensibilice separaba subarrendado tallaba temamos tenuidad tiernas tuvierais ubicaba ufanado ujier ulceroso ultranz vacabais vecinas venden vibra votivo wall wat whiski whiskies whisky xenofobia xenofobias yacemos yergue yodado yunques yuxtaponer zafada zelanda zigzages zonzo zutano","dan":"abbeder abonnement adskillelsen afdelingsnummer applikations badstue begyndelsespunkterne beliggenhed beskrivelserne bygningen cayennepeber civiliserede cosinus cykel cyklonen dagbladet darwinisme dekode dokumenter ebcdic effekt egoistisk eksempler erkendelsesteoretisk evig fabelagtigt fejlfri fikse flytte fungere gager gesandtskab gottorp greveligt grundform hackere heltallig historietime hjerteimpuls humanistiske idegrundlag improvisere internat isolering isse japansk jernbeton jorddag jura journalistik kageskeer kejsertanke kildeteksterne klinisk kolossale ladning lensbrev lilleakse lysende lynne madolie medarbejder middelalder mure myrra nordre novellen nuanceret numerisk obersten offervilje ofring oldefar omdirigeres pakken pengeinstitut perry personlig pigers rabatter reaktionen rensdyr rodfunktion rundvisningen sadisme sekstende servicere sigende slutelement subtraktion tabellerne tekstfiler tilfredse torden tvetydig tydelig uadelige ubekendt udbredt uddannede udgjort vakuum vejret videoplade vundet volumen wessels wien withs walter willis zink zoologi zoologisk zonens zar","engDesc":"A bank of English words. The largest bank, the bank has words that range from A to Z.","espDesc":"A bank of Spanish words. A smaller bank, the bank has words that range from A to Z.","danDesc":"A bank of Danish words. A smaller bank, the bank has words that range from A to Z."}')}},[[67,1,2]]]);
//# sourceMappingURL=main.b121ba68.chunk.js.map