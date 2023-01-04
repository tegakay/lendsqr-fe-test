import React from 'react';
import { render, screen,fireEvent, getByText, getByLabelText } from '@testing-library/react';
import { Login } from './Login';
import user from '@testing-library/user-event';


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

test('renders Login Page', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Enter details to login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login Form properly', () => {
    render(<Login />);
 
    const userNode = screen.getByPlaceholderText('Email')
    expect(userNode).toBeInTheDocument();

    const passwordNode = screen.getByPlaceholderText('password')
    expect(passwordNode).toBeInTheDocument(); 

  });

 