"use strict";(self.webpackChunktimer=self.webpackChunktimer||[]).push([[903],{61:(P,g,r)=>{r.d(g,{o:()=>p});class p{constructor(){this.id_empresa=0,this.id=0,this.id_projeto=0,this.id_conta="",this.id_conta_versao="0101",this.id_subconta="",this.id_subcliente=0,this.id_resp=0,this.id_exec=0,this.id_motivo="",this.produtivo="",this.inicial="",this.final="",this.obs="",this.horasapon=0,this.encerramento="N",this.nlanc=0,this.user_insert=0,this.user_update=0,this.conta_descricao="",this.grupo_descricao="",this.estru_descricao="",this.resp_razao="",this.exec_razao="",this.proj_descricao="",this.motivo_descricao="",this.motivo_produtivo="",this.ativ_inicial="",this.ativ_final="",this.cli_razao=""}}},1802:(P,g,r)=>{r.r(g),r.d(g,{DataEspecialModule:()=>_a});var p=r(8583),m=r(4655),_=r(9243),S=r(1441),I=r(320),Q=r(5062),l=r(3032),A=r(3430),c=r(7117),a=r(7716),u=r(3679),x=r(1558),q=r(789),y=r(6748),M=r(5626),U=r(2522),G=r(3968),F=r(1095),R=r(1436),j=r(6627),b=r(8295),N=r(7441),w=r(9983),J=r(2458),$=r(7234);function z(o,s){if(1&o&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&o){const e=s.$implicit;a.Q6J("value",e),a.xp6(1),a.hij(" ",e," ")}}function K(o,s){if(1&o&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&o){const e=s.$implicit;a.Q6J("value",e),a.xp6(1),a.hij(" ",e," ")}}function L(o,s){if(1&o){const e=a.EpF();a.TgZ(0,"tr"),a.TgZ(1,"td"),a.TgZ(2,"div"),a.TgZ(3,"mat-label",20),a._uU(4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(5,"td"),a.TgZ(6,"div"),a.TgZ(7,"mat-label",20),a._uU(8),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"td"),a.TgZ(10,"div"),a.TgZ(11,"mat-label",20),a._uU(12),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"td"),a.TgZ(14,"div"),a.TgZ(15,"mat-label",20),a._uU(16),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"td"),a.TgZ(18,"div"),a.TgZ(19,"mat-label",20),a._uU(20),a.qZA(),a.qZA(),a.qZA(),a.TgZ(21,"td",21),a.TgZ(22,"barra-acoes",22),a.NdJ("changeOpcao",function(i){const d=a.CHM(e).$implicit;return a.oxw().escolha(i,d)}),a.qZA(),a.qZA(),a.qZA()}if(2&o){const e=s.$implicit;a.xp6(4),a.Oqu(e.data),a.xp6(4),a.AsE("",e.id_usuario,"-",e.usu_nome,""),a.xp6(4),a.Oqu(e.subconta_descricao),a.xp6(4),a.Oqu(e.atividade_descricao),a.xp6(4),a.Oqu(e.descricao),a.xp6(2),a.Q6J("BARRA_ATIVIDADES",!1)("EXCLUIR",!1)}}let D=(()=>{class o{constructor(e,t,i,n,d,h,Z){this.formBuilder=e,this.feriadoService=t,this.router=i,this.route=n,this.appSnackBar=d,this.globalService=h,this.parametrosService=Z,this.feriados=[],this.erro="",this.opcoesOrdenacao=[],this.opcoesCampo=[],this.tamPagina=50,this.controlePaginas=new A.e(this.tamPagina,0),this.retorno=!1,this.parametro=new S.M,this.parametros=e.group({ordenacao:[null],campo:[null],filtro:[null]}),this.inscricaoRota=n.params.subscribe(O=>{void 0===O.retorno?this.retorno=!1:(this.retorno=!0,this.globalService.estadoFind("feriado"))})}ngOnInit(){this.loadParametros()}ngOnDestroy(){var e,t,i,n,d;null===(e=this.inscricaoGetAll)||void 0===e||e.unsubscribe(),null===(t=this.inscricaoParametro)||void 0===t||t.unsubscribe(),null===(i=this.inscricaoRota)||void 0===i||i.unsubscribe(),null===(n=this.inscricaoApiBrasil)||void 0===n||n.unsubscribe(),null===(d=this.inscricaoSaveFeriado)||void 0===d||d.unsubscribe()}escolha(e,t){if(void 0!==t){let i=this.parametro.getParametro();Object(i).new=!1,Object(i).id_retorno=t.data.toString(),Object(i).page=this.controlePaginas.getPaginalAtual(),Object(i).op_ordenacao=this.opcoesOrdenacao.findIndex(n=>this.parametros.value.ordenacao==n),Object(i).op_pesquisar=this.opcoesCampo.findIndex(n=>this.parametros.value.campo==n),Object(i).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(i),this.globalService.estadoSave(this.parametro),this.router.navigate(["/especiais/especial",t.id_empresa,t.id_usuario,t.id_tipo,t.data,e])}else{let i=this.parametro.getParametro();Object(i).new=!1,Object(i).id_retorno=0,Object(i).page=this.controlePaginas.getPaginalAtual(),Object(i).op_ordenacao=this.opcoesOrdenacao.findIndex(n=>this.parametros.value.ordenacao==n),Object(i).op_pesquisar=this.opcoesCampo.findIndex(n=>this.parametros.value.campo==n),Object(i).descricao=this.parametros.value.filtro,this.parametro.parametro=JSON.stringify(i),this.globalService.estadoSave(this.parametro),this.router.navigate(["/especiais/especial",this.globalService.getIdEmpresa,this.globalService.getUsuario().id,0,"",e])}}getAcoes(){return l.I}getFeriados(){let e=new I.$;e.id_empresa=1,e.id_tipo=2,e.orderby="Data","Data"==this.parametros.value.campo&&(e.data=this.parametros.value.filtro),"Descri\xe7\xe3o"==this.parametros.value.campo&&(e.descricao=this.parametros.value.filtro.toUpperCase()),"Ano"==this.parametros.value.campo&&(e.ano=this.parametros.value.filtro),"Tipo"==this.parametros.value.campo&&(e.id_tipo=0),e.orderby=this.parametros.value.ordenacao,e.contador="N",e.tamPagina=this.tamPagina,e.pagina=this.controlePaginas.getPaginalAtual(),this.globalService.setSpin(!0),this.inscricaoGetAll=this.feriadoService.getFeriados_01(e).subscribe(t=>{this.globalService.setSpin(!1),this.feriados=t,console.log(this.feriados);const i=this.feriados.findIndex(d=>d.data==(0,c.SL)(this.parametro.getParametro(),"id_retorno"));setTimeout(()=>this.viewPort.scrollToIndex(i),10),this.retorno=!1;let n=this.parametro.getParametro();Object(n).id_retorno=0,Object(n).new=!1,this.parametro.parametro=JSON.stringify(n)},t=>{let i=this.parametro.getParametro();Object(i).id_retorno=0,Object(i).new=!1,this.retorno=!1,this.globalService.setSpin(!1),this.feriados=[],this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Feriados ${(0,c.bZ)(t)}`,"OK")})}getFeriadosContador(){let e=new I.$;e.id_empresa=1,e.id_tipo=2,e.orderby="Data","Data"==this.parametros.value.campo&&(e.data=this.parametros.value.filtro),"Descri\xe7\xe3o"==this.parametros.value.campo&&(e.descricao=this.parametros.value.filtro.toUpperCase()),"Ano"==this.parametros.value.campo&&(e.ano=this.parametros.value.filtro),"Tipo"==this.parametros.value.campo&&(e.id_tipo=0),e.ano=this.parametros.value.filtro,e.orderby=this.parametros.value.ordenacao,e.contador="S",e.tamPagina=this.tamPagina,this.globalService.setSpin(!0),this.inscricaoGetAll=this.feriadoService.getFeriados_01(e).subscribe(t=>{if(this.globalService.setSpin(!1),this.controlePaginas=new A.e(this.tamPagina,0==t.total?1:t.total),this.retorno)if((0,c.xc)(this.parametro.getParametro(),"new"))this.controlePaginas.goLast();else{let i=this.parametro.getParametro();this.controlePaginas.setPaginaAtual(Object(i).page)}this.getFeriados()},t=>{this.globalService.setSpin(!1),this.controlePaginas=new A.e(this.tamPagina,0),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Feriados ${(0,c.bZ)(t)}`,"OK")})}getParametro(){this.globalService.setSpin(!0);let e=new Q.E;e.id_empresa=this.parametro.id_empresa,e.modulo=this.parametro.modulo,e.assinatura=this.parametro.assinatura,e.id_usuario=this.parametro.id_usuario,e.orderby="Usu\xe1rio",this.inscricaoParametro=this.parametrosService.getParametrosParametro01(e).subscribe(t=>{this.globalService.setSpin(!1),this.parametro=new S.M,this.parametro.id_empresa=t[0].id_empresa,this.parametro.modulo=t[0].modulo,this.parametro.id_usuario=t[0].id_usuario,this.parametro.assinatura=t[0].assinatura,this.parametro.parametro=t[0].parametro,this.parametro.user_insert=t[0].user_insert,this.parametro.user_update=t[0].user_update,this.opcoesOrdenacao=(0,c.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,c.FO)(this.parametro.getParametro(),"pesquisar"),this.setValues(),this.getFeriadosContador()},t=>{this.globalService.setSpin(!1),this.setValues(),this.getFeriadosContador()})}updateParametros(){this.globalService.setSpin(!0),this.parametro.user_insert=this.globalService.usuario.id,this.parametro.user_update=this.globalService.usuario.id;let e=this.parametro.getParametro();Object(e).op_ordenacao=this.opcoesOrdenacao.findIndex(t=>this.parametros.value.ordenacao==t),Object(e).op_pesquisar=this.opcoesCampo.findIndex(t=>this.parametros.value.campo==t),Object(e).descricao=this.parametros.value.filtro,Object(e).page=0,Object(e).new=!1,this.parametro.parametro=JSON.stringify(e),this.inscricaoParametro=this.parametrosService.ParametroAtualiza(this.parametro).subscribe(t=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar("Par\xe2metros Atualizados","OK")},t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Grava\xe7\xe3o Dos Parametros ${(0,c.bZ)(t)}`,"OK")})}setValues(){this.parametros.setValue({ordenacao:this.opcoesOrdenacao[(0,c.P0)(this.parametro.getParametro(),"op_ordenacao")],campo:this.opcoesCampo[(0,c.P0)(this.parametro.getParametro(),"op_pesquisar")],filtro:(0,c.SL)(this.parametro.getParametro(),"descricao")})}getTexto(){return c.fd}onChangePage(){this.getFeriados()}onChangeParametros(){this.getFeriadosContador()}onHome(){this.router.navigate([""])}onSaveConfig(){this.updateParametros()}loadParametros(){if(this.parametro=new S.M,this.parametro.id_empresa=this.globalService.getIdEmpresa(),this.parametro.modulo="especial",this.parametro.assinatura="V1.00 21/03/2024",this.parametro.id_usuario=this.globalService.usuario.id,this.parametro.parametro='\n      {\n        "op_ordenacao": 0,\n        "ordenacao": ["Data", "Descri\xe7\xe3o"],\n        "op_pesquisar": 1,\n        "pesquisar": ["Data", "Descri\xe7\xe3o", "Ano" , "Tipo"],\n        "descricao": "",\n        "page": 1,\n        "new": false,\n        "id_retorno":""\n      }',this.opcoesOrdenacao=(0,c.FO)(this.parametro.getParametro(),"ordenacao"),this.opcoesCampo=(0,c.FO)(this.parametro.getParametro(),"pesquisar"),this.retorno&&null!==this.globalService.estadoFind("feriado")){const e=this.globalService.estadoFind("feriado");if(null!=e){if((0,c.xc)(e.getParametro(),"new")){let t=this.parametro.getParametro();Object(t).id_retorno=(0,c.P0)(e.getParametro(),"id_retorno"),this.parametro.parametro=JSON.stringify(t),this.setPosicaoInclusao()}else this.controlePaginas.setPaginaAtual((0,c.P0)(e.getParametro(),"page")),this.parametro.setParametro(e.getParametro());this.globalService.estadoDelete(e)}this.setValues(),this.getFeriadosContador()}else this.getParametro()}setPosicaoInclusao(){const e=this.parametro.getParametro();Object(e).op_ordenacao=0,Object(e).op_pesquisar=0,Object(e).descricao="",Object(e).new=!0,this.parametro.setParametro(e)}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(u.qu),a.Y36(x.v),a.Y36(m.F0),a.Y36(m.gz),a.Y36(q.W),a.Y36(y.U),a.Y36(M.u))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-crud-especial"]],viewQuery:function(e,t){if(1&e&&a.Gf(_.N7,5),2&e){let i;a.iGM(i=a.CRH())&&(t.viewPort=i.first)}},decls:49,vars:7,consts:[[1,"div-barra"],[1,"example-spacer"],[3,"controle","changePage"],["mat-icon-button","","aria-label","Example icon-button with share icon","matTooltip","Atualizar","matTooltipPosition","above",1,"example-icon",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above","matTooltip","Salvar Par\xe2metros","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltip","Retorno","matTooltipPosition","above",3,"click"],["mat-icon-button","","aria-label","Example icon-button with share icon ","matTooltipPosition","above",3,"matTooltip","click"],[1,"parametros"],["autocomplete","off",1,"col-med-4",3,"formGroup"],["field","","appearance","outline",1,"col-max"],["formControlName","ordenacao",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","campo",3,"selectionChange"],["appearance","outline",1,"col-max","column-span-2"],["matInput","","formControlName","filtro","oninput","this.value = this.value.toUpperCase()"],[1,"content",3,"itemSize"],[1,"Browse-Scroll"],[1,"coluna-cabec"],[4,"cdkVirtualFor","cdkVirtualForOf"],[3,"value"],[1,"Browse_Lanc_td"],[1,"acoes"],[3,"BARRA_ATIVIDADES","EXCLUIR","changeOpcao"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"mat-toolbar"),a.TgZ(2,"span",1),a._uU(3,"Datas Especiais: "),a.qZA(),a.TgZ(4,"app-navegator",2),a.NdJ("changePage",function(){return t.onChangePage()}),a.qZA(),a.TgZ(5,"button",3),a.NdJ("click",function(){return t.getFeriadosContador()}),a.TgZ(6,"mat-icon"),a._uU(7,"rotate_right"),a.qZA(),a.qZA(),a.TgZ(8,"button",4),a.NdJ("click",function(){return t.onSaveConfig()}),a.TgZ(9,"mat-icon"),a._uU(10,"brightness_high"),a.qZA(),a.qZA(),a.TgZ(11,"button",5),a.NdJ("click",function(){return t.onHome()}),a.TgZ(12,"mat-icon"),a._uU(13,"home"),a.qZA(),a.qZA(),a.TgZ(14,"button",6),a.NdJ("click",function(){return t.escolha(t.getAcoes().Inclusao)}),a.TgZ(15,"mat-icon"),a._uU(16,"add_circle_outline"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"div",7),a.TgZ(18,"form",8),a.TgZ(19,"mat-form-field",9),a.TgZ(20,"mat-label"),a._uU(21,"Ordena\xe7\xe3o"),a.qZA(),a.TgZ(22,"mat-select",10),a.NdJ("selectionChange",function(){return t.onChangeParametros()}),a.YNc(23,z,2,2,"mat-option",11),a.qZA(),a.qZA(),a.TgZ(24,"mat-form-field",9),a.TgZ(25,"mat-label"),a._uU(26,"Pesquisar Por"),a.qZA(),a.TgZ(27,"mat-select",12),a.NdJ("selectionChange",function(){return t.onChangeParametros()}),a.YNc(28,K,2,2,"mat-option",11),a.qZA(),a.qZA(),a.TgZ(29,"mat-form-field",13),a.TgZ(30,"mat-label"),a._uU(31,"Descri\xe7\xe3o"),a.qZA(),a._UZ(32,"input",14),a.qZA(),a.qZA(),a.qZA(),a.TgZ(33,"cdk-virtual-scroll-viewport",15),a.TgZ(34,"table",16),a.TgZ(35,"tr",17),a.TgZ(36,"th"),a._uU(37,"Data"),a.qZA(),a.TgZ(38,"th"),a._uU(39,"Usu\xe1rio"),a.qZA(),a.TgZ(40,"th"),a._uU(41,"Grupo"),a.qZA(),a.TgZ(42,"th"),a._uU(43,"Atividade"),a.qZA(),a.TgZ(44,"th"),a._uU(45,"Descri\xe7\xe3o"),a.qZA(),a.TgZ(46,"th"),a._uU(47,"A\xc7\xd5ES"),a.qZA(),a.qZA(),a.YNc(48,L,23,8,"tr",18),a.qZA(),a.qZA()),2&e&&(a.xp6(4),a.Q6J("controle",t.controlePaginas),a.xp6(10),a.Q6J("matTooltip",t.getTexto().incluir),a.xp6(4),a.Q6J("formGroup",t.parametros),a.xp6(5),a.Q6J("ngForOf",t.opcoesOrdenacao),a.xp6(5),a.Q6J("ngForOf",t.opcoesCampo),a.xp6(5),a.Q6J("itemSize",50),a.xp6(15),a.Q6J("cdkVirtualForOf",t.feriados))},directives:[U.Ye,G.J,F.lW,R.gM,j.Hw,u._Y,u.JL,u.sg,b.KE,b.hX,N.gD,u.JJ,u.u,p.sg,w.Nt,u.Fj,_.N7,_.xd,_.x0,J.ey,$.C],styles:['.content[_ngcontent-%COMP%]{height:60%;overflow:auto}.Browse-Scroll[_ngcontent-%COMP%]{border-collapse:collapse;margin-left:auto;margin-right:auto;width:100%;height:inherit}td[_ngcontent-%COMP%]{font-size:small;color:#00f;font-family:"Times New Roman",Times,serif}tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2aa}tr[_ngcontent-%COMP%]:hover{background-color:#caa99d}.acoes[_ngcontent-%COMP%]{color:#8b0000;width:100px}.go-up[_ngcontent-%COMP%]{margin-top:-10px}']}),o})();var C=r(8239),T=r(9071),V=r(9267),H=r(6468),E=r(3962),Y=r(3525),f=r(3211),X=r(2401),W=r(1209),aa=r(1843),ea=r(9715),B=r(1491);function ta(o,s){if(1&o&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&o){const e=a.oxw();let t;a.xp6(1),a.hij(" ",null==(t=e.formulario.get("data"))||null==t.errors?null:t.errors.message,"")}}function ia(o,s){if(1&o&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&o){const e=s.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.razao," ")}}function oa(o,s){if(1&o&&(a.TgZ(0,"mat-form-field",16),a.TgZ(1,"mat-label"),a._uU(2,"Usu\xe1rio"),a.qZA(),a.TgZ(3,"mat-select",17),a.YNc(4,ia,2,2,"mat-option",18),a.qZA(),a.qZA()),2&o){const e=a.oxw();a.xp6(4),a.Q6J("ngForOf",e.lsUsuarios)}}function ra(o,s){if(1&o&&(a.TgZ(0,"mat-form-field",16),a.TgZ(1,"mat-label"),a._uU(2,"Usu\xe1rio"),a.qZA(),a._UZ(3,"input",20),a.qZA()),2&o){const e=a.oxw();a.xp6(3),a.Q6J("readonly",e.readOnlyKey())}}function sa(o,s){if(1&o&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&o){const e=s.$implicit;a.Q6J("value",e.subconta.substring(0,4)),a.xp6(1),a.hij(" ",e.estru_descri," ")}}function na(o,s){if(1&o){const e=a.EpF();a.TgZ(0,"mat-form-field",21),a.TgZ(1,"mat-label"),a._uU(2,"Grupos"),a.qZA(),a.TgZ(3,"mat-select",22),a.NdJ("selectionChange",function(){return a.CHM(e),a.oxw().onChangeGrupos()}),a.YNc(4,sa,2,2,"mat-option",18),a.qZA(),a.qZA()}if(2&o){const e=a.oxw();a.xp6(4),a.Q6J("ngForOf",e.grupos)}}function la(o,s){if(1&o&&(a.TgZ(0,"mat-form-field",21),a.TgZ(1,"mat-label"),a._uU(2,"Grupo"),a.qZA(),a._UZ(3,"input",23),a.qZA()),2&o){const e=a.oxw();a.xp6(3),a.Q6J("readonly",e.readOnly)}}function ca(o,s){if(1&o&&(a.TgZ(0,"mat-option",19),a._uU(1),a.qZA()),2&o){const e=s.$implicit;a.Q6J("value",e.subconta.trim()),a.xp6(1),a.hij(" ",e.estru_descri," ")}}function ua(o,s){if(1&o&&(a.TgZ(0,"mat-form-field",21),a.TgZ(1,"mat-label"),a._uU(2,"Atividades"),a.qZA(),a.TgZ(3,"mat-select",24),a.YNc(4,ca,2,2,"mat-option",18),a.qZA(),a.qZA()),2&o){const e=a.oxw();a.xp6(4),a.Q6J("ngForOf",e.atividades)}}function da(o,s){if(1&o&&(a.TgZ(0,"mat-form-field",21),a.TgZ(1,"mat-label"),a._uU(2,"Atividade"),a.qZA(),a._UZ(3,"input",25),a.qZA()),2&o){const e=a.oxw();a.xp6(3),a.Q6J("readonly",e.readOnly)}}function pa(o,s){if(1&o&&(a.TgZ(0,"mat-error"),a._uU(1),a.qZA()),2&o){const e=a.oxw();let t;a.xp6(1),a.hij(" ",null==(t=e.formulario.get("descricao"))||null==t.errors?null:t.errors.message,"")}}function ma(o,s){if(1&o){const e=a.EpF();a.TgZ(0,"button",26),a.NdJ("click",function(){return a.CHM(e),a.oxw().onSubmit()}),a.TgZ(1,"mat-icon"),a._uU(2,"check"),a.qZA(),a._uU(3),a.qZA()}if(2&o){const e=a.oxw();a.xp6(3),a.hij(" ",e.acao," ")}}const ha=[{path:"",redirectTo:"especiais",pathMatch:"full"},{path:"especiais",component:D},{path:"especiais/:retorno",component:D},{path:"especial/:id_empresa/:id_usuario/:id_tipo/:data/:acao",component:(()=>{class o{constructor(e,t,i,n,d,h,Z,O,k){this.formBuilder=e,this.feriadosService=t,this.usuariosService=i,this.projetosService=n,this.atividadesService=d,this.globalService=h,this.route=Z,this.router=O,this.appSnackBar=k,this.tipos_data=this.globalService.getlsTiposData(),this.niveis_data=this.globalService.getlsNiveisData(),this.feriado=new T.u,this.acao="Sem Defini\xe7\xe3o",this.idAcao=l.I.Inclusao,this.readOnly=!0,this.labelCadastro="Cadastro De Datas Especiais",this.id_empresa=0,this.id_usuario=0,this.id_tipo=0,this.data="",this.lsUsuarios=[],this.contrato=new Y.w,this.conta=new f.o,this.grupo=new f.o,this.grupos=[],this.atividade=new f.o,this.atividades=[],this.formulario=e.group({data:[{value:""},[(0,X.K)(!0)]],id_grupo:[{value:""},[u.kI.required]],id_grupo_:[{value:""}],id_atividade:[{value:""},[u.kI.required,(0,V.S)(1,15,!0)]],id_atividade_:[{value:""}],usuario:[{value:""},[u.kI.min(1)]],usuario_:[{value:""}],descricao:[{value:""},[(0,V.S)(1,50,!0)]]}),this.feriado=new T.u,this.inscricaoRota=Z.params.subscribe(v=>{this.id_empresa=v.id_empresa,this.id_usuario=v.id_usuario,this.id_tipo=v.id_tipo,this.data=v.data,this.idAcao=v.acao,this.setAcao(v.acao)}),this.grupos.push(new f.o),this.atividades.push(new f.o),this.setValue()}ngOnInit(){this.getProjeto()}ngOnDestroy(){var e,t,i,n,d,h;null===(e=this.inscricaoGetFeriado)||void 0===e||e.unsubscribe(),null===(t=this.inscricaoGetUsuarios)||void 0===t||t.unsubscribe(),null===(i=this.inscricaoRota)||void 0===i||i.unsubscribe(),null===(n=this.inscricaoAcao)||void 0===n||n.unsubscribe(),null===(d=this.inscricaoAtividades)||void 0===d||d.unsubscribe(),null===(h=this.inscricaoGetProjeto)||void 0===h||h.unsubscribe()}onSubmit(){this.formulario.valid||this.idAcao==l.I.Exclusao?this.executaAcao():(this.formulario.markAllAsTouched(),this.appSnackBar.openSuccessSnackBar("Formul\xe1rio Com Campos Inv\xe1lidos.","OK"))}setValue(){this.formulario.setValue({data:this.feriado.data,id_grupo:this.feriado.subconta.substring(0,4).trim(),id_grupo_:this.idAcao==l.I.Consulta||this.idAcao==l.I.Exclusao?this.feriado.subconta_descricao:"",id_atividade:this.feriado.subconta.trim(),id_atividade_:this.idAcao==l.I.Consulta||this.idAcao==l.I.Exclusao?this.feriado.atividade_descricao:"",usuario:this.feriado.id_usuario,usuario_:this.idAcao==l.I.Consulta||this.idAcao==l.I.Exclusao||this.idAcao==l.I.Edicao?this.feriado.usu_nome:"",descricao:this.feriado.descricao})}getLabelCancel(){return this.idAcao==l.I.Consulta?"Voltar":"Cancelar"}onRetorno(){const e=this.globalService.estadoFind("feriado");if(null!=e){let t=e.getParametro();Object(t).new=this.idAcao==l.I.Inclusao,Object(t).id_retorno=this.feriado.data,e.parametro=JSON.stringify(t),this.globalService.estadoSave(e)}this.router.navigate(["/especiais/especiais","SIM"])}onCancel(){const e=this.globalService.estadoFind("grupo-user");if(null!=e){let t=e.getParametro();Object(t).new=!1,Object(t).id_retorno=this.idAcao==l.I.Consulta?this.feriado.data:"",e.parametro=JSON.stringify(t),this.globalService.estadoSave(e)}this.router.navigate(["/especiais/especiais","SIM"])}getFeriado(){this.globalService.setSpin(!0),this.inscricaoGetFeriado=this.feriadosService.getFeriado(this.id_empresa,this.id_usuario,this.id_tipo,this.data).subscribe(e=>{this.globalService.setSpin(!1),this.feriado=e,this.setValue()},e=>{this.globalService.setSpin(!1),console.log(e),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Feriados ${(0,c.bZ)(e)}`,"OK")})}getUsuarios(){let e=new H.w;e.id_empresa=this.globalService.getIdEmpresa(),e.orderby="Raz\xe3o",e.contador="N",e.pagina=0,this.globalService.setSpin(!0),this.inscricaoGetUsuarios=this.usuariosService.getusuarios_01(e).subscribe(t=>{this.globalService.setSpin(!1),this.lsUsuarios=t,this.idAcao==l.I.Inclusao?(this.feriado=new T.u,this.feriado.id_empresa=this.globalService.getIdEmpresa(),this.feriado.id_usuario=this.globalService.getUsuario().id,this.feriado.id_tipo=2,this.feriado.id_nivel=0,this.setValue()):this.getFeriado()},t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Pesquisa Nos Usu\xe1rios ${(0,c.bZ)(t)}`,"OK")})}setAcao(e){switch(+e){case l.I.Inclusao:this.acao="Gravar",this.labelCadastro="Datas Especiais - Inclus\xe3o.",this.readOnly=!1;break;case l.I.Edicao:this.acao="Gravar",this.labelCadastro="Datas Especiais - Altera\xe7\xe3o.",this.readOnly=!1;break;case l.I.Consulta:this.acao="Voltar",this.labelCadastro="Datas Especiais - Consulta.",this.readOnly=!0;break;case l.I.Exclusao:this.acao="Excluir",this.labelCadastro="Datas Especiais - Exclus\xe3o.",this.readOnly=!0}}executaAcao(){var e=this;switch(this.feriado.data=this.formulario.value.data,this.feriado.descricao=this.formulario.value.descricao,this.feriado.conta=this.conta.conta,this.feriado.versao=this.conta.versao,this.feriado.subconta=this.formulario.value.id_atividade,+this.idAcao){case l.I.Inclusao:this.globalService.setSpin(!1),this.feriado.user_insert=this.globalService.getUsuario().id,this.inscricaoAcao=this.feriadosService.FeriadoInsert(this.feriado).subscribe(function(){var t=(0,C.Z)(function*(i){e.globalService.setSpin(!1),e.onRetorno()});return function(i){return t.apply(this,arguments)}}(),t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na INclus\xe3o ${(0,c.bZ)(t)}`,"OK")});break;case l.I.Edicao:this.globalService.setSpin(!0),this.feriado.user_update=this.globalService.getUsuario().id,this.inscricaoAcao=this.feriadosService.FeriadoUpdate(this.feriado).subscribe(function(){var t=(0,C.Z)(function*(i){e.globalService.setSpin(!1),e.onRetorno()});return function(i){return t.apply(this,arguments)}}(),t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Altera\xe7\xe3o ${(0,c.bZ)(t)}`,"OK")});break;case l.I.Exclusao:this.globalService.setSpin(!0),this.inscricaoAcao=this.feriadosService.FeriadoDelete(this.feriado.id_empresa,this.feriado.id_usuario,this.feriado.id_tipo,this.feriado.data).subscribe(function(){var t=(0,C.Z)(function*(i){e.globalService.setSpin(!1),e.onRetorno()});return function(i){return t.apply(this,arguments)}}(),t=>{this.globalService.setSpin(!1),this.appSnackBar.openFailureSnackBar(`Erro Na Exclusao ${(0,c.bZ)(t)}`,"OK")})}}getAcoes(){return l.I}touchedOrDirty(e){var t,i;return!(!(null===(t=this.formulario.get(e))||void 0===t?void 0:t.touched)&&!(null===(i=this.formulario.get(e))||void 0===i?void 0:i.dirty))}getValidfield(e){var t,i;return(null===(i=null===(t=this.formulario.get(e))||void 0===t?void 0:t.errors)||void 0===i?void 0:i.ValidatorStringLen)&&this.touchedOrDirty(e)}getMensafield(e){var t,i;return null===(i=null===(t=this.formulario.get(e))||void 0===t?void 0:t.errors)||void 0===i?void 0:i.message}getConta(){let e=new E.l;e.id_empresa=this.globalService.getIdEmpresa(),e.id_projeto=this.contrato.id,e.controle="S",e.orderby="projeto",e.conta="90",e.nivel=1,e.tipo="C",this.globalService.setSpin(!0),console.log(e),this.inscricaoAtividades=this.atividadesService.getAtividades_01(e).subscribe(t=>{this.globalService.setSpin(!1),this.conta=t[0],this.getGrupos()},t=>{this.globalService.setSpin(!1),this.conta=new f.o,this.grupos=[],this.atividades=[]})}getGrupos(){let e=new E.l;e.id_empresa=this.globalService.getIdEmpresa(),e.id_projeto=this.contrato.id,e.controle="S",e.orderby="projeto",e.conta=this.conta.conta,e.nivel=2,e.tipo="S",this.globalService.setSpin(!0),console.log(e),this.inscricaoAtividades=this.atividadesService.getAtividades_01(e).subscribe(t=>{this.globalService.setSpin(!1),console.log("grupos",t),this.grupos=t,this.getAtividades()},t=>{this.globalService.setSpin(!1),console.log("retornei com erro",t),this.grupos=[]})}getAtividades(){let e=new E.l;e.id_empresa=this.globalService.getIdEmpresa(),e.id_projeto=this.contrato.id,e.controle="S",e.orderby="projeto",e.conta=this.grupo.conta,e.subconta=this.grupo.subconta.trim(),e.subconta_nivel="S",e.nivel_filtro=this.grupo.nivel,e.nivel=3,e.tipo="O",this.globalService.setSpin(!0),console.log(e),this.inscricaoAtividades=this.atividadesService.getAtividades_01(e).subscribe(t=>{this.globalService.setSpin(!1),this.atividades=t,this.getUsuarios()},t=>{this.globalService.setSpin(!1),this.atividades=[]})}getProjeto(){this.globalService.setSpin(!0),this.inscricaoGetProjeto=this.projetosService.getProjeto(this.globalService.getIdEmpresa(),9e5).subscribe(e=>{this.globalService.setSpin(!1),this.contrato=e,this.getConta()},e=>{this.globalService.setSpin(!1),this.appSnackBar.openSuccessSnackBar(`Pesquisa Contrato ${(0,c.bZ)(e)}`,"OK"),this.contrato=new Y.w})}onChangeGrupos(){let e=this.grupos.findIndex(t=>{var i;return t.subconta===(null===(i=this.formulario.value)||void 0===i?void 0:i.id_grupo)});e>=0&&(this.atividades=[],this.grupo=this.grupos[e],this.getAtividades())}readOnlyKey(){return this.idAcao!=l.I.Inclusao}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(u.qu),a.Y36(x.v),a.Y36(W.J),a.Y36(aa.T),a.Y36(ea.a),a.Y36(y.U),a.Y36(m.gz),a.Y36(m.F0),a.Y36(q.W))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-especial-view"]],decls:33,vars:14,consts:[[1,"div-barra"],[1,"example-spacer"],["autocomplete","off",3,"formGroup"],[1,"moldura"],[1,"col-med-3"],["appearance","outline",1,"col-max"],["matInput","","formControlName","data","mask","00/00/0000","placeholder","DD/MM/AAAA",3,"readonly"],[4,"ngIf"],["field","","appearance","outline","class","col-max column-span-2",4,"ngIf"],[1,"col-med-2"],["field","","appearance","outline","class","col-max",4,"ngIf"],[1,"col-med-1"],["matInput","","formControlName","descricao","oninput","this.value = this.value.toUpperCase()",3,"readonly"],[1,"button-container-right"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["field","","appearance","outline",1,"col-max","column-span-2"],["formControlName","usuario"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","","formControlName","usuario_",3,"readonly"],["field","","appearance","outline",1,"col-max"],["formControlName","id_grupo",3,"selectionChange"],["matInput","","formControlName","id_grupo_",3,"readonly"],["formControlName","id_atividade"],["matInput","","formControlName","id_atividade_",3,"readonly"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){if(1&e&&(a._uU(0,"<"),a.TgZ(1,"div",0),a.TgZ(2,"mat-toolbar"),a.TgZ(3,"span",1),a.TgZ(4,"mat-label"),a._uU(5),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"form",2),a.TgZ(7,"div",3),a.TgZ(8,"div",4),a.TgZ(9,"mat-form-field",5),a.TgZ(10,"mat-label"),a._uU(11,"Data"),a.qZA(),a._UZ(12,"input",6),a.YNc(13,ta,2,1,"mat-error",7),a.qZA(),a.YNc(14,oa,5,1,"mat-form-field",8),a.YNc(15,ra,4,1,"mat-form-field",8),a.qZA(),a.TgZ(16,"div",9),a.YNc(17,na,5,1,"mat-form-field",10),a.YNc(18,la,4,1,"mat-form-field",10),a.YNc(19,ua,5,1,"mat-form-field",10),a.YNc(20,da,4,1,"mat-form-field",10),a.qZA(),a.qZA(),a.TgZ(21,"div",11),a.TgZ(22,"mat-form-field",5),a.TgZ(23,"mat-label"),a._uU(24,"Descri\xe7\xe3o"),a.qZA(),a._UZ(25,"input",12),a.YNc(26,pa,2,1,"mat-error",7),a.qZA(),a.qZA(),a.TgZ(27,"div",13),a.YNc(28,ma,4,1,"button",14),a.TgZ(29,"button",15),a.NdJ("click",function(){return t.onCancel()}),a.TgZ(30,"mat-icon"),a._uU(31,"cancel"),a.qZA(),a._uU(32),a.qZA(),a.qZA(),a.qZA()),2&e){let i,n;a.xp6(5),a.Oqu(t.labelCadastro),a.xp6(1),a.Q6J("formGroup",t.formulario),a.xp6(6),a.Q6J("readonly",t.readOnlyKey()),a.xp6(1),a.Q6J("ngIf",(null==(i=t.formulario.get("data"))||null==i.errors?null:i.errors.ValidatorDate)&&t.touchedOrDirty("data")),a.xp6(1),a.Q6J("ngIf",t.idAcao!=t.getAcoes().Consulta&&t.idAcao!=t.getAcoes().Exclusao&&t.idAcao!=t.getAcoes().Edicao),a.xp6(1),a.Q6J("ngIf",t.idAcao==t.getAcoes().Consulta||t.idAcao==t.getAcoes().Exclusao||t.idAcao==t.getAcoes().Edicao),a.xp6(2),a.Q6J("ngIf",t.idAcao!=t.getAcoes().Consulta&&t.idAcao!=t.getAcoes().Exclusao),a.xp6(1),a.Q6J("ngIf",t.idAcao==t.getAcoes().Consulta||t.idAcao==t.getAcoes().Exclusao),a.xp6(1),a.Q6J("ngIf",t.idAcao!=t.getAcoes().Consulta&&t.idAcao!=t.getAcoes().Exclusao),a.xp6(1),a.Q6J("ngIf",t.idAcao==t.getAcoes().Consulta||t.idAcao==t.getAcoes().Exclusao),a.xp6(5),a.Q6J("readonly",t.readOnly),a.xp6(1),a.Q6J("ngIf",(null==(n=t.formulario.get("descricao"))||null==n.errors?null:n.errors.ValidatorStringLen)&&t.touchedOrDirty("descricao")),a.xp6(2),a.Q6J("ngIf",3!=t.idAcao),a.xp6(4),a.hij(" ",t.getLabelCancel()," ")}},directives:[U.Ye,b.hX,u._Y,u.JL,u.sg,b.KE,w.Nt,u.Fj,B.hx,u.JJ,u.u,p.O5,F.lW,j.Hw,b.TO,N.gD,p.sg,J.ey],styles:[""]}),o})()}];let ga=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[m.Bz.forChild(ha)],m.Bz]}),o})();var fa=r(5426),va=r(4466);let _a=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[p.ez,ga,fa.q,u.u5,_.Cl,u.UX,va.m,B.yI.forChild()]]}),o})()},6468:(P,g,r)=>{r.d(g,{w:()=>p});class p{constructor(){this.id_empresa=0,this.id=0,this.ativo="",this.razao="",this.cnpj_cpf="",this.grupo=[],this.timer="",this.ticket="",this.flag_ponte="",this.data="",this.pagina=0,this.tamPagina=50,this.contador="N",this.orderby="",this.sharp=!1}}}}]);