"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[8184],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,o(o({ref:e},m),{},{components:n})):a.createElement(h,o({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7299:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Transactions",c={unversionedId:"learn/minima/transactions",id:"learn/minima/transactions",title:"Transactions",description:"Transaction Lifecycle",source:"@site/docs/learn/minima/transactions.md",sourceDirName:"learn/minima",slug:"/learn/minima/transactions",permalink:"/docs/learn/minima/transactions",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minima/transactions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/docs/learn/minima/coreconcepts"},next:{title:"MMR Database",permalink:"/docs/learn/minima/mmrdatabase"}},m={},p=[{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:3},{value:"Transaction Outputs",id:"transaction-outputs",level:2},{value:"Transaction Inputs",id:"transaction-inputs",level:2},{value:"Transaction Structure",id:"transaction-structure",level:2},{value:"State Variables",id:"state-variables",level:3},{value:"Link Hash",id:"link-hash",level:3},{value:"Transaction Validity",id:"transaction-validity",level:2}],u={toc:p};function d(t){var e=t.components,s=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transactions"},"Transactions"),(0,i.kt)("h3",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,i.kt)("p",null,"The following diagram explains the basic process from a Transaction to ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/minima/txpowunits"},"TxPoW unit")," to Block."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Transactions",src:n(9267).Z+"#gh-light-mode-only",width:"829",height:"1793"}),(0,i.kt)("img",{loading:"lazy",alt:"Core Concepts",src:n(4650).Z+"#gh-dark-mode-only",width:"829",height:"1793"})),(0,i.kt)("h2",{id:"transaction-outputs"},"Transaction Outputs"),(0,i.kt)("p",null,"All transactions create new UTxOs (coins) as outputs, each coin is identifiable with a unique CoinID and consists of"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a specific amount of Minima and "),(0,i.kt)("li",{parentName:"ol"},"a script that determines the conditions required to spend the coin. This script is executed when a user attempts to spend the coin in a transaction and must return a value of TRUE to be spendable. ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn/minima/scripting"},"(see Scripting)"))),(0,i.kt)("p",null,"Each coin has the following attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Coin Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"CoinID")),(0,i.kt)("td",{parentName:"tr",align:null},"The globally unique identifier for a coin. The coin id of a new UTxO is hash(first input coin in txn ","|"," output_num_in_txn)"),(0,i.kt)("td",{parentName:"tr",align:null},"64 byte hash (MiniData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Amount")),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of 'Minima'. Even custom token transactions are just amounts of coloured Minima (",(0,i.kt)("a",{parentName:"td",href:"/docs/learn/minima/colouredcoins"},"see Coloured Coins"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"MiniNumber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Address")),(0,i.kt)("td",{parentName:"tr",align:null},"The hash of a script. If no custom script is provided,the script will simply be RETURN(SIGNEDBY(","[PublicKey of coin owner]",") i.e. the  transaction must be signed by the coin owner before it can be spent. All addresses are P2SH (Pay to Script Hash)."),(0,i.kt)("td",{parentName:"tr",align:null},"64 byte hash (MiniData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Token ID")),(0,i.kt)("td",{parentName:"tr",align:null},"The Token ID. Minima is 0x00. Everything else has a full 64 byte hash. Tokens are created by colouring Minima."),(0,i.kt)("td",{parentName:"tr",align:null},"64 byte hash (MiniData)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Token")),(0,i.kt)("td",{parentName:"tr",align:null},"Token Details (",(0,i.kt)("a",{parentName:"td",href:"/docs/learn/minima/colouredcoins"},"see Coloured Coins"),")"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Floating")),(0,i.kt)("td",{parentName:"tr",align:null},"True or False. Set when you create a transaction. If True, the Coin ID is ignored so that any valid coin that has the same amount, address and Token ID can be used."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Store State")),(0,i.kt)("td",{parentName:"tr",align:null},"True or False, depending on whether the state is stored for this coin"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"State")),(0,i.kt)("td",{parentName:"tr",align:null},"The state variables (0-255) of the transaction this coin was created in. You can access this data from scripts."),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"MMR Entry")),(0,i.kt)("td",{parentName:"tr",align:null},"The MMR database entry number for this coin"),(0,i.kt)("td",{parentName:"tr",align:null},"MMREntryNumber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Spent")),(0,i.kt)("td",{parentName:"tr",align:null},"True or False, depending on whether this coin has been spent or not."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Created")),(0,i.kt)("td",{parentName:"tr",align:null},"The block number this coin was created in."),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")))),(0,i.kt)("p",null,"Example coin details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'coins relevant:true\n{\n  "command":"coins",\n  "params":{\n    "relevant":"true"\n  },\n  "status":true,\n  "response":[{\n    "coinid":"0xB76A17B0444D40A90697FCC7EFFFB1917F7B4AC7FD70D7E70323DC560B6A3CF2",\n    "amount":"98",\n    "address":"0x0B00C23C8B4DFBDEC76FEE908ADF1BD396A5E92DCC826D3ADD26E4140CFA1DC0",\n    "tokenid":"0x00",\n    "token":null,\n    "floating":false,\n    "storestate":true,\n    "state":[],\n    "mmrentry":"439",\n    "spent":false,\n    "created":"167764"\n  }]\n}\n')),(0,i.kt)("h2",{id:"transaction-inputs"},"Transaction Inputs"),(0,i.kt)("p",null,"Transaction inputs are coins (UTxOs) that will be spent in the transaction, identified by the Coin ID. One or more coins may be required depending on the value of the coins owned by the user and the amount they wish to spend. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"For example if a user wishes to spend 100 Minima but they only have two coins worth 40 and 90 Minima, they must use both coins as inputs to the transaction and receive change of 30 as a new coin."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using a wallet application, the wallet will automatically choose which coins to use as inputs, however when constructing transactions manually, relevant coins must be selected to ensure the sum of the inputs is greater than or equal to the sum of the outputs. "))),(0,i.kt)("h2",{id:"transaction-structure"},"Transaction Structure"),(0,i.kt)("p",null,"All transactions will have a list of inputs, outputs, state variables, a link hash and a Transaction ID."),(0,i.kt)("p",null,"To send a transaction, a user must construct it using one or more of their unspent coins as inputs and defining the outputs required.  ",(0,i.kt)("br",null)),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Burn output must be considered when constructing transactions, as this will affect the priority that a transaction has over others in the mempool."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inputs:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unspent coins:")," One or more unspent coins (UTxOs) covering the amount that should be spent")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Outputs: ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Amounts to send:")," One or more amounts with recipient's address specified. New coins will be created for these outputs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Burn:")," The amount of Minima to burn with this transaction (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Change:")," If the total value of the input coins is greater than the value of the outputs (including the Burn), the change output must be defined as the difference to be returned to the user's address. A new coin will be created for this output.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If a change output is not defined, any difference between the inputs and outputs will be burned, removing that amount from circulation"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Transactions can be constructed in isolation but must be added into a TxPoW unit before it can be mined and propagated across the network."))),(0,i.kt)("h3",{id:"state-variables"},"State Variables"),(0,i.kt)("p",null,"Transactions also include State Variables for storing public data and previous transaction states to retrieve information for scripts. 0-255 variables are allowed. ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/minima/scripting"},"(see Scripting)")),(0,i.kt)("h3",{id:"link-hash"},"Link Hash"),(0,i.kt)("p",null,"Used to link a Burn amount to a main transaction. The Link Hash in a Burn transaction is the transaction ID of the main transaction it relates to. This means that the burn transaction can only be spent with the transaction it is linked to.  For main transactions, it is set to a default of 0x00."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main transaction structure")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Transaction ID:")," ",(0,i.kt)("em",{parentName:"th"},"Hash(Transaction object)")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Inputs")," ",(0,i.kt)("br",null)," ",(0,i.kt)("em",{parentName:"td"},"Outputs"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"State Variables (0-255)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Linkhash (0x00)"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Burn transaction structure")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Transaction ID:")," ",(0,i.kt)("em",{parentName:"th"},"Hash(Transaction object)")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Inputs (matching the main txn)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Output (amount to burn)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"State Variables (matching the main txn)"),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Linkhash (main txn ID)"))))),(0,i.kt)("h2",{id:"transaction-validity"},"Transaction Validity"),(0,i.kt)("p",null,"For a transaction to be valid:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The sum of inputs must be greater than or equal to the sum of the outputs for each Token ID"),(0,i.kt)("li",{parentName:"ol"},"All inputs and outputs must be valid Minima amounts (between 0-1 billion)"),(0,i.kt)("li",{parentName:"ol"},"All inputs must have unique coin IDs "),(0,i.kt)("li",{parentName:"ol"},"It must have no more than 256 state variables ")),(0,i.kt)("p",null,"When checking the validity of transactions, the ",(0,i.kt)("em",{parentName:"p"},"monotonicity")," is checked to determine whether a transaction needs to be checked more than once. "),(0,i.kt)("p",null,"Scripts of ",(0,i.kt)("strong",{parentName:"p"},"Monotonic")," transactions only need to be checked once i.e. they are either valid or not e.g. a simple RETURN(SIGNEDBY(..))"),(0,i.kt)("p",null,"Scripts of ",(0,i.kt)("strong",{parentName:"p"},"Non Monotonic")," transactions need to be checked multiple times. Any script in a transaction that references global variables @BLKNUM, @BLKDIFF or @INBLKNUM is not monotonic as its validity will change depending on these variables."))}d.isMDXComponent=!0},4650:function(t,e,n){e.Z=n.p+"assets/images/transactionLifecycleSimpleDm-14065b945ba4573822a7485895036fc8.svg"},9267:function(t,e,n){e.Z=n.p+"assets/images/transactionLifecycleSimpleLm-2757b5806ca0d4b5f8c8f6c0253ad43c.svg"}}]);