type Long = protobuf.Long;

/** Namespace pb. */
declare namespace pb {

    /** Namespace json. */
    namespace json {

        /** Properties of a MsgPlayer. */
        interface IMsgPlayer {

            /** MsgPlayer account */
            account: string;

            /** MsgPlayer nickname */
            nickname: string;
        }

        /** Represents a MsgPlayer. */
        class MsgPlayer implements IMsgPlayer {

            /**
             * Constructs a new MsgPlayer.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.json.IMsgPlayer);

            /** MsgPlayer account. */
            public account: string;

            /** MsgPlayer nickname. */
            public nickname: string;

            /**
             * Creates a new MsgPlayer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MsgPlayer instance
             */
            public static create(properties?: pb.json.IMsgPlayer): pb.json.MsgPlayer;

            /**
             * Encodes the specified MsgPlayer message. Does not implicitly {@link pb.json.MsgPlayer.verify|verify} messages.
             * @param message MsgPlayer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.json.IMsgPlayer, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified MsgPlayer message, length delimited. Does not implicitly {@link pb.json.MsgPlayer.verify|verify} messages.
             * @param message MsgPlayer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.json.IMsgPlayer, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MsgPlayer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): pb.json.MsgPlayer;

            /**
             * Decodes a MsgPlayer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgPlayer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): pb.json.MsgPlayer;

            /**
             * Verifies a MsgPlayer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgPlayer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgPlayer
             */
            public static fromObject(object: { [k: string]: any }): pb.json.MsgPlayer;

            /**
             * Creates a plain object from a MsgPlayer message. Also converts values to other types if specified.
             * @param message MsgPlayer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.json.MsgPlayer, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgPlayer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** E_ErrorCode enum. */
        enum E_ErrorCode {
            NO_ERROR = 0,
            LOGIN_ON_OTHER_DEVICE = 1
        }

        /** Properties of a GameLoginReq. */
        interface IGameLoginReq {

            /** GameLoginReq token */
            token: string;

            /** GameLoginReq openId */
            openId: string;

            /** GameLoginReq player */
            player: pb.json.IMsgPlayer;
        }

        /** Represents a GameLoginReq. */
        class GameLoginReq implements IGameLoginReq {

            /**
             * Constructs a new GameLoginReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.json.IGameLoginReq);

            /** GameLoginReq token. */
            public token: string;

            /** GameLoginReq openId. */
            public openId: string;

            /** GameLoginReq player. */
            public player: pb.json.IMsgPlayer;

            /**
             * Creates a new GameLoginReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameLoginReq instance
             */
            public static create(properties?: pb.json.IGameLoginReq): pb.json.GameLoginReq;

            /**
             * Encodes the specified GameLoginReq message. Does not implicitly {@link pb.json.GameLoginReq.verify|verify} messages.
             * @param message GameLoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.json.IGameLoginReq, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GameLoginReq message, length delimited. Does not implicitly {@link pb.json.GameLoginReq.verify|verify} messages.
             * @param message GameLoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.json.IGameLoginReq, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameLoginReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameLoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): pb.json.GameLoginReq;

            /**
             * Decodes a GameLoginReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameLoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): pb.json.GameLoginReq;

            /**
             * Verifies a GameLoginReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameLoginReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameLoginReq
             */
            public static fromObject(object: { [k: string]: any }): pb.json.GameLoginReq;

            /**
             * Creates a plain object from a GameLoginReq message. Also converts values to other types if specified.
             * @param message GameLoginReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.json.GameLoginReq, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameLoginReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GameLoginResp. */
        interface IGameLoginResp {

            /** GameLoginResp player */
            player: pb.json.IG_Player;

            /** GameLoginResp gold */
            gold: number;

            /** GameLoginResp volume */
            volume: number;

            /** GameLoginResp diamonds */
            diamonds: number;

            /** GameLoginResp time */
            time: (number|Long);

            /** GameLoginResp checkCode */
            checkCode: number;
        }

        /** Represents a GameLoginResp. */
        class GameLoginResp implements IGameLoginResp {

            /**
             * Constructs a new GameLoginResp.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.json.IGameLoginResp);

            /** GameLoginResp player. */
            public player: pb.json.IG_Player;

            /** GameLoginResp gold. */
            public gold: number;

            /** GameLoginResp volume. */
            public volume: number;

            /** GameLoginResp diamonds. */
            public diamonds: number;

            /** GameLoginResp time. */
            public time: (number|Long);

            /** GameLoginResp checkCode. */
            public checkCode: number;

            /**
             * Creates a new GameLoginResp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameLoginResp instance
             */
            public static create(properties?: pb.json.IGameLoginResp): pb.json.GameLoginResp;

            /**
             * Encodes the specified GameLoginResp message. Does not implicitly {@link pb.json.GameLoginResp.verify|verify} messages.
             * @param message GameLoginResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.json.IGameLoginResp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GameLoginResp message, length delimited. Does not implicitly {@link pb.json.GameLoginResp.verify|verify} messages.
             * @param message GameLoginResp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.json.IGameLoginResp, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameLoginResp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameLoginResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): pb.json.GameLoginResp;

            /**
             * Decodes a GameLoginResp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameLoginResp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): pb.json.GameLoginResp;

            /**
             * Verifies a GameLoginResp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameLoginResp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameLoginResp
             */
            public static fromObject(object: { [k: string]: any }): pb.json.GameLoginResp;

            /**
             * Creates a plain object from a GameLoginResp message. Also converts values to other types if specified.
             * @param message GameLoginResp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.json.GameLoginResp, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameLoginResp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a G_Player. */
        interface IG_Player {

            /** G_Player id */
            id: (number|Long);

            /** G_Player account */
            account: string;

            /** G_Player nickname */
            nickname: string;

            /** G_Player level */
            level: number;

            /** G_Player exp */
            exp: number;

            /** G_Player vipLv */
            vipLv: number;
        }

        /** Represents a G_Player. */
        class G_Player implements IG_Player {

            /**
             * Constructs a new G_Player.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.json.IG_Player);

            /** G_Player id. */
            public id: (number|Long);

            /** G_Player account. */
            public account: string;

            /** G_Player nickname. */
            public nickname: string;

            /** G_Player level. */
            public level: number;

            /** G_Player exp. */
            public exp: number;

            /** G_Player vipLv. */
            public vipLv: number;

            /**
             * Creates a new G_Player instance using the specified properties.
             * @param [properties] Properties to set
             * @returns G_Player instance
             */
            public static create(properties?: pb.json.IG_Player): pb.json.G_Player;

            /**
             * Encodes the specified G_Player message. Does not implicitly {@link pb.json.G_Player.verify|verify} messages.
             * @param message G_Player message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.json.IG_Player, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified G_Player message, length delimited. Does not implicitly {@link pb.json.G_Player.verify|verify} messages.
             * @param message G_Player message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.json.IG_Player, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a G_Player message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns G_Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): pb.json.G_Player;

            /**
             * Decodes a G_Player message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns G_Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): pb.json.G_Player;

            /**
             * Verifies a G_Player message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a G_Player message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns G_Player
             */
            public static fromObject(object: { [k: string]: any }): pb.json.G_Player;

            /**
             * Creates a plain object from a G_Player message. Also converts values to other types if specified.
             * @param message G_Player
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.json.G_Player, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this G_Player to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
