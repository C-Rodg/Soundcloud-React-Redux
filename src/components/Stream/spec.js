import Stream from './presenter';
import { shallow } from 'enzyme';

describe('Stream', () => {
    const props = {
        tracks: [{ origin: { title: 'x' } },{ origin : { title: 'y' } }]
    };

    it('shows two elements', () => {
        const el = shallow(<Stream { ...props } />);
        expect(el.find('.track')).to.have.length(2);
    });
});