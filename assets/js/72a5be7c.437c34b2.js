"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[2976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7648:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="MultiSig Contract",u={unversionedId:"buildonminima/txntutorial/layer1/multisig",id:"buildonminima/txntutorial/layer1/multisig",title:"MultiSig Contract",description:"You have funds, and you want them to be spent ONLY if Multiple parties agree.",source:"@site/docs/buildonminima/txntutorial/layer1/multisig.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/multisig",permalink:"/docs/buildonminima/txntutorial/layer1/multisig",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/multisig.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Time lock contract",permalink:"/docs/buildonminima/txntutorial/layer1/timelock"},next:{title:"More Complex MultiSig",permalink:"/docs/buildonminima/txntutorial/layer1/complexmultisig"}},p={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multisig-contract"},"MultiSig Contract"),(0,a.kt)("p",null,"You have funds, and you want them to be spent ONLY if Multiple parties agree."),(0,a.kt)("p",null,"Let's go through the full steps required to run a simple 2 of 2 multisig on chain via the Minima commands."),(0,a.kt)("p",null,"You would run 2 versions of Minima, to simulate both users, still on a private network."),(0,a.kt)("p",null,"As before - Start node 1 ( if not already started )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata1 -test -nop2p -genesis\n")),(0,a.kt)("p",null,"Now - Start node 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata2 -test -nop2p -clean -port 10001 -connect 127.0.0.1:9001\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"-clean")," wipes previous data so you don't have to use it if you want to keep your old files",(0,a.kt)("br",null),"\nThe second node needs a separate data folder, a different port, and is told to connect to version 1 on the default port 9001.",(0,a.kt)("br",null),"\nNow you have 2 versions of Minima running on a private test network. You can send minima back and forth to each other.",(0,a.kt)("br",null),"\nNext both users will need a public key.. Run this on both. The output will show you a public key"),(0,a.kt)("p",null,"Node 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"getaddress\n")),(0,a.kt)("p",null,"On my setup the Public key (use your output here): "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA5268A\n")),(0,a.kt)("p",null,"Node 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"getaddress\n")),(0,a.kt)("p",null,"On my setup the Public key : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B9402\n")),(0,a.kt)("p",null,"Let's talk about ",(0,a.kt)("inlineCode",{parentName:"p"},"getaddress")," vs ",(0,a.kt)("inlineCode",{parentName:"p"},"newaddress"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Minima creates 64 default keys for you to use as change addresses or to accept money or create tokens etc etc.. to keep the number of proof checks to a minimum (these are checked in every block to see if any coins are relevant to you)."),(0,a.kt)("p",null,"This also means that backup and restore operations know which addresses to look out for easily - so even if you do a new transaction your previous restore file will know the keys of the change address you use. "),(0,a.kt)("p",null,"Unless you really need a SINGLE address that is not used for anything else - use ",(0,a.kt)("inlineCode",{parentName:"p"},"getaddress"),". ",(0,a.kt)("br",null),"\nTo create a brand new address, that will not be used for anything else - then use ",(0,a.kt)("inlineCode",{parentName:"p"},"newaddress"),"."),(0,a.kt)("p",null,"Now that you have both the public keys.. You can create the multisig contract. "),(0,a.kt)("p",null,"Script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RETURN SIGNEDBY(0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA5268A) AND SIGNEDBY(0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B9402)\n")),(0,a.kt)("p",null,"You must add the script to BOTH nodes, so they know how to spend the coin."),(0,a.kt)("p",null,"In Minima when you send funds to an address the script is not revealed. It is only added to the transaction when you wish to spend the coin, as an input.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"So on both nodes you need to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'newscript trackall:true script:"RETURN SIGNEDBY(0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA5268A) AND SIGNEDBY(0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B9402)"\n')),(0,a.kt)("p",null,"This will tell you the address.. in this case: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0x7C6EB00C850E4E95743C6D6A181489D1215F53D39AE9702C42069C9F09DF378C\n")),(0,a.kt)("p",null,"You will note ",(0,a.kt)("inlineCode",{parentName:"p"},"trackall"),". This tells your node to track all instances of this address. The default is true. ",(0,a.kt)("br",null),"\nSometimes you will add scripts you need to spend but you do not wish to track all occurrences (an exchange contract for instance)",(0,a.kt)("br",null),"\nMinima will automatically track any coin that has an address you track, or an address you track or public key you own in the state variables.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"We now have both nodes able to understand the script. Let's send some funds to the script.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"On Node 1 - the genesis node.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"send amount:10 address:0x7C6EB00C850E4E95743C6D6A181489D1215F53D39AE9702C42069C9F09DF378C\n")),(0,a.kt)("p",null,"Now both nodes should show a new coin! This coin can now only be spent if the script returns TRUE when attempting to use it as an input to a transaction."),(0,a.kt)("p",null,"When you try ",(0,a.kt)("inlineCode",{parentName:"p"},"balance")," you will see the confirmed coins and sendable coins. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Confirmed")," are the coins you are tracking.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Sendable")," are the coins with simple addresses you can use with the ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," function. It takes 3 blocks for a coin to go from unconfirmed to confirmed."),(0,a.kt)("p",null,"Now lets construct a transaction that uses this coin as an input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txncreate id:multisig\n")),(0,a.kt)("p",null,"This creates a custom transaction.\nNow we need to find the coin to add as input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"coins relevant:true\n")),(0,a.kt)("p",null,"You could just use ",(0,a.kt)("inlineCode",{parentName:"p"},"coins")," here on its own and it defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"coins relevant:true"),".",(0,a.kt)("br",null),"\nThis will display all the coins you are tracking. You can search for any coin using this function but we are only interested in our coins for now.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Copy the coinid for the coin with ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," matching script address and amount 10. Then add it to your transaction. This will be the same on both nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txninput id:multisig coinid:0x9EAD12B53C8B595BFAFA636BC844AB51E3BF3B4B463DFF6D983FA236B3AEB49F\n")),(0,a.kt)("p",null,"Your coinid will be different. You should now see a transaction with 1 input. You can check the txn with :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txncheck id:multisig\n")),(0,a.kt)("p",null,"And list them with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnlist\n")),(0,a.kt)("p",null,"Now - let\u2019s add an output\n1 to be sent to 0xFF (or whatever - you could create a newaddress on one of your nodes) and 9 to be sent back to the multisig as change. Remember that all transactions spend all the inputs so change outputs are required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnoutput id:multisig address:0xFF amount:1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnoutput id:multisig address:0x7C6EB00C850E4E95743C6D6A181489D1215F53D39AE9702C42069C9F09DF378C amount:9\n")),(0,a.kt)("p",null,"Now - we have an almost complete transaction.. BUT it needs both nodes to sign it.\nSo - on this node.. Where you are constructing the transaction.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"keys\n")),(0,a.kt)("p",null,"This will show all your public keys. Pick the Public Key you used to make the multisig and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnsign id:multisig publickey:0x1539C2B974C1589C6AB3C734AA41D8E7D999759EFE057B047B200E836BA5268A\n")),(0,a.kt)("p",null,"You now have a partially signed transaction. You need to export it, to a file, and send the data to the other node to sign.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnexport id:multisig file:mymultisig.txn\n")),(0,a.kt)("p",null,"Now on the ",(0,a.kt)("em",{parentName:"p"},"other")," node.. You can change the id if you wish.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnimport file:mymultisig.txn\n")),(0,a.kt)("p",null,"Now you should have the transaction on the other node.. Sign it with the other key.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnsign id:multisig publickey:0xAD25E1E40605A68AFE357ECF83E51FE27EC10013851AE95889A00C695D5B9402\n")),(0,a.kt)("p",null,"And NOW - you should have a correctly signed transaction.. by both parties.. Just needs the correct MMR proofs and scripts.. Which is done with.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnbasics id:multisig\n")),(0,a.kt)("p",null,"The reason this is not done immediately when you add an input.. Is that you may be posting this transaction weeks or months after it is created and will need up to date proofs."),(0,a.kt)("p",null,"And now - we can attempt to publish the transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"txnpost id:multisig\n")),(0,a.kt)("p",null,"IF everything has gone to plan - you will post that transaction and you will see the coins appear on both sides!"))}m.isMDXComponent=!0}}]);