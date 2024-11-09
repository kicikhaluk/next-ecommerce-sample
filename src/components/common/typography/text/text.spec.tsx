import { render, screen } from '@testing-library/react';
import Text from './text.component';

describe('Typography/Text', () => {
  it('renders a default text<p element>', () => {
    render(<Text>Paragraph</Text>);

    const paragraph = screen.getByRole('paragraph');

    expect(paragraph).toHaveTextContent('Paragraph');
    expect(paragraph).toBeInTheDocument();
  });

  it('renders a span element', () => {
    render(<Text as='span'>Span</Text>);

    const paragraph = screen.getByText('Span');

    expect(paragraph).toHaveTextContent('Span');
    expect(paragraph).toBeInTheDocument();
  });
});
