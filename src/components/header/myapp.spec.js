import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../Utils';

const setUp = (props = {}) => {
    const compoenet = shallow(<Header {...props} />);
    return compoenet;
};

describe('Header Compoenet', () => {

    let compoenet;
    beforeEach(() => {
        compoenet = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(compoenet, 'header-component');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const wrapper = findByTestAttr(compoenet, 'logo-img');
        expect(wrapper.length).toBe(1);
    })
});

