module core {
    export class SocketAPI {
        private static s_instance: SocketAPI;
        private m_webSocket: egret.WebSocket;
        private m_address: string;
        private m_state: WebSocketStateEnum = WebSocketStateEnum.CLOSED;
        private STATE_CODE = "APCDEFCG";
        private product = "101";
        private player_id = 10001;

        public constructor() {
            let webSocket: egret.WebSocket = new egret.WebSocket();
            webSocket.addEventListener(egret.Event.CONNECT, this.onConnected, this);
            webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onSocketData, this);
            webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onIOError, this);
            webSocket.addEventListener(egret.Event.CLOSE, this.onClosed, this);
            webSocket.type = egret.WebSocket.TYPE_BINARY;
            this.m_webSocket = webSocket;
        }

        public static get instance(): SocketAPI {
            if (SocketAPI.s_instance == null) {
                SocketAPI.s_instance = new SocketAPI();
            }
            return SocketAPI.s_instance;
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
            let s = game.json.GameLoginReq;
            let buffer = s.encode(<any>ob).finish();
            let buff: egret.ByteArray = new egret.ByteArray(buffer);
            this.sendData(10001, buff);
        }

        private onSocketData(data: any): void {
            let buff: egret.ByteArray = new egret.ByteArray();
            this.m_webSocket.readBytes(buff, buff.length);
            let code = buff.readInt();
            let byte: egret.ByteArray = new egret.ByteArray();
            buff.readBytes(byte);
            let s = game.json.GameLoginReq;
            let r = s.decode(byte.bytes);
            egret.log("-------------------------------------------------->>>>>" + code + " ,message = " + JSON.stringify(r.toJSON()));
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
            buff.writeBytes(data);
            this.m_webSocket.writeBytes(buff);
            egret.callLater(this.flushToServer, this);
        }

        private flushToServer(): void {
            this.m_webSocket.flush();
        }
        /**
         * @param host 服务器IP 如：127.0.0.1
         * @param port 服务器端口 如：8080
         * @param isSSL 是否应用SSL
         */
        public setAddress(host: string, port: number, isSSL: boolean = false): void {
            this.m_address = `${isSSL ? 'wss' : 'ws'}://${host}:${port}`;
        }
        /**
         * @param address 服务器地址 如：ws://127.0.0.1:8080 或 wss://127.0.0.1:8080
         */
        public setAddressURL(address: string): void {
            this.m_address = address;
        }

        public connect(): void {
            this.m_state = WebSocketStateEnum.CONNECTING;
            this.m_webSocket.connect("echo.websocket.org", 80);
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
