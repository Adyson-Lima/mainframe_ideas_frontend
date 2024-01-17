import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Ideas from '../pages/Ideas';

describe('Testes da tela Ideas', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Ideas/>
      </BrowserRouter>
    );
  });

  it('Existe card em Ideas?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Ideas?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

});