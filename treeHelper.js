var myTree =
     [
          {
               "id": "0",
               "Answer": null,
               "Question": "this is the first Question",
               "Children": [

               ]
          }
     ];

function addChildToNode(id) {
     addChildToTree(id.substring(8, id.length), id.substring(8, id.length), myTree);
}

function removeChildFromNode(id) {
     $("#treePath" + id.substring(8, id.length)).empty();
     $("#treePath" + id.substring(8, id.length)).remove();
     removeChildFromTree(id.substring(8, id.length), id.substring(8, id.length), myTree);
}

function getSubQuestionStringGivenId(id) {
     return '<div class="treeAlign"> ' +
          '<div id=\'treePath' + id + '\'>' +
          '<span id="1d'+id +'"><input type="textarea" id="1ta'+id +'" placeholder="type choice text"></input></span>' +
          '<span id="2d'+id +'"><input type="textarea" id="2ta'+id +'" placeholder="type question text"></input></span>' +
          '<button onclick="addChildToNode(\'treePath' + id + '\')">add sub</button> ' +
          '<div id="2d'+id +'"><button onclick="confirmWithId(\'treePath' + id + '\')">confirm information</button></div>' +
          '<button onclick="removeChildFromNode(\'treePath' + id + '\')">delete option</button> ' +
          '</div></div>';
}

function getNumToAdd(myArray){
     if(myArray.length == 0){
          return 0;
     }
     var lastId = myArray[myArray.length-1].id;
     
     return parseInt(lastId.charAt(lastId.length-1))+1;
}

//this one recieves just the num as a string so it can recurse
function addChildToTree(origId, id, treeOb) {
     if (id.length == 1) {
          console.log(id);
          for (var i = 0; i < treeOb.length; i++) {
               if (treeOb[i].id.charAt(treeOb[i].id.length - 1) === id.charAt(0)) {
                    var t1 = treeOb[i]["Children"];
                    var numToAdd = getNumToAdd(treeOb[i]["Children"]);
                    t1.push(getChildToAddToTree(id, numToAdd));
                    console.log("origid: " + origId);
                    $("#treePath" + origId).append(getSubQuestionStringGivenId(origId + numToAdd));
                    break;
               }
          }
     } else {
          //console.log(id.substring(0,1));
          for (var i = 0; i < treeOb.length; i++) {
               if (treeOb[i].id.charAt(treeOb[i].id.length - 1) === id.charAt(0)) {
                    addChildToTree(origId, id.substring(1, id.length), treeOb[i]["Children"]);
               }
          }

     }
}

function getChildToAddToTree(id, addition) {
     return {
          "id": id + addition,
          "Answer": "empty",
          "Question": null,
          "Children": [
          ]
     }
}

function removeChildFromTree(origId, id, treeOb) {
     if (id.length == 1) {
         for (var i = 0; i < treeOb.length; i++) {
               if (treeOb[i].id.charAt(treeOb[i].id.length - 1) === id.charAt(0)) {
                    treeOb.splice(i, 1);
               }
         }
     } else {
          removeChildFromTree(origId, id.substring(1, id.length), treeOb[parseInt(id.substring(0, 1))]["Children"]);
     }
}

function confirmWithId(id){
     id = id.substring(8,id.length);
     var text1 = $("#1ta"+id).val();
     var text2 = $("#2ta"+id).val();
     $("#1d"+id).empty();
     $("#2d"+id).empty();
     $("#1d"+id).append('<span>Choice: '+ text1 +'</span>&nbsp;');
     $("#2d"+id).append('<span>-- On Choosing: '+ text2 +'</span>&nbsp;');
     editChildInTree(id, id, myTree, text1, text2);
     console.log(myTree);
}

function editChildInTree(origId, id, treeOb, answer, question) {
     if (id.length == 1) {
         for (var i = 0; i < treeOb.length; i++) {
               if (treeOb[i].id.charAt(treeOb[i].id.length - 1) === id.charAt(0)) {
                    treeOb[i].Answer = answer;
                    treeOb[i].Question = question;
               }
         }
     } else {
          editChildInTree(origId, id.substring(1, id.length), treeOb[parseInt(id.substring(0, 1))]["Children"], answer, question);
     }
}