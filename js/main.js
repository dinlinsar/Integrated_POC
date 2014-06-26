$(function () {
    var $textarea = $('#textarea1');
    $textarea.keyup(function (event) {
        var text = document.getElementById("textarea1");
        var content = text.value;
        var caretPos = GetCaretPosition(text);
        //var lastWord = "";

        var word = ReturnWord(content, caretPos);
        word = word.trim();
        var test = word.split(" ");
        var lastWordIndex = test.length - 2;
        var lastWord = test[lastWordIndex];
        if (lastWord) {
            lastWord = lastWord.trim();
        }
        //console.log("word----->",text.value);
        if (word != " ") {

            //console.log("lastWord----------->",lastWord);
            if (lastWord == 'entity') {
                //console.log("entity");
                trules = ['location', 'Network', 'Sample', 'entity4'];
            } else if (lastWord == 'service') {
                //console.log("service");
                trules = ['getLocations', 'getNetworks', 'RestService', 'service4'];
            } else if (lastWord == 'endpoint') {
                //console.log("endpoint");
                trules = ['endpoint1', 'endpoint2', 'endpoint3'];
            } else {
                //console.log("default");
                trules = ['entity', 'endpoint', 'service', 'to', 'begin', 'end'];
            }
        } else {
            trules = ['entity', 'endpoint', 'service', 'to', 'begin', 'end'];
        }

        /*         var enteredText = $('#textarea1').val();
        enteredText = enteredText.slice(0, -1);
        if (enteredText.match('\n')) {
            trules = ['entity', 'endpoint', 'service', 'to', 'begin', 'end'];
        } */

        $('#textarea1').textcomplete([{ // trule strategy

            match: /\b(\w{1,})$/,
            search: function (term, callback) {
                console.log("trules---->", trules)
                callback($.map(trules, function (trule) {
                    return trule.indexOf(term) === 0 ? trule : null;
                }), false);
            },
            template: function (value) {
                return value + ' ';
            },
            replace: function (value) {
                return value + ' ';
            },
            index: 0,
            maxCount: 10
        }]);
    });

    $('.script').each(function () {
        eval($(this).text());
    });

    var setText = function ($textarea, text) {
        var range, textarea = $textarea.get(0);
        textarea.focus();
        if (typeof textarea.selectionStart === 'number') {
            textarea.value = text;
            textarea.selectionStart = textarea.selectionEnd = text.length;
            return;
        }
        range = textarea.createTextRange();
        range.text = text
        range.select();
    }


    var textarea = $textarea.get(0);
    $textarea.focus();
    if (typeof textarea.selectionStart === 'number') {
        textarea.selectionStart = textarea.selectionEnd = $textarea.val().length;
    } else {
        var range = textarea.createTextRange();
        range.select();
    }
    //$textarea.keyup();




    //Draggable
    $("#DragWordList li label").draggable({
        helper: 'clone'
    });
    $("#DragWordList li ul li").draggable({
        helper: 'clone'
    });
    $(".context-menu-sub").droppable({

        accept: "#DragWordList ul li,#DragWordList li label",
        drop: function (ev, ui) {
            var labelText = ui.draggable.parent().parent().find('label').text();
            var draggedID = ui.draggable.text();
            var parent = ui.draggable.attr('id');
            console.log(parent);
            var lines = draggedID.split(/\n/);
            if (parent == "label1") {
                $(this).insertAtCaret(lines[0]);
            }
            if (parent != "label1") {
                var txt = ui.draggable.text();
                var val = labelText + '.' + txt;
                $(this).insertAtCaret(val);
            }
        }
    });

    $.fn.insertAtCaret = function (myValue) {
        return this.each(function () {
            //IE support
            if (document.selection) {
                this.focus();
                sel = document.selection.createRange();
                sel.text = myValue;
                this.focus();
            }
            //MOZILLA / NETSCAPE support
            else if (this.selectionStart || this.selectionStart == '0') {
                var startPos = this.selectionStart;
                var endPos = this.selectionEnd;
                var scrollTop = this.scrollTop;
                this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
                this.focus();
                this.selectionStart = startPos + myValue.length;
                this.selectionEnd = startPos + myValue.length;
                this.scrollTop = scrollTop;
            } else {
                this.value += myValue;
                this.focus();
            }
        });
    };


    //Text Editor Contet menus
    /**************************************************
     * Context-Menu with Sub-Menu
     **************************************************/
    var contextMenuData = {
        "entity": {
            "name": "Entity",
            "items": {
                "ent**11": {
                    "name": "Login_CREATE",
                    "items": {
                        "entityAttr**Login_CREATE**RequestRoot**11**1": {
                            "name": "RequestRoot"
                        },
                        "sep**11**1": "---------",
                        "entityAttr**Login_CREATE**login**11**2": {
                            "name": "login"
                        },
                        "sep**11**2": "---------",
                        "entityAttr**Login_CREATE**password**11**3": {
                            "name": "password"
                        },
                        "sep**11**3": "---------",
                        "entityAttr**Login_CREATE**ResponseRoot**11**4": {
                            "name": "ResponseRoot"
                        },
                        "sep**11**4": "---------",
                        "entityAttr**Login_CREATE**LoginResult**11**5": {
                            "name": "LoginResult"
                        },
                        "sep**11**5": "---------",
                        "entityAttr**Login_CREATE**IsSuccess**11**6": {
                            "name": "IsSuccess"
                        },
                        "sep**11**6": "---------",
                        "entityAttr**Login_CREATE**Message**11**7": {
                            "name": "Message"
                        },
                        "sep**11**7": "---------",
                        "entityAttr**Login_CREATE**IsRelocated**11**8": {
                            "name": "IsRelocated"
                        },
                        "sep**11**8": "---------",
                        "entityAttr**Login_CREATE**LoginStatus**11**9": {
                            "name": "LoginStatus"
                        },
                        "sep**11**9": "---------",
                        "entityAttr**Login_CREATE**ServiceUrl**11**10": {
                            "name": "ServiceUrl"
                        },
                        "sep**11**10": "---------",
                        "entityAttr**Login_CREATE**UserContext**11**11": {
                            "name": "UserContext"
                        },
                        "sep**11**11": "---------",
                        "entityAttr**Login_CREATE**IsSuccess**11**12": {
                            "name": "IsSuccess"
                        },
                        "sep**11**12": "---------",
                        "entityAttr**Login_CREATE**Message**11**13": {
                            "name": "Message"
                        },
                        "sep**11**13": "---------",
                        "entityAttr**Login_CREATE**ExpiresOn**11**14": {
                            "name": "ExpiresOn"
                        },
                        "sep**11**14": "---------",
                        "entityAttr**Login_CREATE**Token**11**15": {
                            "name": "Token"
                        },
                        "sep**11**15": "---------"
                    }
                },
                "sep**11": "---------",
                "ent**12": {
                    "name": "GetAllRoles_CREATE",
                    "items": {
                        "entityAttr**GetAllRoles_CREATE**RequestRoot**12**1": {
                            "name": "RequestRoot"
                        },
                        "sep**12**1": "---------",
                        "entityAttr**GetAllRoles_CREATE**userContext**12**2": {
                            "name": "userContext"
                        },
                        "sep**12**2": "---------",
                        "entityAttr**GetAllRoles_CREATE**IsSuccess**12**3": {
                            "name": "IsSuccess"
                        },
                        "sep**12**3": "---------",
                        "entityAttr**GetAllRoles_CREATE**Message**12**4": {
                            "name": "Message"
                        },
                        "sep**12**4": "---------",
                        "entityAttr**GetAllRoles_CREATE**ExpiresOn**12**5": {
                            "name": "ExpiresOn"
                        },
                        "sep**12**5": "---------",
                        "entityAttr**GetAllRoles_CREATE**Token**12**6": {
                            "name": "Token"
                        },
                        "sep**12**6": "---------",
                        "entityAttr**GetAllRoles_CREATE**ResponseRoot**12**7": {
                            "name": "ResponseRoot"
                        },
                        "sep**12**7": "---------",
                        "entityAttr**GetAllRoles_CREATE**GetAllRolesResult**12**8": {
                            "name": "GetAllRolesResult"
                        },
                        "sep**12**8": "---------",
                        "entityAttr**GetAllRoles_CREATE**UserRole**12**9": {
                            "name": "UserRole"
                        },
                        "sep**12**9": "---------",
                        "entityAttr**GetAllRoles_CREATE**IsSuccess**12**10": {
                            "name": "IsSuccess"
                        },
                        "sep**12**10": "---------",
                        "entityAttr**GetAllRoles_CREATE**Message**12**11": {
                            "name": "Message"
                        },
                        "sep**12**11": "---------",
                        "entityAttr**GetAllRoles_CREATE**OperationList**12**12": {
                            "name": "OperationList"
                        },
                        "sep**12**12": "---------",
                        "entityAttr**GetAllRoles_CREATE**CRMOperation**12**13": {
                            "name": "CRMOperation"
                        },
                        "sep**12**13": "---------",
                        "entityAttr**GetAllRoles_CREATE**RoleKey**12**14": {
                            "name": "RoleKey"
                        },
                        "sep**12**14": "---------",
                        "entityAttr**GetAllRoles_CREATE**RoleName**12**15": {
                            "name": "RoleName"
                        },
                        "sep**12**15": "---------"
                    }
                },
                "sep**12": "---------",
                "ent**13": {
                    "name": "Fetch_CREATE",
                    "items": {
                        "entityAttr**Fetch_CREATE**RequestRoot**13**1": {
                            "name": "RequestRoot"
                        },
                        "sep**13**1": "---------",
                        "entityAttr**Fetch_CREATE**userContext**13**2": {
                            "name": "userContext"
                        },
                        "sep**13**2": "---------",
                        "entityAttr**Fetch_CREATE**IsSuccess**13**3": {
                            "name": "IsSuccess"
                        },
                        "sep**13**3": "---------",
                        "entityAttr**Fetch_CREATE**Message**13**4": {
                            "name": "Message"
                        },
                        "sep**13**4": "---------",
                        "entityAttr**Fetch_CREATE**ExpiresOn**13**5": {
                            "name": "ExpiresOn"
                        },
                        "sep**13**5": "---------",
                        "entityAttr**Fetch_CREATE**Token**13**6": {
                            "name": "Token"
                        },
                        "sep**13**6": "---------",
                        "entityAttr**Fetch_CREATE**objectType**13**7": {
                            "name": "objectType"
                        },
                        "sep**13**7": "---------",
                        "entityAttr**Fetch_CREATE**objectids**13**8": {
                            "name": "objectids"
                        },
                        "sep**13**8": "---------",
                        "entityAttr**Fetch_CREATE**CRMnextObjectKey**13**9": {
                            "name": "CRMnextObjectKey"
                        },
                        "sep**13**9": "---------",
                        "entityAttr**Fetch_CREATE**ItemKey**13**10": {
                            "name": "ItemKey"
                        },
                        "sep**13**10": "---------",
                        "entityAttr**Fetch_CREATE**ResponseRoot**13**11": {
                            "name": "ResponseRoot"
                        },
                        "sep**13**11": "---------",
                        "entityAttr**Fetch_CREATE**FetchResult**13**12": {
                            "name": "FetchResult"
                        },
                        "sep**13**12": "---------",
                        "entityAttr**Fetch_CREATE**FetchResult**13**13": {
                            "name": "FetchResult"
                        },
                        "sep**13**13": "---------",
                        "entityAttr**Fetch_CREATE**IsSuccess**13**14": {
                            "name": "IsSuccess"
                        },
                        "sep**13**14": "---------",
                        "entityAttr**Fetch_CREATE**Message**13**15": {
                            "name": "Message"
                        },
                        "sep**13**15": "---------",
                        "entityAttr**Fetch_CREATE**CRMnextObject**13**16": {
                            "name": "CRMnextObject"
                        },
                        "sep**13**16": "---------"
                    }
                },
                "sep**13": "---------",
                "ent**14": {
                    "name": "Save_CREATE",
                    "items": {
                        "entityAttr**Save_CREATE**RequestRoot**14**1": {
                            "name": "RequestRoot"
                        },
                        "sep**14**1": "---------",
                        "entityAttr**Save_CREATE**userContext**14**2": {
                            "name": "userContext"
                        },
                        "sep**14**2": "---------",
                        "entityAttr**Save_CREATE**IsSuccess**14**3": {
                            "name": "IsSuccess"
                        },
                        "sep**14**3": "---------",
                        "entityAttr**Save_CREATE**Message**14**4": {
                            "name": "Message"
                        },
                        "sep**14**4": "---------",
                        "entityAttr**Save_CREATE**ExpiresOn**14**5": {
                            "name": "ExpiresOn"
                        },
                        "sep**14**5": "---------",
                        "entityAttr**Save_CREATE**Token**14**6": {
                            "name": "Token"
                        },
                        "sep**14**6": "---------",
                        "entityAttr**Save_CREATE**objects**14**7": {
                            "name": "objects"
                        },
                        "sep**14**7": "---------",
                        "entityAttr**Save_CREATE**CRMnextObject**14**8": {
                            "name": "CRMnextObject"
                        },
                        "sep**14**8": "---------",
                        "entityAttr**Save_CREATE**returnObjectOnSave**14**9": {
                            "name": "returnObjectOnSave"
                        },
                        "sep**14**9": "---------",
                        "entityAttr**Save_CREATE**ResponseRoot**14**10": {
                            "name": "ResponseRoot"
                        },
                        "sep**14**10": "---------",
                        "entityAttr**Save_CREATE**SaveResult**14**11": {
                            "name": "SaveResult"
                        },
                        "sep**14**11": "---------",
                        "entityAttr**Save_CREATE**SaveResult**14**12": {
                            "name": "SaveResult"
                        },
                        "sep**14**12": "---------",
                        "entityAttr**Save_CREATE**IsSuccess**14**13": {
                            "name": "IsSuccess"
                        },
                        "sep**14**13": "---------",
                        "entityAttr**Save_CREATE**Message**14**14": {
                            "name": "Message"
                        },
                        "sep**14**14": "---------",
                        "entityAttr**Save_CREATE**ApiObject**14**15": {
                            "name": "ApiObject"
                        },
                        "sep**14**15": "---------",
                        "entityAttr**Save_CREATE**objectKey**14**16": {
                            "name": "objectKey"
                        },
                        "sep**14**16": "---------",
                        "entityAttr**Save_CREATE**ItemKey**14**17": {
                            "name": "ItemKey"
                        },
                        "sep**14**17": "---------"
                    }
                },
                "sep**14": "---------",
                "ent**49": {
                    "name": "GetWeatherInformation_CREATE",
                    "items": {
                        "entityAttr**GetWeatherInformation_CREATE**ResponseRoot**49**1": {
                            "name": "ResponseRoot"
                        },
                        "sep**49**1": "---------",
                        "entityAttr**GetWeatherInformation_CREATE**GetWeatherInformationResult**49**2": {
                            "name": "GetWeatherInformationResult"
                        },
                        "sep**49**2": "---------",
                        "entityAttr**GetWeatherInformation_CREATE**WeatherDescription**49**3": {
                            "name": "WeatherDescription"
                        },
                        "sep**49**3": "---------",
                        "entityAttr**GetWeatherInformation_CREATE**WeatherID**49**4": {
                            "name": "WeatherID"
                        },
                        "sep**49**4": "---------",
                        "entityAttr**GetWeatherInformation_CREATE**Description**49**5": {
                            "name": "Description"
                        },
                        "sep**49**5": "---------",
                        "entityAttr**GetWeatherInformation_CREATE**PictureURL**49**6": {
                            "name": "PictureURL"
                        },
                        "sep**49**6": "---------"
                    }
                },
                "sep**49": "---------"
            }
        },
        "sepEntity": "---------",
        "service": {
            "name": "Service",
            "items": {
                "serv**16": {
                    "name": "CRMServices",
                    "items": {
                        "request**16": {
                            "name": "Request",
                            "items": {
                                "serReqAttr**request**16**login**2": {
                                    "name": "login"
                                },
                                "sepReqAttr**16**2": "---------",
                                "serReqAttr**request**16**password**3": {
                                    "name": "password"
                                },
                                "sepReqAttr**16**3": "---------",
                                "serReqAttr**request**16**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "sepReqAttr**16**1": "---------"
                            }
                        },
                        "sep_reqser**16": "---------",
                        "response**16": {
                            "name": "Response",
                            "items": {
                                "serResAttr**response**16**ResponseRoot**4": {
                                    "name": "ResponseRoot"
                                },
                                "sepResAttr**16**4": "---------",
                                "serResAttr**response**16**LoginResult**5": {
                                    "name": "LoginResult"
                                },
                                "sepResAttr**16**5": "---------",
                                "serResAttr**response**16**IsSuccess**6": {
                                    "name": "IsSuccess"
                                },
                                "sepResAttr**16**6": "---------",
                                "serResAttr**response**16**Message**7": {
                                    "name": "Message"
                                },
                                "sepResAttr**16**7": "---------",
                                "serResAttr**response**16**IsRelocated**8": {
                                    "name": "IsRelocated"
                                },
                                "sepResAttr**16**8": "---------",
                                "serResAttr**response**16**LoginStatus**9": {
                                    "name": "LoginStatus"
                                },
                                "sepResAttr**16**9": "---------",
                                "serResAttr**response**16**ServiceUrl**10": {
                                    "name": "ServiceUrl"
                                },
                                "sepResAttr**16**10": "---------",
                                "serResAttr**response**16**UserContext**11": {
                                    "name": "UserContext"
                                },
                                "sepResAttr**16**11": "---------",
                                "serResAttr**response**16**IsSuccess**12": {
                                    "name": "IsSuccess"
                                },
                                "sepResAttr**16**12": "---------",
                                "serResAttr**response**16**Message**13": {
                                    "name": "Message"
                                },
                                "sepResAttr**16**13": "---------",
                                "serResAttr**response**16**ExpiresOn**14": {
                                    "name": "ExpiresOn"
                                },
                                "sepResAttr**16**14": "---------",
                                "serResAttr**response**16**Token**15": {
                                    "name": "Token"
                                },
                                "sepResAttr**16**15": "---------"
                            }
                        },
                        "sep_resser**16": "---------"
                    }
                },
                "sep**16": "---------",
                "serv**21": {
                    "name": "CRMServices",
                    "items": {
                        "request**21": {
                            "name": "Request",
                            "items": {
                                "serReqAttr**request**21**userContext**2": {
                                    "name": "userContext"
                                },
                                "sepReqAttr**21**2": "---------",
                                "serReqAttr**request**21**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "sepReqAttr**21**3": "---------",
                                "serReqAttr**request**21**Message**4": {
                                    "name": "Message"
                                },
                                "sepReqAttr**21**4": "---------",
                                "serReqAttr**request**21**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "sepReqAttr**21**5": "---------",
                                "serReqAttr**request**21**Token**6": {
                                    "name": "Token"
                                },
                                "sepReqAttr**21**6": "---------",
                                "serReqAttr**request**21**objects**7": {
                                    "name": "objects"
                                },
                                "sepReqAttr**21**7": "---------",
                                "serReqAttr**request**21**CRMnextObject**8": {
                                    "name": "CRMnextObject"
                                },
                                "sepReqAttr**21**8": "---------",
                                "serReqAttr**request**21**returnObjectOnSave**9": {
                                    "name": "returnObjectOnSave"
                                },
                                "sepReqAttr**21**9": "---------",
                                "serReqAttr**request**21**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "sepReqAttr**21**1": "---------"
                            }
                        },
                        "sep_reqser**21": "---------",
                        "response**21": {
                            "name": "Response",
                            "items": {
                                "serResAttr**response**21**ResponseRoot**10": {
                                    "name": "ResponseRoot"
                                },
                                "sepResAttr**21**10": "---------",
                                "serResAttr**response**21**SaveResult**11": {
                                    "name": "SaveResult"
                                },
                                "sepResAttr**21**11": "---------",
                                "serResAttr**response**21**SaveResult**12": {
                                    "name": "SaveResult"
                                },
                                "sepResAttr**21**12": "---------",
                                "serResAttr**response**21**IsSuccess**13": {
                                    "name": "IsSuccess"
                                },
                                "sepResAttr**21**13": "---------",
                                "serResAttr**response**21**Message**14": {
                                    "name": "Message"
                                },
                                "sepResAttr**21**14": "---------",
                                "serResAttr**response**21**ApiObject**15": {
                                    "name": "ApiObject"
                                },
                                "sepResAttr**21**15": "---------",
                                "serResAttr**response**21**objectKey**16": {
                                    "name": "objectKey"
                                },
                                "sepResAttr**21**16": "---------",
                                "serResAttr**response**21**ItemKey**17": {
                                    "name": "ItemKey"
                                },
                                "sepResAttr**21**17": "---------"
                            }
                        },
                        "sep_resser**21": "---------"
                    }
                },
                "sep**21": "---------",
                "serv**33": {
                    "name": "CRMServices",
                    "items": {
                        "request**33": {
                            "name": "Request",
                            "items": {
                                "serReqAttr**request**33**userContext**2": {
                                    "name": "userContext"
                                },
                                "sepReqAttr**33**2": "---------",
                                "serReqAttr**request**33**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "sepReqAttr**33**3": "---------",
                                "serReqAttr**request**33**Message**4": {
                                    "name": "Message"
                                },
                                "sepReqAttr**33**4": "---------",
                                "serReqAttr**request**33**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "sepReqAttr**33**5": "---------",
                                "serReqAttr**request**33**Token**6": {
                                    "name": "Token"
                                },
                                "sepReqAttr**33**6": "---------",
                                "serReqAttr**request**33**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "sepReqAttr**33**1": "---------"
                            }
                        },
                        "sep_reqser**33": "---------",
                        "response**33": {
                            "name": "Response",
                            "items": {
                                "serResAttr**response**33**ResponseRoot**7": {
                                    "name": "ResponseRoot"
                                },
                                "sepResAttr**33**7": "---------",
                                "serResAttr**response**33**GetAllRolesResult**8": {
                                    "name": "GetAllRolesResult"
                                },
                                "sepResAttr**33**8": "---------",
                                "serResAttr**response**33**UserRole**9": {
                                    "name": "UserRole"
                                },
                                "sepResAttr**33**9": "---------",
                                "serResAttr**response**33**IsSuccess**10": {
                                    "name": "IsSuccess"
                                },
                                "sepResAttr**33**10": "---------",
                                "serResAttr**response**33**Message**11": {
                                    "name": "Message"
                                },
                                "sepResAttr**33**11": "---------",
                                "serResAttr**response**33**OperationList**12": {
                                    "name": "OperationList"
                                },
                                "sepResAttr**33**12": "---------",
                                "serResAttr**response**33**CRMOperation**13": {
                                    "name": "CRMOperation"
                                },
                                "sepResAttr**33**13": "---------",
                                "serResAttr**response**33**RoleKey**14": {
                                    "name": "RoleKey"
                                },
                                "sepResAttr**33**14": "---------",
                                "serResAttr**response**33**RoleName**15": {
                                    "name": "RoleName"
                                },
                                "sepResAttr**33**15": "---------"
                            }
                        },
                        "sep_resser**33": "---------"
                    }
                },
                "sep**33": "---------",
                "serv**42": {
                    "name": "CRMServices",
                    "items": {
                        "request**42": {
                            "name": "Request",
                            "items": {
                                "serReqAttr**request**42**userContext**2": {
                                    "name": "userContext"
                                },
                                "sepReqAttr**42**2": "---------",
                                "serReqAttr**request**42**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "sepReqAttr**42**3": "---------",
                                "serReqAttr**request**42**Message**4": {
                                    "name": "Message"
                                },
                                "sepReqAttr**42**4": "---------",
                                "serReqAttr**request**42**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "sepReqAttr**42**5": "---------",
                                "serReqAttr**request**42**Token**6": {
                                    "name": "Token"
                                },
                                "sepReqAttr**42**6": "---------",
                                "serReqAttr**request**42**objectType**7": {
                                    "name": "objectType"
                                },
                                "sepReqAttr**42**7": "---------",
                                "serReqAttr**request**42**objectids**8": {
                                    "name": "objectids"
                                },
                                "sepReqAttr**42**8": "---------",
                                "serReqAttr**request**42**CRMnextObjectKey**9": {
                                    "name": "CRMnextObjectKey"
                                },
                                "sepReqAttr**42**9": "---------",
                                "serReqAttr**request**42**ItemKey**10": {
                                    "name": "ItemKey"
                                },
                                "sepReqAttr**42**10": "---------",
                                "serReqAttr**request**42**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "sepReqAttr**42**1": "---------"
                            }
                        },
                        "sep_reqser**42": "---------",
                        "response**42": {
                            "name": "Response",
                            "items": {
                                "serResAttr**response**42**ResponseRoot**11": {
                                    "name": "ResponseRoot"
                                },
                                "sepResAttr**42**11": "---------",
                                "serResAttr**response**42**FetchResult**12": {
                                    "name": "FetchResult"
                                },
                                "sepResAttr**42**12": "---------",
                                "serResAttr**response**42**FetchResult**13": {
                                    "name": "FetchResult"
                                },
                                "sepResAttr**42**13": "---------",
                                "serResAttr**response**42**IsSuccess**14": {
                                    "name": "IsSuccess"
                                },
                                "sepResAttr**42**14": "---------",
                                "serResAttr**response**42**Message**15": {
                                    "name": "Message"
                                },
                                "sepResAttr**42**15": "---------",
                                "serResAttr**response**42**CRMnextObject**16": {
                                    "name": "CRMnextObject"
                                },
                                "sepResAttr**42**16": "---------"
                            }
                        },
                        "sep_resser**42": "---------"
                    }
                },
                "sep**42": "---------",
                "serv**80": {
                    "name": "WeatherServices",
                    "items": {
                        "request**80": {
                            "name": "Request",
                            "items": {}
                        },
                        "sep_reqser**80": "---------",
                        "response**80": {
                            "name": "Response",
                            "items": {
                                "serResAttr**response**80**ResponseRoot**1": {
                                    "name": "ResponseRoot"
                                },
                                "sepResAttr**80**1": "---------",
                                "serResAttr**response**80**GetWeatherInformationResult**2": {
                                    "name": "GetWeatherInformationResult"
                                },
                                "sepResAttr**80**2": "---------",
                                "serResAttr**response**80**WeatherDescription**3": {
                                    "name": "WeatherDescription"
                                },
                                "sepResAttr**80**3": "---------",
                                "serResAttr**response**80**WeatherID**4": {
                                    "name": "WeatherID"
                                },
                                "sepResAttr**80**4": "---------",
                                "serResAttr**response**80**Description**5": {
                                    "name": "Description"
                                },
                                "sepResAttr**80**5": "---------",
                                "serResAttr**response**80**PictureURL**6": {
                                    "name": "PictureURL"
                                },
                                "sepResAttr**80**6": "---------"
                            }
                        },
                        "sep_resser**80": "---------"
                    }
                },
                "sep**80": "---------"
            }
        },
        "sepService": "---------",
        "orchestration": {
            "name": "Orchestration",
            "items": {
                "orch**160": {
                    "name": "Login",
                    "items": {
                        "childorchent**11": {
                            "name": "Login_CREATE",
                            "items": {
                                "childOrchAttr**request**Login_CREATE**11**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**11**1": "---------",
                                "childOrchAttr**request**Login_CREATE**11**login**2": {
                                    "name": "login"
                                },
                                "childorchentattrsep**11**2": "---------",
                                "childOrchAttr**request**Login_CREATE**11**password**3": {
                                    "name": "password"
                                },
                                "childorchentattrsep**11**3": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ResponseRoot**4": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**11**4": "---------",
                                "childOrchAttr**response**Login_CREATE**11**LoginResult**5": {
                                    "name": "LoginResult"
                                },
                                "childorchentattrsep**11**5": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsSuccess**6": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**11**6": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Message**7": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**11**7": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsRelocated**8": {
                                    "name": "IsRelocated"
                                },
                                "childorchentattrsep**11**8": "---------",
                                "childOrchAttr**response**Login_CREATE**11**LoginStatus**9": {
                                    "name": "LoginStatus"
                                },
                                "childorchentattrsep**11**9": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ServiceUrl**10": {
                                    "name": "ServiceUrl"
                                },
                                "childorchentattrsep**11**10": "---------",
                                "childOrchAttr**response**Login_CREATE**11**UserContext**11": {
                                    "name": "UserContext"
                                },
                                "childorchentattrsep**11**11": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsSuccess**12": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**11**12": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Message**13": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**11**13": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ExpiresOn**14": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**11**14": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Token**15": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**11**15": "---------"
                            }
                        },
                        "childorchentsep**11": "---------",
                        "childorchent**12": {
                            "name": "GetAllRoles_CREATE",
                            "items": {
                                "childOrchAttr**request**GetAllRoles_CREATE**12**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**12**1": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**12**2": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**12**3": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**12**4": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**12**5": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**12**6": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**ResponseRoot**7": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**12**7": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**GetAllRolesResult**8": {
                                    "name": "GetAllRolesResult"
                                },
                                "childorchentattrsep**12**8": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**UserRole**9": {
                                    "name": "UserRole"
                                },
                                "childorchentattrsep**12**9": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**IsSuccess**10": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**12**10": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**Message**11": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**12**11": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**OperationList**12": {
                                    "name": "OperationList"
                                },
                                "childorchentattrsep**12**12": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**CRMOperation**13": {
                                    "name": "CRMOperation"
                                },
                                "childorchentattrsep**12**13": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**RoleKey**14": {
                                    "name": "RoleKey"
                                },
                                "childorchentattrsep**12**14": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**RoleName**15": {
                                    "name": "RoleName"
                                },
                                "childorchentattrsep**12**15": "---------"
                            }
                        },
                        "childorchentsep**12": "---------",
                        "childorchent**13": {
                            "name": "Fetch_CREATE",
                            "items": {
                                "childOrchAttr**request**Fetch_CREATE**13**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**13**1": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**13**2": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**13**3": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**13**4": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**13**5": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**13**6": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**objectType**7": {
                                    "name": "objectType"
                                },
                                "childorchentattrsep**13**7": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**objectids**8": {
                                    "name": "objectids"
                                },
                                "childorchentattrsep**13**8": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**CRMnextObjectKey**9": {
                                    "name": "CRMnextObjectKey"
                                },
                                "childorchentattrsep**13**9": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**ItemKey**10": {
                                    "name": "ItemKey"
                                },
                                "childorchentattrsep**13**10": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**ResponseRoot**11": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**13**11": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**FetchResult**12": {
                                    "name": "FetchResult"
                                },
                                "childorchentattrsep**13**12": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**FetchResult**13": {
                                    "name": "FetchResult"
                                },
                                "childorchentattrsep**13**13": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**IsSuccess**14": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**13**14": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**Message**15": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**13**15": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**CRMnextObject**16": {
                                    "name": "CRMnextObject"
                                },
                                "childorchentattrsep**13**16": "---------"
                            }
                        },
                        "childorchentsep**13": "---------",
                        "childorchent**14": {
                            "name": "Save_CREATE",
                            "items": {
                                "childOrchAttr**request**Save_CREATE**14**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**14**1": "---------",
                                "childOrchAttr**request**Save_CREATE**14**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**14**2": "---------",
                                "childOrchAttr**request**Save_CREATE**14**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**14**3": "---------",
                                "childOrchAttr**request**Save_CREATE**14**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**14**4": "---------",
                                "childOrchAttr**request**Save_CREATE**14**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**14**5": "---------",
                                "childOrchAttr**request**Save_CREATE**14**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**14**6": "---------",
                                "childOrchAttr**request**Save_CREATE**14**objects**7": {
                                    "name": "objects"
                                },
                                "childorchentattrsep**14**7": "---------",
                                "childOrchAttr**request**Save_CREATE**14**CRMnextObject**8": {
                                    "name": "CRMnextObject"
                                },
                                "childorchentattrsep**14**8": "---------",
                                "childOrchAttr**request**Save_CREATE**14**returnObjectOnSave**9": {
                                    "name": "returnObjectOnSave"
                                },
                                "childorchentattrsep**14**9": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ResponseRoot**10": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**14**10": "---------",
                                "childOrchAttr**response**Save_CREATE**14**SaveResult**11": {
                                    "name": "SaveResult"
                                },
                                "childorchentattrsep**14**11": "---------",
                                "childOrchAttr**response**Save_CREATE**14**SaveResult**12": {
                                    "name": "SaveResult"
                                },
                                "childorchentattrsep**14**12": "---------",
                                "childOrchAttr**response**Save_CREATE**14**IsSuccess**13": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**14**13": "---------",
                                "childOrchAttr**response**Save_CREATE**14**Message**14": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**14**14": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ApiObject**15": {
                                    "name": "ApiObject"
                                },
                                "childorchentattrsep**14**15": "---------",
                                "childOrchAttr**response**Save_CREATE**14**objectKey**16": {
                                    "name": "objectKey"
                                },
                                "childorchentattrsep**14**16": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ItemKey**17": {
                                    "name": "ItemKey"
                                },
                                "childorchentattrsep**14**17": "---------"
                            }
                        },
                        "childorchentsep**14": "---------"
                    }
                },
                "sep**160": "---------",
                "orch**161": {
                    "name": "s",
                    "items": {
                        "childorchent**11": {
                            "name": "Login_CREATE",
                            "items": {
                                "childOrchAttr**request**Login_CREATE**11**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**11**1": "---------",
                                "childOrchAttr**request**Login_CREATE**11**login**2": {
                                    "name": "login"
                                },
                                "childorchentattrsep**11**2": "---------",
                                "childOrchAttr**request**Login_CREATE**11**password**3": {
                                    "name": "password"
                                },
                                "childorchentattrsep**11**3": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ResponseRoot**4": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**11**4": "---------",
                                "childOrchAttr**response**Login_CREATE**11**LoginResult**5": {
                                    "name": "LoginResult"
                                },
                                "childorchentattrsep**11**5": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsSuccess**6": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**11**6": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Message**7": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**11**7": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsRelocated**8": {
                                    "name": "IsRelocated"
                                },
                                "childorchentattrsep**11**8": "---------",
                                "childOrchAttr**response**Login_CREATE**11**LoginStatus**9": {
                                    "name": "LoginStatus"
                                },
                                "childorchentattrsep**11**9": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ServiceUrl**10": {
                                    "name": "ServiceUrl"
                                },
                                "childorchentattrsep**11**10": "---------",
                                "childOrchAttr**response**Login_CREATE**11**UserContext**11": {
                                    "name": "UserContext"
                                },
                                "childorchentattrsep**11**11": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsSuccess**12": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**11**12": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Message**13": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**11**13": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ExpiresOn**14": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**11**14": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Token**15": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**11**15": "---------"
                            }
                        },
                        "childorchentsep**11": "---------",
                        "childorchent**12": {
                            "name": "GetAllRoles_CREATE",
                            "items": {
                                "childOrchAttr**request**GetAllRoles_CREATE**12**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**12**1": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**12**2": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**12**3": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**12**4": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**12**5": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**12**6": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**ResponseRoot**7": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**12**7": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**GetAllRolesResult**8": {
                                    "name": "GetAllRolesResult"
                                },
                                "childorchentattrsep**12**8": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**UserRole**9": {
                                    "name": "UserRole"
                                },
                                "childorchentattrsep**12**9": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**IsSuccess**10": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**12**10": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**Message**11": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**12**11": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**OperationList**12": {
                                    "name": "OperationList"
                                },
                                "childorchentattrsep**12**12": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**CRMOperation**13": {
                                    "name": "CRMOperation"
                                },
                                "childorchentattrsep**12**13": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**RoleKey**14": {
                                    "name": "RoleKey"
                                },
                                "childorchentattrsep**12**14": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**RoleName**15": {
                                    "name": "RoleName"
                                },
                                "childorchentattrsep**12**15": "---------"
                            }
                        },
                        "childorchentsep**12": "---------",
                        "childorchent**13": {
                            "name": "Fetch_CREATE",
                            "items": {
                                "childOrchAttr**request**Fetch_CREATE**13**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**13**1": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**13**2": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**13**3": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**13**4": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**13**5": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**13**6": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**objectType**7": {
                                    "name": "objectType"
                                },
                                "childorchentattrsep**13**7": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**objectids**8": {
                                    "name": "objectids"
                                },
                                "childorchentattrsep**13**8": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**CRMnextObjectKey**9": {
                                    "name": "CRMnextObjectKey"
                                },
                                "childorchentattrsep**13**9": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**ItemKey**10": {
                                    "name": "ItemKey"
                                },
                                "childorchentattrsep**13**10": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**ResponseRoot**11": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**13**11": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**FetchResult**12": {
                                    "name": "FetchResult"
                                },
                                "childorchentattrsep**13**12": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**FetchResult**13": {
                                    "name": "FetchResult"
                                },
                                "childorchentattrsep**13**13": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**IsSuccess**14": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**13**14": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**Message**15": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**13**15": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**CRMnextObject**16": {
                                    "name": "CRMnextObject"
                                },
                                "childorchentattrsep**13**16": "---------"
                            }
                        },
                        "childorchentsep**13": "---------",
                        "childorchent**14": {
                            "name": "Save_CREATE",
                            "items": {
                                "childOrchAttr**request**Save_CREATE**14**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**14**1": "---------",
                                "childOrchAttr**request**Save_CREATE**14**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**14**2": "---------",
                                "childOrchAttr**request**Save_CREATE**14**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**14**3": "---------",
                                "childOrchAttr**request**Save_CREATE**14**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**14**4": "---------",
                                "childOrchAttr**request**Save_CREATE**14**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**14**5": "---------",
                                "childOrchAttr**request**Save_CREATE**14**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**14**6": "---------",
                                "childOrchAttr**request**Save_CREATE**14**objects**7": {
                                    "name": "objects"
                                },
                                "childorchentattrsep**14**7": "---------",
                                "childOrchAttr**request**Save_CREATE**14**CRMnextObject**8": {
                                    "name": "CRMnextObject"
                                },
                                "childorchentattrsep**14**8": "---------",
                                "childOrchAttr**request**Save_CREATE**14**returnObjectOnSave**9": {
                                    "name": "returnObjectOnSave"
                                },
                                "childorchentattrsep**14**9": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ResponseRoot**10": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**14**10": "---------",
                                "childOrchAttr**response**Save_CREATE**14**SaveResult**11": {
                                    "name": "SaveResult"
                                },
                                "childorchentattrsep**14**11": "---------",
                                "childOrchAttr**response**Save_CREATE**14**SaveResult**12": {
                                    "name": "SaveResult"
                                },
                                "childorchentattrsep**14**12": "---------",
                                "childOrchAttr**response**Save_CREATE**14**IsSuccess**13": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**14**13": "---------",
                                "childOrchAttr**response**Save_CREATE**14**Message**14": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**14**14": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ApiObject**15": {
                                    "name": "ApiObject"
                                },
                                "childorchentattrsep**14**15": "---------",
                                "childOrchAttr**response**Save_CREATE**14**objectKey**16": {
                                    "name": "objectKey"
                                },
                                "childorchentattrsep**14**16": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ItemKey**17": {
                                    "name": "ItemKey"
                                },
                                "childorchentattrsep**14**17": "---------"
                            }
                        },
                        "childorchentsep**14": "---------"
                    }
                },
                "sep**161": "---------",
                "orch**165": {
                    "name": "NoWeatherservice",
                    "items": {
                        "childorchent**12": {
                            "name": "GetAllRoles_CREATE",
                            "items": {
                                "childOrchAttr**request**GetAllRoles_CREATE**12**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**12**1": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**12**2": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**12**3": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**12**4": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**12**5": "---------",
                                "childOrchAttr**request**GetAllRoles_CREATE**12**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**12**6": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**ResponseRoot**7": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**12**7": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**GetAllRolesResult**8": {
                                    "name": "GetAllRolesResult"
                                },
                                "childorchentattrsep**12**8": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**UserRole**9": {
                                    "name": "UserRole"
                                },
                                "childorchentattrsep**12**9": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**IsSuccess**10": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**12**10": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**Message**11": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**12**11": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**OperationList**12": {
                                    "name": "OperationList"
                                },
                                "childorchentattrsep**12**12": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**CRMOperation**13": {
                                    "name": "CRMOperation"
                                },
                                "childorchentattrsep**12**13": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**RoleKey**14": {
                                    "name": "RoleKey"
                                },
                                "childorchentattrsep**12**14": "---------",
                                "childOrchAttr**response**GetAllRoles_CREATE**12**RoleName**15": {
                                    "name": "RoleName"
                                },
                                "childorchentattrsep**12**15": "---------"
                            }
                        },
                        "childorchentsep**12": "---------",
                        "childorchent**13": {
                            "name": "Fetch_CREATE",
                            "items": {
                                "childOrchAttr**request**Fetch_CREATE**13**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**13**1": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**13**2": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**13**3": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**13**4": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**13**5": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**13**6": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**objectType**7": {
                                    "name": "objectType"
                                },
                                "childorchentattrsep**13**7": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**objectids**8": {
                                    "name": "objectids"
                                },
                                "childorchentattrsep**13**8": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**CRMnextObjectKey**9": {
                                    "name": "CRMnextObjectKey"
                                },
                                "childorchentattrsep**13**9": "---------",
                                "childOrchAttr**request**Fetch_CREATE**13**ItemKey**10": {
                                    "name": "ItemKey"
                                },
                                "childorchentattrsep**13**10": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**ResponseRoot**11": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**13**11": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**FetchResult**12": {
                                    "name": "FetchResult"
                                },
                                "childorchentattrsep**13**12": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**FetchResult**13": {
                                    "name": "FetchResult"
                                },
                                "childorchentattrsep**13**13": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**IsSuccess**14": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**13**14": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**Message**15": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**13**15": "---------",
                                "childOrchAttr**response**Fetch_CREATE**13**CRMnextObject**16": {
                                    "name": "CRMnextObject"
                                },
                                "childorchentattrsep**13**16": "---------"
                            }
                        },
                        "childorchentsep**13": "---------",
                        "childorchent**14": {
                            "name": "Save_CREATE",
                            "items": {
                                "childOrchAttr**request**Save_CREATE**14**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**14**1": "---------",
                                "childOrchAttr**request**Save_CREATE**14**userContext**2": {
                                    "name": "userContext"
                                },
                                "childorchentattrsep**14**2": "---------",
                                "childOrchAttr**request**Save_CREATE**14**IsSuccess**3": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**14**3": "---------",
                                "childOrchAttr**request**Save_CREATE**14**Message**4": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**14**4": "---------",
                                "childOrchAttr**request**Save_CREATE**14**ExpiresOn**5": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**14**5": "---------",
                                "childOrchAttr**request**Save_CREATE**14**Token**6": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**14**6": "---------",
                                "childOrchAttr**request**Save_CREATE**14**objects**7": {
                                    "name": "objects"
                                },
                                "childorchentattrsep**14**7": "---------",
                                "childOrchAttr**request**Save_CREATE**14**CRMnextObject**8": {
                                    "name": "CRMnextObject"
                                },
                                "childorchentattrsep**14**8": "---------",
                                "childOrchAttr**request**Save_CREATE**14**returnObjectOnSave**9": {
                                    "name": "returnObjectOnSave"
                                },
                                "childorchentattrsep**14**9": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ResponseRoot**10": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**14**10": "---------",
                                "childOrchAttr**response**Save_CREATE**14**SaveResult**11": {
                                    "name": "SaveResult"
                                },
                                "childorchentattrsep**14**11": "---------",
                                "childOrchAttr**response**Save_CREATE**14**SaveResult**12": {
                                    "name": "SaveResult"
                                },
                                "childorchentattrsep**14**12": "---------",
                                "childOrchAttr**response**Save_CREATE**14**IsSuccess**13": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**14**13": "---------",
                                "childOrchAttr**response**Save_CREATE**14**Message**14": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**14**14": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ApiObject**15": {
                                    "name": "ApiObject"
                                },
                                "childorchentattrsep**14**15": "---------",
                                "childOrchAttr**response**Save_CREATE**14**objectKey**16": {
                                    "name": "objectKey"
                                },
                                "childorchentattrsep**14**16": "---------",
                                "childOrchAttr**response**Save_CREATE**14**ItemKey**17": {
                                    "name": "ItemKey"
                                },
                                "childorchentattrsep**14**17": "---------"
                            }
                        },
                        "childorchentsep**14": "---------",
                        "childorchent**11": {
                            "name": "Login_CREATE",
                            "items": {
                                "childOrchAttr**request**Login_CREATE**11**RequestRoot**1": {
                                    "name": "RequestRoot"
                                },
                                "childorchentattrsep**11**1": "---------",
                                "childOrchAttr**request**Login_CREATE**11**login**2": {
                                    "name": "login"
                                },
                                "childorchentattrsep**11**2": "---------",
                                "childOrchAttr**request**Login_CREATE**11**password**3": {
                                    "name": "password"
                                },
                                "childorchentattrsep**11**3": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ResponseRoot**4": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**11**4": "---------",
                                "childOrchAttr**response**Login_CREATE**11**LoginResult**5": {
                                    "name": "LoginResult"
                                },
                                "childorchentattrsep**11**5": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsSuccess**6": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**11**6": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Message**7": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**11**7": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsRelocated**8": {
                                    "name": "IsRelocated"
                                },
                                "childorchentattrsep**11**8": "---------",
                                "childOrchAttr**response**Login_CREATE**11**LoginStatus**9": {
                                    "name": "LoginStatus"
                                },
                                "childorchentattrsep**11**9": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ServiceUrl**10": {
                                    "name": "ServiceUrl"
                                },
                                "childorchentattrsep**11**10": "---------",
                                "childOrchAttr**response**Login_CREATE**11**UserContext**11": {
                                    "name": "UserContext"
                                },
                                "childorchentattrsep**11**11": "---------",
                                "childOrchAttr**response**Login_CREATE**11**IsSuccess**12": {
                                    "name": "IsSuccess"
                                },
                                "childorchentattrsep**11**12": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Message**13": {
                                    "name": "Message"
                                },
                                "childorchentattrsep**11**13": "---------",
                                "childOrchAttr**response**Login_CREATE**11**ExpiresOn**14": {
                                    "name": "ExpiresOn"
                                },
                                "childorchentattrsep**11**14": "---------",
                                "childOrchAttr**response**Login_CREATE**11**Token**15": {
                                    "name": "Token"
                                },
                                "childorchentattrsep**11**15": "---------"
                            }
                        },
                        "childorchentsep**11": "---------",
                        "childorchent**49": {
                            "name": "GetWeatherInformation_CREATE",
                            "items": {
                                "childOrchAttr**response**GetWeatherInformation_CREATE**49**ResponseRoot**1": {
                                    "name": "ResponseRoot"
                                },
                                "childorchentattrsep**49**1": "---------",
                                "childOrchAttr**response**GetWeatherInformation_CREATE**49**GetWeatherInformationResult**2": {
                                    "name": "GetWeatherInformationResult"
                                },
                                "childorchentattrsep**49**2": "---------",
                                "childOrchAttr**response**GetWeatherInformation_CREATE**49**WeatherDescription**3": {
                                    "name": "WeatherDescription"
                                },
                                "childorchentattrsep**49**3": "---------",
                                "childOrchAttr**response**GetWeatherInformation_CREATE**49**WeatherID**4": {
                                    "name": "WeatherID"
                                },
                                "childorchentattrsep**49**4": "---------",
                                "childOrchAttr**response**GetWeatherInformation_CREATE**49**Description**5": {
                                    "name": "Description"
                                },
                                "childorchentattrsep**49**5": "---------",
                                "childOrchAttr**response**GetWeatherInformation_CREATE**49**PictureURL**6": {
                                    "name": "PictureURL"
                                },
                                "childorchentattrsep**49**6": "---------"
                            }
                        },
                        "childorchentsep**49": "---------"
                    }
                },
                "sep**165": "---------"
            }
        }
    };
    $.contextMenu({
        selector: '.context-menu-sub',
        callback: function (key, options) {
            //console.log("options--->", options.commands);
            var valueToInlcude;
            for (var keyVal in options.commands) {
                var value = options.commands[keyVal];
                //console.log("value--->", value);
                //console.log("keyVal--->", keyVal);
                if (keyVal == key) {
                    var temp = key.split('**');
                    if (temp[0] == 'childOrchAttr') {
                        if (temp[1] == 'request') {
                            valueToInlcude = '$' + temp[1] + '.' + temp[2] + '.' + temp[4] + ' ';
                        } else if (temp[1] == 'response') {
                            valueToInlcude = '$' + temp[1] + '.' + temp[2] + '.' + temp[4] + ' ';
                        }
                    } else if (temp[0] == 'serReqAttr') {
                        valueToInlcude = '$request.' + temp[3] + ' ';
                    } else if (temp[0] == 'serResAttr') {
                        valueToInlcude = '$response.' + temp[3] + ' ';
                    } else if (temp[0] == 'entityAttr') {
                        valueToInlcude = '$' + temp[1] + '.' + temp[2] + ' ';
                    } else {
                        valueToInlcude = value.name + ' ';
                    }
                }
            }
            var m = "clicked: " + key;
            window.console && console.log(m);
            var cursorPos = $('#textarea1').prop('selectionStart');
            var v = $('#textarea1').val();
            var textBefore = v.substring(0, cursorPos);
            var textAfter = v.substring(cursorPos, v.length);
            $('#textarea1').val(textBefore + valueToInlcude + textAfter);
            var tempVal;
            tempVal = $('#textarea1').val();
            $('#textarea1').val('');
            $('#textarea1').focus();
            $('#textarea1').val(tempVal);
        },
        items: contextMenuData
        /*Logic to implement Data Build for Contextual Menu*/
        /*        
                var mainObj = {};

                var iaEntityData = this.iaCollection.models[0].get('data').ENTITIES;
                //console.log("iaEntityData--->",iaEntityData);
                var entityContentObj = {};
                entityContentObj['name'] = 'Entity';
                var entDataarr = {};
                _.each(iaEntityData, function (ent) {
                    var entkeyName = 'ent**' + ent.ENTITY_ID;
                    var entSeperatorKey = 'sep**' + ent.ENTITY_ID;
                    var attrDataArr = {};
                    var attrOBJ = {};
                    attrOBJ['name'] = ent.ENTITY_NAME;
                    _.each(ent.LOGICAL_DEFINITIONS, function (attr) {
                        var attrKeyName = 'entityAttr**' + ent.ENTITY_NAME + '**' + attr.DEFINITION_NAME + '**' + ent.ENTITY_ID + '**' + attr.DEFINITION_ID;
                        var attrSeperatorKey = 'sep**' + ent.ENTITY_ID + '**' + attr.DEFINITION_ID;
                        var logdefObj = {};
                        logdefObj['name'] = attr.DEFINITION_NAME;
                        attrDataArr[attrKeyName] = logdefObj;
                        attrDataArr[attrSeperatorKey] = '---------';
                    });
                    attrOBJ['items'] = attrDataArr;
                    entDataarr[entkeyName] = attrOBJ;
                    entDataarr[entSeperatorKey] = '---------';
                });
                entityContentObj['items'] = entDataarr;
                mainObj['entity'] = entityContentObj;
                mainObj['sepEntity'] = '---------';

                //console.log("servicedata---->",servicedata);
                //Service Data
                var serviceContentObj = {};
                serviceContentObj['name'] = 'Service';
                var serviceDataarr = {};
                _.each(servicedata, function (serv) {
                    var servkeyName = 'serv**' + serv.SERVICE_ID;
                    var servSeperatorKey = 'sep**' + serv.SERVICE_ID;
                    var servDataArr = {};
                    var attrOBJ = {};
                    attrOBJ['name'] = serv.SERVICE_NAME;
                    var servReqSeperatorKey = 'sep_reqser**' + serv.SERVICE_ID;
                    var servReqKeyName = 'request**' + serv.SERVICE_ID;
                    var servResSeperatorKey = 'sep_resser**' + serv.SERVICE_ID;
                    var servResKeyName = 'response**' + serv.SERVICE_ID;

                    var servReqArr = {};
                    var servReqObj = {};
                    servReqObj['name'] = 'Request';
                    _.each(serv.SERVICE_REQUEST_PARAMS, function (req) {
                        var servReqAttrKeyName = 'serReqAttr**request**' + serv.SERVICE_ID + '**' + req.REQUEST_PARAM_NAME + '**' + req.REQUEST_PARAM_ID;
                        var servReqAttrSeperatorKey = 'sepReqAttr**' + serv.SERVICE_ID + '**' + req.REQUEST_PARAM_ID;
                        var sampleObj = {};
                        sampleObj['name'] = req.REQUEST_PARAM_NAME;
                        servReqArr[servReqAttrKeyName] = sampleObj;
                        servReqArr[servReqAttrSeperatorKey] = '---------';
                    });
                    servReqObj['items'] = servReqArr;

                    var servResArr = {};
                    var servResObj = {};
                    servResObj['name'] = 'Response';
                    _.each(serv.SERVICE_RESPONSE_PARAMS, function (res) {
                        var servResAttrKeyName = 'serResAttr**response**' + serv.SERVICE_ID + '**' + res.RESPONSE_PARAM_NAME + '**' + res.RESPONSE_PARAM_ID;
                        var servResAttrSeperatorKey = 'sepResAttr**' + serv.SERVICE_ID + '**' + res.RESPONSE_PARAM_ID;
                        var sampleObj = {};
                        sampleObj['name'] = res.RESPONSE_PARAM_NAME;
                        servResArr[servResAttrKeyName] = sampleObj;
                        servResArr[servResAttrSeperatorKey] = '---------';
                    });
                    servResObj['items'] = servResArr;

                    servDataArr[servReqKeyName] = servReqObj;
                    servDataArr[servReqSeperatorKey] = '---------';
                    servDataArr[servResKeyName] = servResObj;
                    servDataArr[servResSeperatorKey] = '---------';
                    attrOBJ['items'] = servDataArr;
                    serviceDataarr[servkeyName] = attrOBJ;
                    serviceDataarr[servSeperatorKey] = '---------';
                });
                serviceContentObj['items'] = serviceDataarr;
                mainObj['service'] = serviceContentObj;
				mainObj['sepService'] = '---------';


                //ORCHESTRATION
                var childOrchCollection = this.orchestrationsCollection.models;
                console.log("childOrchCollection---->", childOrchCollection);
                var orchContentObj = {};
                orchContentObj['name'] = 'Orchestration';
                var orchDataarr = {};
                _.each(childOrchCollection, function (childorch) {
                    var childorchkeyName = 'orch**' + childorch.get('data').ORCHESTRATION_ID;
                    var childorchSeperatorKey = 'sep**' + childorch.get('data').ORCHESTRATION_ID;
                    var childOrchDataArr = {};
                    var attrOBJ = {};
                    attrOBJ['name'] = childorch.get('data').ORCHESTRATION_NAME;
                    var childOrchentDataarr = {};
                    var childOrchEntityData = childorch.get('data').ENTITY;
                    _.each(childOrchEntityData, function (ent) {
                        var entkeyName = 'childorchent**' + ent.ENTITY_ID;
                        var entSeperatorKey = 'childorchentsep**' + ent.ENTITY_ID;
                        var attrDataArr = {};
                        var childOrchattrOBJ = {};
                        childOrchattrOBJ['name'] = ent.ENTITY_NAME;
                        _.each(ent.ACTION[0].LOGICAL_DEFINITIONS, function (attr) {
                            var attrKeyName = 'childOrchAttr**'+attr.DEFINITION_TYPE.toLowerCase() + '**'+ent.ENTITY_NAME+'**' + ent.ENTITY_ID + '**' +attr.DEFINITION_NAME + '**' + attr.DEFINITION_ID;
                            var attrSeperatorKey = 'childorchentattrsep**' + ent.ENTITY_ID + '**' + attr.DEFINITION_ID;
                            var logdefObj = {};
                            logdefObj['name'] = attr.DEFINITION_NAME;
                            attrDataArr[attrKeyName] = logdefObj;
                            attrDataArr[attrSeperatorKey] = '---------';
                        });
                        childOrchattrOBJ['items'] = attrDataArr;
                        childOrchentDataarr[entkeyName] = childOrchattrOBJ;
                        childOrchentDataarr[entSeperatorKey] = '---------';
                    });
                    attrOBJ['items'] = childOrchentDataarr;
                    orchDataarr[childorchkeyName] = attrOBJ;
                    orchDataarr[childorchSeperatorKey] = '---------';
                });
                orchContentObj['items'] = orchDataarr;
                mainObj['orchestration'] = orchContentObj;
                var test = JSON.stringify(mainObj);
                //console.log("entDataarr---->",mainObj);
                console.log("test------------>", test);
		*/
    });
});

function GetCaretPosition(ctrl) {
    var CaretPos = 0; // IE Support
    if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;
    return (CaretPos);
}

function ReturnWord(text, caretPos) {
    var index = text.indexOf(caretPos);
    var preText = text.substring(0, caretPos);

    if (preText.indexOf(" ") > 0) {
        console.log("preText------------->", preText);
        var words = preText.split(" ");
        console.log("words split--->", words.length - 1);
        return words[words.length - 2]; //return last word
    } else {
        return preText;
    }
}