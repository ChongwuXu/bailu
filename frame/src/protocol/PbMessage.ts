let PbMessages = function (protocol) {
    let message: any;
    switch (protocol) {
        case ServerProtocol.LOGIN_RES:
            message = game.json.GameLoginReq;
            break;
        case ClientProtocol.LOGIN_REQ:
            message = game.json.GameLoginReq;
            break;
    }
    return message;
}