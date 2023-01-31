"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(d,i(i({ref:t},h),{},{components:n})):a.createElement(d,i({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:8},i="Hashed Time Lock Contract",c={unversionedId:"buildonminima/txntutorial/layer1/hashtimelockcontract",id:"buildonminima/txntutorial/layer1/hashtimelockcontract",title:"Hashed Time Lock Contract",description:"A VERY powerful variant on the time lock contract and the backbone and basis of the lightning network. This is a contract that has both a time lock and a hash lock. This means you can spend it at a certain time IF you know a secret. The preimage of a hash..",source:"@site/docs/buildonminima/txntutorial/layer1/hashtimelockcontract.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/hashtimelockcontract",permalink:"/docs/buildonminima/txntutorial/layer1/hashtimelockcontract",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/hashtimelockcontract.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"SlowCash",permalink:"/docs/buildonminima/txntutorial/layer1/slowcash"},next:{title:"Exchange Contract",permalink:"/docs/buildonminima/txntutorial/layer1/exchangecontract"}},l={},s=[],h={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hashed-time-lock-contract"},"Hashed Time Lock Contract"),(0,o.kt)("p",null,"A VERY powerful variant on the time lock contract and the backbone and basis of the lightning network. This is a contract that has both a time lock and a hash lock. This means you can spend it at a certain time IF you know a secret. The preimage of a hash.."),(0,o.kt)("p",null,"Let\u2019s say you own the coin. And your public key is 0xFF."),(0,o.kt)("p",null,"The other party you are sending the coin to is 0xEE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"IF @BLOCK GT 1000 AND SIGNEDBY(0xFF) THEN RETURN TRUE\nENDIF\nRETURN ( SIGNEDBY(0xEE) AND KECCAK(STATE(1)) EQ 0x546FCD56E.. )\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What this does:"),(0,o.kt)("br",null),"\nYou can cancel the contract after block 1000 ( you could use @COINAGE ) - but until then only the 0xEE user can claim the funds if they know the secret. They need to know the secret to claim before that."),(0,o.kt)("p",null,"Also - you will note we have used a state variable!.. This is where the value of the preimage is put."),(0,o.kt)("p",null,"You could use this to perform an atomic cross chain exchange, The same contract would be written by the other party, using the same hash, on a different chain. Then you collect on the other chain, since you know the secret, show the preimage and they can then collect on Minima. Minima also has SHA2 and SHA3 as hash functions for this very purpose."),(0,o.kt)("p",null,"You can use the 'hash' function to hash the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hash data:0xFFEEDD\n")),(0,o.kt)("p",null,"And use that in your scripts.."),(0,o.kt)("p",null,"One thing of note here.."),(0,o.kt)("p",null,"If you were to use a String for the preimage, so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'hash data:"this is my secret"\n')),(0,o.kt)("p",null,"You would get "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0x1D63D6377EA45E6A5F410FCCED3066B80CA9FB391C346E74948FBB27C7617908\n")),(0,o.kt)("p",null,"as the hash of the data - the byte representation of the string. Also - this is the KECCAK hash, and you would probably want to use SHA2 or SHA3 for cross chain antics as that is what BTC and ETH support."),(0,o.kt)("p",null,"Now to add this as a state variable you would need to enclose it in square brackets."),(0,o.kt)("p",null,"So.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'runscript script:"LET preimage=STATE(0) RETURN KECCAK(preimage) EQ 0x1D63D6377EA45E6A5F410FCCED3066B80CA9FB391C346E74948FBB27C7617908" state:{"0":"[this is my secret]"}\n')),(0,o.kt)("p",null,'This is because Strings in KISSVM are enclosed in square brackets.. Not quotes - ".'),(0,o.kt)("p",null,"Another already widely used case is in the Lightning Network on Bitcoin. HTLC contracts work just as well off chain as on chain.. You can set up cascading HTLC contracts that allow for payments to hop through multiple parties."),(0,o.kt)("p",null,"For instance - imagine I have a channel with Bob and Bob has one with Alice. I want to pay Alice. I create an HTLC payment to Bob locked for 12 hours if he knows a secret that only I know. He then creates the same HTLC payment to Alice, locked for 6 hours. I then reveal the secret - give it to Alice, and she collects the payment from Bob. Bob now also knows the secret and collects his payment from me. "),(0,o.kt)("p",null,"This can be used in larger groups with more hops, so instead of only being able to pay people you know.. You can pay people who know people who know people you know. A much larger set - in fact at 6 hops you should theoretically be able to pay anyone in the network."))}u.isMDXComponent=!0}}]);