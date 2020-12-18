const getFullAddress = ({ profile }) => ({
  userId: profile.userId,
  name: profile.name,
  doc: profile.doc,
  email: profile.email,
  birthDate: profile.birthDate,
  phoneNumber: profile.phoneNumber,
  healthCard: profile.healthCard,
  photoUrl: profile.photoUrl,
  tenantId: profile.tenantId,
  domainId: profile.domainId,
  activationCodeId: profile.activationCodeId,
  address: [{ ...profile.address }],
});

export default getFullAddress;
