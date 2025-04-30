import { UserMemberListType } from '../../Enums/Enums';
export interface MentionsProps {
    userMemberListType?: UserMemberListType;
    onItemClick?: (user: CometChat.User | CometChat.GroupMember) => void;
    itemView?: (item?: CometChat.User | CometChat.GroupMember) => JSX.Element;
    searchKeyword?: string;
    group?: CometChat.Group;
    subtitleView?: (item?: CometChat.User | CometChat.GroupMember) => JSX.Element;
    usersRequestBuilder?: CometChat.UsersRequestBuilder;
    onEmpty?: () => void;
    groupMemberRequestBuilder?: CometChat.GroupMembersRequestBuilder;
    onError?: () => void;
}
export declare function CometChatUserMemberWrapper(props: MentionsProps): import("react/jsx-runtime").JSX.Element;
