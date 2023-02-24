"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[7852],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},l="Securing your funds",p={unversionedId:"runanode/securefunds",id:"runanode/securefunds",title:"Securing your funds",description:"Keeping your funds secure involves",source:"@site/docs/runanode/securefunds.md",sourceDirName:"runanode",slug:"/runanode/securefunds",permalink:"/docs/runanode/securefunds",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/securefunds.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Using Maxima",permalink:"/docs/runanode/usingmaxima"},next:{title:"Restoring lost funds",permalink:"/docs/runanode/restorefunds"}},d={},u=[{value:"Seed Phrase",id:"seed-phrase",level:2},{value:"Backups",id:"backups",level:2},{value:"Points to remember",id:"points-to-remember",level:4},{value:"Vault",id:"vault",level:2},{value:"Private Keys Encryption",id:"private-keys-encryption",level:3},{value:"Android",id:"android",level:4},{value:"Using Terminal",id:"using-terminal",level:4},{value:"Transacting with a password locked node",id:"transacting-with-a-password-locked-node",level:4},{value:"Cold Storage Solution",id:"cold-storage-solution",level:2},{value:"Setup",id:"setup",level:3},{value:"On Device 1 - The offline node",id:"on-device-1---the-offline-node",level:4},{value:"On Device 2 - The online node",id:"on-device-2---the-online-node",level:4},{value:"Transacting",id:"transacting",level:3},{value:"Walk-through",id:"walk-through",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"securing-your-funds"},"Securing your funds"),(0,r.kt)("p",null,"Keeping your funds secure involves "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Keeping the device your node is running on secure"),(0,r.kt)("li",{parentName:"ol"},"Storing your ",(0,r.kt)("strong",{parentName:"li"},"seed phrase")," safely"),(0,r.kt)("li",{parentName:"ol"},"Taking regular ",(0,r.kt)("strong",{parentName:"li"},"backups")," and storing these safely"),(0,r.kt)("li",{parentName:"ol"},"Locking your node using the ",(0,r.kt)("strong",{parentName:"li"},"Vault")," function (optional)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before starting your node,")," ensure your device is not accessible by anyone other than you and if running on a desktop or server, ensure you have configured your ports correctly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Immediately after starting your node,")," write down your 24 word seed phrase and store it somewhere offline and safe. "),(0,r.kt)("h2",{id:"seed-phrase"},"Seed Phrase"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To view your 24 word Seed Phrase (Android)")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the menu on the Home page, select ",(0,r.kt)("strong",{parentName:"li"},"Vault")),(0,r.kt)("li",{parentName:"ol"},"Click on the 3 dots in the top right and select ",(0,r.kt)("strong",{parentName:"li"},"Seed Phrase"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To view your 24 word Seed Phrase (using the Terminal)")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to your MiniDapp system"),(0,r.kt)("li",{parentName:"ol"},"Open the Terminal MiniDapp"),(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"vault")," and press Enter"),(0,r.kt)("li",{parentName:"ol"},"Accept the pending command (if required)")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"DOCKER CLI")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note it is also possible to check the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault")," command from the Docker CLI."))),(0,r.kt)("p",null,"Some tips for keeping your seed phrase safe:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Never take a screenshot of your seed phrase "),(0,r.kt)("li",{parentName:"ol"},"Never copy and paste your seed phrase to/from a mobile or computer which is connected to the internet"),(0,r.kt)("li",{parentName:"ol"},"Engrave your seed phrase onto a metal plate and store it somewhere safe"),(0,r.kt)("li",{parentName:"ol"},"Make 2 copies of your seed phrase and give one to a trusted relative or store in a second location"),(0,r.kt)("li",{parentName:"ol"},"Sign your transactions offline. To do this you will need to run a node on an offline device and one node on an online device. Details on how to do this in Vault lock section.")),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"when do you need your seed phrase?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will only need to use your seed phrase to unlock your node if you have wiped the private keys using the Vault feature or to restore your node if you do not have a valid backup. "))),(0,r.kt)("h2",{id:"backups"},"Backups"),(0,r.kt)("p",null,"Using a backup is the fastest and most convenient way to restore your funds."),(0,r.kt)("p",null,"A backup needs to be:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"recent (within 1-2 months)"),(0,r.kt)("li",{parentName:"ol"},"taken whilst on the right chain (correct tip block in ",(0,r.kt)("inlineCode",{parentName:"li"},"status"),")")),(0,r.kt)("p",null,"If you do not have a valid backup, you will need to restore your funds from an Archive node using your seed phrase."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"BACKUP Security")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Backups include your ",(0,r.kt)("strong",{parentName:"p"},"private keys and the proofs to your coins"),", these are not stored by anyone else so you are responsible for storing these securely."),(0,r.kt)("p",{parentName:"div"},"Consider encrypting your private keys before taking a backup, see ",(0,r.kt)("a",{parentName:"p",href:"#private-keys-encryption"},"Private Keys Encryption"),"."))),(0,r.kt)("h4",{id:"points-to-remember"},"Points to remember"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Take regular backups"),(0,r.kt)("li",{parentName:"ul"},"Consider password protecting your backups or encrypting your keys with a Vault password before taking a backup"),(0,r.kt)("li",{parentName:"ul"},"Store them somewhere safe"),(0,r.kt)("li",{parentName:"ul"},"Without a backup, you risk losing access to your funds!")),(0,r.kt)("p",null,"For details on how to take a backup, select your platform of choice from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/runanode/get_started"},"Get Started")," page and see the ",(0,r.kt)("strong",{parentName:"p"},"FAQ")," section."),(0,r.kt)("h2",{id:"vault"},"Vault"),(0,r.kt)("p",null,"Your node stores your 24 word seed phrase which generates all your public and private keys."),(0,r.kt)("p",null,"Your private keys are required for signing and executing transactions. If someone else gets access to your node, they may be able to view your seed phrase, putting your funds at risk!"),(0,r.kt)("p",null,"The Vault command can either ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"encrypt"))," or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"wipe"))," your seed phrase and private keys, which can only be restored with a password or by entering your seed phrase."),(0,r.kt)("h3",{id:"private-keys-encryption"},"Private Keys Encryption"),(0,r.kt)("p",null,"Encrypting your private keys involves setting a Vault password so that you will not be able to spend funds without first decrypting your keys or by inserting your Vault password."),(0,r.kt)("p",null,"You will still be able to receive funds as usual."),(0,r.kt)("p",null,"You can decrypt your keys at any time with the same Vault password you used to encrypt them."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Vault password")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Your Vault password should use A-Z, a-z and 0-9 characters ONLY, do NOT use symbols. ",(0,r.kt)("br",null),"\nThis password should be different to the password you use to access your MiniDapp system."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"It is NOT POSSIBLE to view/change this password once you have set it"),", so make sure you write it down and store it somewhere secure - treat it in the same way that you would your seed phrase!"))),(0,r.kt)("h4",{id:"android"},"Android"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To encrypt your private keys (Android):")),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Ensure you have ",(0,r.kt)("strong",{parentName:"li"},"taken note of your seed phrase")," and are storing it somewhere safe."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Encrypt Private Keys")),(0,r.kt)("li",{parentName:"ol"},"Enter the same password twice ",(0,r.kt)("strong",{parentName:"li"},"(using A-Z, a-z, 0-9 characters only, "),"no symbols",(0,r.kt)("strong",{parentName:"li"},")"))),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"If you forget it, you will need to restore from an Archive node using your 24 word seed phrase."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To decrypt your keys (Android):")),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Decrypt Private Keys")),(0,r.kt)("li",{parentName:"ol"},"Enter the password you used to encrypt your keys.")),(0,r.kt)("p",{parentName:"blockquote"},"Your keys will be decrypted and you will be able to view your seed phrase and send funds without entering a password.")),(0,r.kt)("h4",{id:"using-terminal"},"Using Terminal"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To encrypt your private keys (using Terminal):")),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Login to your MiniDapp system"),(0,r.kt)("li",{parentName:"ol"},"Open the Terminal MiniDapp"),(0,r.kt)("li",{parentName:"ol"},"Run the command")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"vault action:passwordlock password:123abcXYZ\n")),(0,r.kt)("p",{parentName:"blockquote"},"Example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},' vault action:passwordlock password:123abcXYZ\n {\n  "command":"vault",\n  "params":{\n    "action":"passwordlock",\n    "password":"123abcXYZ"\n  },\n  "status":true,\n  "pending":false,\n  "response":"All private keys wiped! Stored encrypted in UserDB"\n}\n')),(0,r.kt)("p",{parentName:"blockquote"},"Now your funds are password protected.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To decrypt your private keys (using Terminal):")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"vault action:passwordunlock password:123abcXYZ\n")),(0,r.kt)("p",{parentName:"blockquote"},"Example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},'vault action:passwordunlock password:123abcXYZ\n{\n  "command":"vault",\n  "params":{\n    "action":"passwordunlock",\n    "password":"123abcXYZ"\n  },\n  "status":true,\n  "pending":false,\n  "response":"All private keys restored!"\n}\n')),(0,r.kt)("p",{parentName:"blockquote"},"Your private keys will be decrypted and your funds will no longer be password protected.")),(0,r.kt)("h4",{id:"transacting-with-a-password-locked-node"},"Transacting with a password locked node"),(0,r.kt)("p",null,"Wallet and MaxSolo will allow you to securely transact with a password locked node by requesting your password to send a transaction."),(0,r.kt)("p",null,"Equally you may transact directly from the Terminal minidapp using the ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," function with the password parameter."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"send password:123abcXYZ amount:5 address:MxG082FFHWG31QANAY66W2HK8CVGBRB3Z5RVTARY7T3Q75CGHB1A6CZH0B1KNDU\n")),(0,r.kt)("p",null,"This will sign and then execute the transaction, only unlocking the node for that single transaction. Once complete, the node will be password locked again automatically."),(0,r.kt)("p",null,"The above solution is more secure than an unprotected node but the wallet is still effectively hot as it is connected to the internet and should not be used to store large amounts of funds."),(0,r.kt)("h2",{id:"cold-storage-solution"},"Cold Storage Solution"),(0,r.kt)("p",null,"We recommend this method if storing a large amount of Minima."),(0,r.kt)("p",null,"Minima transactions require recent coin proofs of your funds and up-to-date data from the chain. This requires a node to be online as much as possible. "),(0,r.kt)("p",null,"However, to create a truly secure solution it is imperative that the private keys are NEVER online EVER. This can be achieved by using an offline device to sign your transactions."),(0,r.kt)("p",null,"This method involves: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"initially creating your node on an offline device, "),(0,r.kt)("li",{parentName:"ol"},"wiping your private keys from the node,"),(0,r.kt)("li",{parentName:"ol"},"backing up and restoring the keyless backup to an online device "),(0,r.kt)("li",{parentName:"ol"},"Creating and posting your transactions on your online device, and using your offline device to sign")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You will a USB key and 2 devices:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Device 1: Offline node"),(0,r.kt)("br",null),"\nNo internet connection/bluetooth/nearby sharing should be enabled. This device will hold your private keys and will be used to sign your transactions offline. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Device 2: Online node"),(0,r.kt)("br",null),"\nConnected to the internet, this node will not hold any private keys and will only be able to send a transaction that has been signed by the offline device.\nThis device will keep track of your coins and can be used to receive funds as usual.")),(0,r.kt)("h4",{id:"on-device-1---the-offline-node"},"On Device 1 - The offline node"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set up device 1 so that it can start a Minima node. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android: download the latest app"),(0,r.kt)("li",{parentName:"ul"},"Docker: ensure you have docker installed "),(0,r.kt)("li",{parentName:"ul"},"Manual on desktop: ensure you have java installed and the minima.jar downloaded")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Turn off the internet connection/bluetooth/nearby sharing and disable the WiFi, this device should never be connected to the internet again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a new Minima node. Your private keys will be generated but as it is not connected to the internet, it will NOT connect to the chain.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the command line interface where the Minima logs are running or the Docker Terminal, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"vault")," command to view your 24-word seed phrase and the seed itself.\nIf using a phone as your offline device, you can also go to the ",(0,r.kt)("strong",{parentName:"p"},"Vault")," page and view your seed from the menu there."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'vault\n{\n  "command": "vault",\n  "status": true,\n  "pending": false,\n  "response": {\n    "phrase": "PENALTY MEAN FEDERAL SENSE AGREE SCALE EXHAUST ARROW HUB DAY VELVET AISLE LATIN NATURE CHEF GAUGE DARING REFUSE TINY REMIND MOMENT VINTAGE POLE ELEGANT",\n    "seed": "0x64D1F2256C1C810A0AE273A397AC14C92335A234BFFBE259D9297CCF4F559F4B",\n    "locked": false\n  }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"24 word seed phrase")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is essential to keep your 24 word seed phrase safe.\nYou can recover your node with just those words. Anyone with access to your words can steal your coins!"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write down the 24 word seed phrase and store it somewhere secure. You do not need to write down the 0x seed but you will need this in the next step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wipe the private keys from the node by running the following command:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vault action:wipekeys seed:0x..\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'vault action:wipekeys seed:0x64D1F2256C1C810A0AE273A397AC14C92335A234BFFBE259D9297CCF4F559F4B\n{\n  "command": "vault",\n  "params": {\n    "action": "lock",\n    "seed": "0x64D1F2256C1C810A0AE273A397AC14C92335A234BFFBE259D9297CCF4F559F4B"\n  },\n  "status": true,\n  "pending": false,\n  "response": "All private keys wiped!"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your node no longer has the keys, not even encrypted in your UserDB. They are fully wiped.")),(0,r.kt)("p",null,"You can only restore your keys with your 24 words using "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'vault action:restorekeys phrase:"24 WORD SEED PHRASE HERE"\n')),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Backup the wiped node. You will restore to your online node later. ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"Optionally also set a password for the backup using A-Z, a-z and 0-9 characters only, no symbols"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"backup file:nokeysbackup.bak password:...\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Restore your private keys to the offline node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'vault action:restorekeys phrase:"YOUR 24 WORDS HERE"\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Password lock your keys with a long, secure password - this will encrypt your private keys which can be decrypted for the purpose of signing transactions when required. This ensures you do not have to use the 24 words again, which can be kept somewhere safe and not touched again. ")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The only time you should access your 24 words is if you lose your offline device! In this situation you can restore your wiped backup to a new offline device."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vault action:passwordlock password:setvaultpassword confirm:setvaultpassword\n")),(0,r.kt)("h4",{id:"on-device-2---the-online-node"},"On Device 2 - The online node"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a new node on an online device - your device 2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restore the wiped backup to this online node, entering the password from the backup if you set one:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"restore file:nokeysbackup.bak password:...\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The node will shutdown, restart it to access your restored node.")),(0,r.kt)("p",null,"This online node is now the same node as the one on the offline device, however it will be able to connect to the blockchain. "),(0,r.kt)("p",null,"The online node can be used as normal to receive funds but cannot send any funds, it is essentially read only."),(0,r.kt)("p",null,"To send funds from your wallet, you will need to use both devices."),(0,r.kt)("h3",{id:"transacting"},"Transacting"),(0,r.kt)("p",null,"To make a transaction when using the Cold Storage solution, there are 5 steps. You will need to use the Terminal MiniDapp,Docker Terminal, or your desktop Command Line where Minima is running:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the online node, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"sendnosign")," command to create a transaction file, sending the amount you wish to send to your chosen recipient's address"),(0,r.kt)("li",{parentName:"ol"},"Transfer the unsigned transaction file to the offline device"),(0,r.kt)("li",{parentName:"ol"},"On the offline node, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"sendsign")," command to sign the transaction with your private keys"),(0,r.kt)("li",{parentName:"ol"},"Transfer the signed transaction file to the online device"),(0,r.kt)("li",{parentName:"ol"},"On the online device, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"sendpost")," command to post the signed transaction")),(0,r.kt)("h4",{id:"walk-through"},"Walk-through"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On your online node, create a transaction using ",(0,r.kt)("inlineCode",{parentName:"li"},"sendnosign"),".")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"sendnosign")," works exactly like the traditional ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," function but instead of sending, will export an unsigned transaction (.txn) file which needs to be transferred to your offline device for signing with your private keys."),(0,r.kt)("p",{parentName:"div"},"For additional help, use ",(0,r.kt)("inlineCode",{parentName:"p"},"help command:sendnosign")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"help command:send"),"."))),(0,r.kt)("p",null,"Example output: (sending 1 Minima to the chosen address)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sendnosign amount:1 address:MxG0843TSJZ6U35CZSSR2D17G4TE9M68JVT4KUNR4TBQ6H9TRBFZYH23D50TRSH\n{\n  "command":"sendnosign",\n  "params":{\n    "amount":"1",\n    "address":"MxG0843TSJZ6U35CZSSR2D17G4TE9M68JVT4KUNR4TBQ6H9TRBFZYH23D50TRSH"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "txpow":"/home/minima/data/unsignedtransaction-1672851796504.txn"\n  }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the file in your Minima base folder and transfer the transaction file to your offline node via a USB key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To sign the transaction file, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sendsign")," inserting the name of the .txn file and your Vault password that you used in step 9 above to encrypt (passwordlock) your keys. This will decrypt your keys, sign the transaction and automatically re-encrypt them with the same password."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sendsign file:... password:yourvaultpassword\n")),(0,r.kt)("p",null,"This will export a .txn file containing your signed transaction."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sendsign file:/home/minima/data/unsignedtransaction-1672851796504.txn password:yourvaultpassword\n{\n  "command":"sendsign",\n  "params":{\n    "file":"/home/minima/data/unsignedtransaction-1672851796504.txn"\n    "password":"yourvaultpassword"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "txpow":"/home/minima/data/signedtransaction-1672852113421.txn"\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Alternatively, you can unlock your node first using:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"vault action:passwordunlock password:yourvaultpassword\n")),(0,r.kt)("p",{parentName:"blockquote"},"then use"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"sendsign file:... \n")),(0,r.kt)("p",{parentName:"blockquote"},"then, re-lock your node"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"vault action:passwordlock password:yourvaultpassword confirm:yourvaultpassword\n"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Transfer the signed transaction file back to your online node using a USB key, ensuring it is in your node's basefolder. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Broadcast the transaction to the Minima network with ",(0,r.kt)("inlineCode",{parentName:"p"},"sendpost file:")," function."))),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sendpost file:/home/minima/data/signedtransaction-1672852113421.txn\n{\n  "command":"sendpost",\n  "params":{\n    "file":"/home/minima/data/signedtransaction-1672852113421.txn"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "txpow":{\n      "txpowid":"0xB41C5F1D68E33410337D0A98EFF5C937F1B9189C46F0BB3F82271B017BFF07F3",\n\u2026\n')),(0,r.kt)("p",null,"That's it. You can also view the signed or unsigned transaction at any time using ",(0,r.kt)("inlineCode",{parentName:"p"},"sendview file:")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sendview file:/home/minima/data/signedtransaction-1672852113421.txn\n{\n  "command":"sendview",\n  "params":{\n    "file":"/home/minima/data/signedtransaction-1672852113421.txn"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "txpow":{\n      "txpowid":"0xB41C5F1D68E33410337D0A98EFF5C937F1B9189C46F0BB3F82271B017BFF07F3",\n      "isblock":false,\n      "istransaction":false,\n      "superblock":-1\u2026\n')))}m.isMDXComponent=!0}}]);