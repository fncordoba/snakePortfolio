(window.webpackJsonp=window.webpackJsonp||[]).push([["collection-route~editorial-route~explore-route~following-route~photos-route~search-photos-route~topi~238b1f24"],{DKGh:function(e,t,n){e.exports={colorWhite:"#fff",container:"_3Dfms"}},JQ16:function(e,t,n){e.exports={clearfix:"_2KLco",container:"_2sCnE PrOBO _1CR66","col-12":"wRfkF","sm-col-6":"_2cVF0","md-col-4":"_1hITE",placeholderBackground:"_2VWD4",placeholderGutter:"24px",buttonFooterContainer:"_3sS4m",placeholdersContainer:"ILvgD",placeholderItemsContainer:"vbiZb",placeholderItemContainer:"_1fA3Q wRfkF _2cVF0 _1hITE",placeholderItem:"IjvFe _2VWD4",scrollFooterElContainer:"_3zg_a"}},Nb12:function(e,t,n){"use strict";n.d(t,"b",(function(){return D})),n.d(t,"a",(function(){return q}));var o=n("SDew"),i=n("6l12"),r=n("q1tI"),l=n.n(r),a=n("/MKj"),c=n("QFtp"),s=n("b2r9"),d=n("OcE/"),p=n("pq3u"),h=n("2Fwo"),u=n("LAdA"),f=n("OM6L"),I=n("JzW6"),O=n("jRy8"),m=n("0eW+"),b=n("QZHf"),E=n("IVTL"),S=n("x5qg"),g=n("FXv3"),v=n("Z14c"),j=n("ALSr"),C=n("6SPB"),F=n("GavU"),R=n("JQ16"),_=n.n(R);const q=()=>l.a.createElement("div",{className:_.a.placeholdersContainer},l.a.createElement("div",{className:_.a.placeholderItemsContainer},f.z(0,17).map(e=>l.a.createElement("div",{key:e,className:_.a.placeholderItemContainer},l.a.createElement("div",{className:_.a.placeholderItem}))))),N=Object(E.b)()({shouldRequireInfiniteScrollOptIn:!1,getNoContentEl:Object(i.a)(()=>l.a.createElement(v.a,{type:"photos"})),getPlaceholderEl:Object(i.a)(()=>l.a.createElement(q,null))}),w=Object(c.unionize)({OptInRequired:Object(c.ofType)(),Enabled:{}});class P extends r.Component{constructor(){super(...arguments),this.getInfiniteScrollSetting=({shouldRequireInfiniteScrollOptIn:e})=>e?w.OptInRequired({optedIn:!1}):w.Enabled(),this.state={infiniteScrollSetting:this.getInfiniteScrollSetting(this.props)},this.toggleInfiniteScrollOptIn=()=>{const{infiniteScrollSetting:e}=this.state;w.match({OptInRequired:({optedIn:e})=>{const t=w.OptInRequired({optedIn:Object(m.b)(e)});this.setState({infiniteScrollSetting:t})},default:b.a})(e)},this.fetchDataAndBuildActions=Object(i.a)(e=>Object(o.f)(e,I.f(Object(o.f)(u.l,d.f,({entities:e,result:t})=>[Object(s.C)(e),s.a.HandleNextPhotoFeedPageResponse({feedId:this.props.feedId,photoIds:t})])))),this.createPhotoFeedIdContextValue=Object(i.a)(e=>O.F(e))}UNSAFE_componentWillReceiveProps(e){if(e.shouldRequireInfiniteScrollOptIn!==this.props.shouldRequireInfiniteScrollOptIn){const t=this.getInfiniteScrollSetting(e);this.setState({infiniteScrollSetting:t})}}render(){const{photoFeedOption:e,photosOption:t,children:n,getNoContentEl:o,getPlaceholderEl:i,feedId:r,fetchPhotos:a,notifier$:c,intersectionObserverRoot:s,intersectionObserverRootMarginBottom:d}=this.props,{infiniteScrollSetting:p}=this.state,h=!1===w.match({OptInRequired:({optedIn:e})=>e,Enabled:()=>!0})(p);return l.a.createElement(F.a.Provider,{value:this.createPhotoFeedIdContextValue(r)},l.a.createElement(j.a,{key:r,renderItems:n,feedItemsOption:t,feedStateOption:e,getScrollFooterEl:()=>l.a.createElement("div",{className:_.a.scrollFooterElContainer},w.match({OptInRequired:({optedIn:e})=>e?l.a.createElement(C.a,null):l.a.createElement("div",{className:_.a.buttonFooterContainer},l.a.createElement(g.a,{tag:"button",buttonType:"outline",onClick:this.toggleInfiniteScrollOptIn,type:"button"},"Load more photos")),Enabled:()=>l.a.createElement(C.a,null)})(p)),getNoContentEl:o,getPlaceholderEl:i,shouldDisableInfiniteScroll:h,fetchDataAndBuildActions:this.fetchDataAndBuildActions(a),notifier$:c,intersectionObserverRoot:s,intersectionObserverRootMarginBottom:d}))}}const A=Object(p.d)()(()=>{const e=Object(S.d)(),t=Object(S.e)();return(n,o)=>({photoFeedOption:e(n,o.feedId),photosOption:t(n,o.feedId)})});var D=Object(o.h)(P,Object(a.c)(A),e=>Object(h.a)(e,N))},kMwp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("q1tI"),i=n.n(o),r=n("DKGh"),l=n.n(r);var a=({children:e})=>i.a.createElement("div",{className:l.a.container},e)}}]);
//# sourceMappingURL=collection-route~editorial-route~explore-route~following-route~photos-route~search-photos-route~topi~238b1f24.70fec.js.map