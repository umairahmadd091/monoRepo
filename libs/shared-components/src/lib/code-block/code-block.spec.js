import { render } from '@testing-library/react';
import CodeBlock from './code-block';
describe('CodeBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodeBlock />);
    expect(baseElement).toBeTruthy();
  });
});
