import{s as r}from"./state-662e3508.js";import{_ as l,o as p,c as m,a,n as d,t as u,w as g,b as f,v as _,F as b,p as v,d as w,e as y}from"./index-20a46d4c.js";const A={data(){return{store:r,chooseTime:15,promptUser:"",api:"",imageAi:"",promptAi:"",placeholderAi:"",resClass:"bg-danger",currentPourcentQuestion:0,timePourcent:"0",help:"Proposez ci-dessous",disabled:!1,timing:"",myTimer:"",bestScore:0}},watch:{promptUser(){this.currentPourcentQuestion=this.similarity(this.promptAi,this.promptUser),this.help="Réponse correcte à "+this.currentPourcentQuestion+"%",this.currentPourcentQuestion>this.bestScore&&(this.bestScore=this.currentPourcentQuestion),this.promptUser.toLowerCase().trim()==this.promptAi.toLowerCase().trim()&&(this.resClass="bg-success",this.disabled=!0,clearInterval(this.myTimer),this.bestScore=100,this.timing=100)},timing(){document.getElementById("progressPrompt").style.width=this.timing+"%",this.timing==100&&(this.disabled=!0,r.questionNumber++,r.promptAi=this.promptAi,r.bestScore=this.bestScore,r.pourcentQuestions.push(this.bestScore),setTimeout(()=>{this.$router.push({path:"/answer"})},1e3))}},methods:{generateRandom(t,e){var s=Math.floor(Math.random()*(e-t+1))+t;return r.arrayQuestionsNumbers.includes(s)?this.generateRandom(t,e):s},async fetchData(){this.api=null;const t=await fetch("api.json");this.api=await t.json();let e=this.generateRandom(1,this.api.length);r.arrayQuestionsNumbers.push(e),this.imageAi=this.api[e].image,this.promptAi=this.api[e].prompt,this.placeholderAi=this.api[e].indice},similarity(t,e){var s=t,o=e;t.length<e.length&&(s=e,o=t);var i=s.length;return i==0?1:Math.trunc((i-this.editDistance(s,o))/parseFloat(i)*100)},editDistance(t,e){t=t.toLowerCase(),e=e.toLowerCase();for(var s=new Array,o=0;o<=t.length;o++){for(var i=o,n=0;n<=e.length;n++)if(o==0)s[n]=n;else if(n>0){var h=s[n-1];t.charAt(o-1)!=e.charAt(n-1)&&(h=Math.min(Math.min(h,i),s[n])+1),s[n-1]=i,i=h}o>0&&(s[e.length]=i)}return s[e.length]},timer(){let t=this.chooseTime,e=t+2;this.myTimer=setInterval(()=>{let s=parseInt(t*100/this.chooseTime,10);this.timing=100-s,t=t<=0?0:t-1,e=e<=0?0:e-1,e<=0&&(this.disabled=!0)},1e3)}},mounted(){r.questionNumber==1&&(r.pourcentQuestions=[],r.totalPourcent=0,r.bestScore=0),this.$nextTick(()=>this.$refs.focusMe.focus()),this.fetchData(),this.timer()}},c=t=>(v("data-v-103d60c7"),t=t(),w(),t),S=c(()=>a("img",{src:y,id:"logo",alt:"logo pictionAi"},null,-1)),P={class:"questionContent"},Q={class:"fullwidth"},C=["src"],M={class:"progress"},T={id:"insideHelp"},I=c(()=>a("br",null,null,-1)),U=["placeholder","disabled"];function x(t,e,s,o,i,n){return p(),m(b,null,[S,a("div",P,[a("div",Q,[a("img",{src:i.imageAi,class:"ai",alt:"devinette"},null,8,C)]),a("div",M,[a("div",{class:d([i.resClass,"progress-bar"]),role:"progressbar","aria-valuemin":"0","aria-valuemax":"100",id:"progressPrompt",style:{width:"0"}},[a("div",T,u(i.help),1)],2)]),I,a("form",{onSubmit:e[1]||(e[1]=g(()=>{},["prevent"]))},[f(a("input",{type:"text",placeholder:i.placeholderAi,class:"form-control input promptUser","onUpdate:modelValue":e[0]||(e[0]=h=>i.promptUser=h),ref:"focusMe","aria-disabled":"false",disabled:i.disabled},null,8,U),[[_,i.promptUser]])],32)])],64)}const L=l(A,[["render",x],["__scopeId","data-v-103d60c7"]]);export{L as default};