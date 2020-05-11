import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkProps } from '../../../Utils';


const setUp = (props = {}) => {
    const compoenet = shallow(<Headline {...props} />);
    return compoenet;
};

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('It should not through a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@gmail.com',
                    age: 23,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {

    });

    describe('Have NO props', () => {

    });
});