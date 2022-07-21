type UserTagsQuery = {
  __typename: 'UserTags';
  id: number;
  isAdmin: boolean;
  isModerator: boolean;
  isVip: boolean;
};

type UserTags = Omit<UserTagsQuery, 'id' | '__typename'>;

export const tags: UserTags = {
  isAdmin: true,
  isModerator: false,
  isVip: false,
};
