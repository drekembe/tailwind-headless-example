import { render } from '@testing-library/react';

import { Listbox } from './listbox';

describe('Listbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Listbox />);
    expect(baseElement).toBeTruthy();
  });
});
