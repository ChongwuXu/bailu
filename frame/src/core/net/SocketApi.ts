module core {
    export class SocketAPI {
        private m_webSocket: egret.WebSocket;
        private m_state: WebSocketStateEnum = WebSocketStateEnum.CLOSED;
        private server: string;
        private port: number;
        private player_id: number;

        public constructor() {

        }

        public addRequest(code:number, message:any) {
            if (!code) {
                return;
            }
            let PbDta = PbMessages(code);
            if (PbDta) {
                let buff: egret.ByteArray = new egret.ByteArray(PbDta.encode(<any>message).finish());
                this.sendData(code, buff);
            }
        }

        public createSocket() {
            let webSocket: egret.WebSocket = new egret.WebSocket();
            webSocket.addEventListener(egret.Event.CONNECT, this.onConnected, this);
            webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketData, this);
            webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
            webSocket.addEventListener(egret.Event.CLOSE, this.onClosed, this);
            webSocket.type = egret.WebSocket.TYPE_BINARY;
            this.m_webSocket = webSocket;
        }

        public setupServer(server:string, port:number, playerId:number) {
            this.server = server;
            this.port = port;
            this.player_id = playerId;
        }

        private onConnected(event: egret.Event): void {
            this.m_state = WebSocketStateEnum.CONNECTED;
            let ob = {
                token: "1234567",
                openId: "ssss",
                player: {
                    account: "1234567",
                    nickname: "nihaoha"
                }
            }
            this.addRequest(ClientProtocol.LOGIN_REQ, ob);

        }

        private onSocketData(data: any): void {
            let buff: egret.ByteArray = new egret.ByteArray();
            this.m_webSocket.readBytes(buff, buff.length);
            let code = buff.readInt();
            if (code) {
                let byte: egret.ByteArray = new egret.ByteArray();
                buff.readBytes(byte);
                let PbDta = PbMessages(code);
                if (PbDta) {
                    let r = PbDta.decode(byte.bytes);
                    egret.log("-------------------------------------------------->>>>>" + code + " ,message = " + JSON.stringify(r.toJSON()));
                }

            }
        }


        private onIOError(event: egret.IOErrorEvent): void {
            egret.log("与WebSocket服务器链接失败");
            this.m_state = WebSocketStateEnum.CLOSED;
        }

        private onClosed(event: egret.Event): void {
            egret.log("与WebSocket服务器断开链接");
            this.m_state = WebSocketStateEnum.CLOSED;
        }

        public sendData(code: number, data: any): void {
            let buff = new egret.ByteArray();
            buff.writeInt(code);
            if (data) {
                buff.writeBytes(data);
            }
            this.m_webSocket.writeBytes(buff);
            egret.callLater(this.flushToServer, this);
        }

        private flushToServer(): void {
            this.m_webSocket.flush();
        }


        public connect(): void {
            if (this.m_webSocket) {
                this.createSocket();
            }
            this.m_state = WebSocketStateEnum.CONNECTING;
            this.m_webSocket.connect(this.server, this.port);
        }

        public close(): void {
            this.m_state = WebSocketStateEnum.CLOSING;
            this.m_webSocket.close();
        }

        public get state(): WebSocketStateEnum {
            return this.m_state;
        }
    }

    /**
     * CONNECTING   正在尝试连接服务器
     * CONNECTED    已成功连接服务器 
     * CLOSING      正在断开服务器连接
     * CLOSED       已断开与服务器连接
     */
    export enum WebSocketStateEnum {
        CONNECTING,
        CONNECTED,
        CLOSING,
        CLOSED
    }
}
