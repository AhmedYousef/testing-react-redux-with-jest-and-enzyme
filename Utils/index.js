import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (compoenet, attr) => {
    const wrapper = compoenet.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (compoenet, expectedProps) => {
    const propsErr = checkPropTypes(compoenet.propTypes, expectedProps, 'props', compoenet.name);
    return propsErr;
};