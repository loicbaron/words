import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './TableWithPagination';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      getAllByText(new RegExp('Welcome @playground/tables', 'gi')).length > 0
    ).toBeTruthy();
  });
});
