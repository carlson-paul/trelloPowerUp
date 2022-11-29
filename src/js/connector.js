import {google} from 'googleapis';
console.log("goodbest google sheet integrator");

let BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

window.TrelloPowerUp.initialize(
  {
    "board-buttons": function (t) {
      return [
        {
          icon: BLACK_ROCKET_ICON,
          text: "Goodbeast GSheet integration",
          callback: function (t) {
						const keys = {
							"type": "service_account",
							"project_id": "integration-366313",
							"private_key_id": "d5f213f48851ee215191f78360778a66c8a63b6f",
							"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMg9kwfKmuRL+U\nG4npajyry1dHQlFKnaek/fRVC8MSuEMk6u3a3SzBwY9dltEtFEycK5jjCIY0wmj7\nqyQ+uVHpImPghsDfPn2UVNDV1SDTYURSZS/ciIsIicUq5+yCpgqpO9tT0PAszBme\n8xMLjigTY+JJlQHS34LpRe+85vdVpULzb11zF2GburaBEvhRfAYbemuTtGJ2nKna\nSYDcHN5JJZV1JCoax7uOvriw5YYQKn0dMC6BlKmPRPkZ2lRGcIIUnRpIErUwiN3q\nCM52PeW9CRhGLviIyOMdaHlZ9ywfMZlf8FN686bJrY0B7+svoh+ZLm2jM20r536s\n4CtCZkwLAgMBAAECggEALDGps1KdEC2HAKhayvfMGIueVqW8D1W2Lm86Z05dXyQ2\nTjn+IDd/PndnVaALn6QtUeoR5a2n4qrIKOo4sN03GBv4XUKBVzyXwn/5iNu/di4k\np3F6QDu5X6T12Gm5sBnVX/CxWpFh9Sw9tR1t1idn/ZiuA5yRglIOZf5Y6gc3F2h1\npAtTm0De7cuFURPbKnGoGn4yVwvJN7GUmOLuoT/zj+M7gzo4nnILah8EB3S06QGX\nKG+n839WQoMMSI60kPpgjkCJ56YULKcWB7QSLb1Y+sVC+lvG4FmG2fcwaFTq4VLm\nXAc//gi6zK7i4IA1Rxpqsn/ehy/Za6KCGDzcbtgdEQKBgQD5wNhf+QRBpRmsF8e+\n6kY3KkeNuBDymEoxyGr99JQOaYQ9WMdCj8YSQsaxs9T+jgitZfRcxDt4b3xJOy7V\nqYymLM+hlPRoekUuvT4xKH55FcYAQfrs+wIYMvdaoeeA05YmBtblCbcvcMkJpjkj\n/HFbuhwSCrGyXBxT4rG1QHOk1wKBgQDRoVhqXAXadxKmVCjEFLrqBKTFG1Z/mrzT\nfhV5CAaJqsvVvAUOJHbfRTNQzfrd9J6uYdNLMXLmsAwZHlqQTCSnXRl/oz9Yxhzh\nMlIwz8yI9Yd2vo8OaFnONwNsvvqIqAS77TnAfJNBM1XTKMExuCrEbuojEcHj9pZQ\n9DXS9me37QKBgE2V6eHOktLtvg7nCEc3sf5bJQVSg/lI8+uJLiucOg5MGyePl78G\nuOpdUipMCkPVzb5IKORUlYDxaTO6re70D9xjmVDB3DdEnI9LfLF6uedVqz/TP2c1\nBs6Lrqm6GBe+IyvG/iUCoqSbLejQeXnDZ1eudh/osJEO6kHo73m1/vbbAoGAGJDP\ny6b9CJzrkpJKNLA5NzNUG8UYXdvERQSBf61xFrDtMh7WeNHNHFz/pnh87YW9ErJk\nEGu7C02WHVtxQXeq0/IVCuAWjFCrEbjT6ORxE5uyRDgQi5+u5nuL6zJ2KY2HAH7M\nRcJTf1CEvjoIacsrN9nHllR+ZDiBZPs5U3+MqAECgYEA7C5MlvmxHozn2pnSVYgC\nTzd9Zf8EuCg2mCI8PZxMsj6Cb6CRG7oTRya0O363SvBe9sRybG5ah8t9G4R3dA+/\n0PrNKOsrcMGsNubsdilPR6cfG7lzArORIWMHadYveaNHf5ej6wmyUXShp+lcx5Go\nkEYNtJnaultVDwj7G84URUg=\n-----END PRIVATE KEY-----\n",
							"client_email": "integration@integration-366313.iam.gserviceaccount.com",
							"client_id": "115916993480137684136",
							"auth_uri": "https://accounts.google.com/o/oauth2/auth",
							"token_uri": "https://oauth2.googleapis.com/token",
							"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
							"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/integration%40integration-366313.iam.gserviceaccount.com"
						};
						const auth = new google.auth.GoogleAuth({
														keyFile: keys,
														scopes: 'https://www.googleapis.com/auth/spreadsheets'
													});
													const cardList = [];
													const listDict = {};
													const memberDict = {};
													const labelDict = {};
													const priorityDict = {};
													const cardPriorityList = [];

													let context = t.getContext();
								let boardId = context['board'];
													// const authClientObject = auth.getClient();
													// const googleSheetInstance = google.sheets({version: 'v4',auth: authClientObject});
													// const spreadsheetId = '1onix_nrV409KUSIwi_cFMs445_7NEHi9cbwAQlF8WIk';

            (async function () {
							

              const cardResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/cards?customFieldItems=true&key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let cardData = await cardResponse.text();
              const listResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/lists?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let listData = await listResponse.text();
              const memberResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/members?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let memberData = await memberResponse.text();
              const labelResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/labels?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let labelData = await labelResponse.text();
              const priorityResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/customFields?key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let priorityData = await priorityResponse.text();
              let cardPriorityResponse = await fetch(
                `https://api.trello.com/1/boards/${boardId}/cards/?fields=name&customFieldItems=true&key=8567e52ef0a5c3a9a4a76eb2722ea6d0&token=491a487812cc3fb1d1f188f9e693340640d287f36ef0bac4880c1fb707edbedc`
              );
              let cardPriorityResponseData = await cardPriorityResponse.text();

              cardData = JSON.parse(cardData);
              listData = JSON.parse(listData);
              memberData = JSON.parse(memberData);
              labelData = JSON.parse(labelData);
              priorityData = JSON.parse(priorityData);
              cardPriorityResponseData = JSON.parse(cardPriorityResponseData);

              listData.map((x) => {
                listDict[x.id] = x.name;
              });
              memberData.map((x) => {
                memberDict[x.id] = x.fullName;
              });
              labelData.map((x) => {
                labelDict[x.id] = x.name;
              });
              priorityData[0].options.map((x) => {
                priorityDict[x.id] = x.value.text;
              });
              cardPriorityResponseData.map((x) => {
                if (x.customFieldItems.length > 0) {
                  const cardPriorityDict = {};
                  cardPriorityDict["id"] = x.id;
                  cardPriorityDict["priority value"] =
                    priorityDict[x.customFieldItems];
                  cardPriorityList.push(cardPriorityDict);
                }
              });

              cardData.map((x) => {
                const cardDict = {};
                cardDict["id"] = x.id;
                cardDict["title"] = x.name;
                cardDict["description"] = x.desc;
                cardDict["url"] = x.url;
                cardDict["comments"] = x.badges.comments;
                cardDict["list"] = listDict[x.idList];
                x.idMembers.forEach((m, index) => {
                  x.idMembers[index] = memberDict[m];
                });
                cardDict["members"] = x.idMembers.join();
                x.idLabels.forEach((l, index) => {
                  x.idLabels[index] = labelDict[l];
                });
                cardDict["labels"] = x.idLabels.join(", ");
                if (x.dateLastActivity) {
                  let date = new Date(x.dateLastActivity);
                  date = date.toDateString();
                  cardDict["last activity"] = date;
                }
                if (x.due) {
                  let date = new Date(x.due);
                  date = date.toDateString();
                  cardDict["due date"] = date;
                }
                if (x.customFieldItems.length > 0) {
                  cardDict["priority"] =
                    priorityDict[x.customFieldItems[0].idValue];
                }
                cardList.push(cardDict);
              });
              // cardList.map(x=>{console.log(x.priority)})
              console.log(cardList);
              const finalList = [];
              cardList.forEach((x) => {
                finalList.push(Object.values(x));
              });
            })();
          },
        },
      ];
    },
  },
  {
    appKey: "8567e52ef0a5c3a9a4a76eb2722ea6d0",
    appName: "Goodbeast GSheet integration",
  }
);

// window.TrelloPowerUp.initialize({
//   'card-back-section': (t, options) => getTranslations(locale)
//     .then(response => response.json())
//     .then(trans => t.set('organization', 'shared', 'trans', trans))
//     .then(() => t.getRestApi()
//       .isAuthorized()
//       .then(isAuthorized => isAuthorized
//         ? renderHistory(t)
//         : askAuthorization(t)
//       ),
//     )
// }, {
//   appKey: 'no-you-wont-have-my-key',
//   appName: 'KNP Trello History',
// })

// console.log('hello world');
// var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
// window.TrelloPowerUp.initialize({
// 	'board-buttons': function(t,options){
// 		let apiCall = t.getRestApi();
// 		let context = t.getContext();
// 		let boardId = context['board'];

// 		return[{
// 			icon: BLACK_ROCKET_ICON,
// 			text: 'Goodbeast GSheet integration'
// 		}];
// 	}
// })
