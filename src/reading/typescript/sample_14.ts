type GlobalProps = {
  isLoyaltyEnabled: boolean;
  isGameEnabled: boolean;
  isTournamentsEnabled: boolean;
  categoryHandle: string;
};

export type PageProps = GlobalProps & { handle: string };
