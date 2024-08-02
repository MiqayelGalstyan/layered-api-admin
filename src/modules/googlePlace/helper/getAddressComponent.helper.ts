// Helper function to extract the value of a specific address component
export const getAddressComponent = (
  addressComponents: any[],
  componentType: string,
) => {
  const foundComponent = addressComponents.find(component =>
    component.types.includes(componentType),
  );

  if (foundComponent) {
    const { long_name, short_name } = foundComponent;
    return short_name || long_name;
  }

  return '';
};
