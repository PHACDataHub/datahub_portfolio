const state = {
  scroll: 0
};

export const saveScroll = (value: number) => {
  state['scroll'] = value;
};

export const getScroll = () => {
  return state['scroll'];
};
