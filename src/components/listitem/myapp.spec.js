import React from 'react';
import { findByTestAttr, checkProps } from '../../../Utils';
import ListItem from './index';
import { shallow } from 'enzyme';

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {
        it('It should NOT through a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Text'
            };
            const propError = checkProps(ListItem, expectedProps);
            expect(propError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Should render without error', ()=> {
            const component = findByTestAttr(wrapper, 'ListItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render title', ()=> {
            const title = findByTestAttr(wrapper, 'ComponentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render desc', ()=> {
            const desc = findByTestAttr(wrapper, 'ComponentDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Component NOT Render', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some Text'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        it('Component is not rendered' , ()=> {
            const component = findByTestAttr(wrapper, 'ListItemComponent');
            expect(component.length).toBe(0);
        });
    });
});