export function availableButtons(status) {
  return {
    type: '@commons/AVAILABLE_BUTTONS',
    payload: {status},
  };
}
