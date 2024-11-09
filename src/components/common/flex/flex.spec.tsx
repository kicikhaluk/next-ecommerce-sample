import { render, screen } from '@testing-library/react';
import Flex from './flex.component';

describe('UI/Flex', () => {
  it('renders a default flex wrapper', () => {
    render(<Flex>Flex Wrapper</Flex>);

    const flex = screen.getByText('Flex Wrapper');
    expect(flex).toBeInTheDocument();
  });

  it('renders a flex wrapper with provided tagName', () => {
    render(<Flex as='section'>Flex Wrapper</Flex>);

    const flex = screen.getByText('Flex Wrapper');

    expect(flex.tagName).toEqual('SECTION');
    expect(flex).toBeInTheDocument();
  });
});
