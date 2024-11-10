import { render, screen } from '@testing-library/react';
import VSpacer from './vspacer.component';

describe('UI/VSpacer', () => {
  it('renders a default spacer', () => {
    render(<VSpacer>VSPACER</VSpacer>);

    const vspacer = screen.getByText(/VSPACER/i);
    expect(vspacer).toBeInTheDocument();
  });

  it('renders a VSpacer with provided tagName', () => {
    render(<VSpacer as='section'>VSPACER</VSpacer>);

    const vspacer = screen.getByText(/VSPACER/i);

    expect(vspacer.tagName).toEqual('SECTION');
    expect(vspacer).toBeInTheDocument();
  });
});
