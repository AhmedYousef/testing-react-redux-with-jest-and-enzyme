import React from 'react';
import { findByTestAttr, checkProps } from '../../../Utils';
import SharedButton from './index';
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {
        it('It should not through a warning', () => {
            const expectedProps = {
                buttonText: 'Example button text',
                emitEvent: () => {

                }
            };
            const propError = checkProps(SharedButton, expectedProps);
            expect(propError).toBeUndefined();

        });
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example button text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton/>, props);
        });

        it('Should render a button', ()=> {
            const button = findByTestAttr(wrapper, 'ButtonComponent');
            expect(button.length).toBe(1);
        });
    });
});