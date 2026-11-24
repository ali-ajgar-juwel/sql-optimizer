window.QPDB={
 state:null,
 async load(){this.state=await QPStore.init();return this.state},
 async save(){await QPStore.set("state",this.state)},
 log(text){this.state.logs.unshift({text,time:new Date().toLocaleString()});this.state.logs=this.state.logs.slice(0,100);this.save()},
 id(prefix){return prefix+"_"+Math.random().toString(36).slice(2,9)},
 project(){return this.state.projects.find(p=>p.id===this.state.activeProject)||this.state.projects[0]},
 esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
};