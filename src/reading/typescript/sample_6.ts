type FeatureFlags = {
  isLoyaltyEnabled: boolean;
  isGameEnabled: boolean;
  isTournamentsEnabled: boolean;
};

const featureFlags: FeatureFlags = {
  isGameEnabled: true,
  isLoyaltyEnabled: true,
  isTournamentsEnabled: false,
};

const getFeature = (feature: keyof FeatureFlags): boolean =>
  featureFlags[feature];

export default getFeature;
