export const findByTestAttr = (compoenet, attr) => {
    const wrapper = compoenet.find(`[data-test='${attr}']`);
    return wrapper;
};
