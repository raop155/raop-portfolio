import Contact from '../../../components/landing/Contact';
import { fireEvent, render, screen } from '@testing-library/react';

beforeEach(() => {
  render(<Contact />);
});

describe('Contact Component', () => {
  test('Should show labels', async () => {
    const nameLabel = screen.getByLabelText(/name/i);
    const emailLabel = screen.getByLabelText(/email/i);
    const messageLabel = screen.getByLabelText(/message/i);

    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });

  test('Should show inputs', async () => {
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const messageInput = screen.getByRole('textbox', { name: /message/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  test('Should show submit button', async () => {
    const submitButton = screen.getByRole('button', { name: /send/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('Should show inputs value change', async () => {
    const name = 'Ricardo';
    const email = 'raop155@test.com';
    const message = 'This is an example';

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const messageInput = screen.getByRole('textbox', { name: /message/i });

    fireEvent.change(nameInput, { target: { value: name } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(messageInput, { target: { value: message } });
    expect(nameInput.value).toBe(name);
    expect(emailInput.value).toBe(email);
    expect(messageInput.value).toBe(message);
  });

  test('Should show submit button', async () => {
    const submitButton = screen.getByRole('button', { name: /send/i });
    expect(submitButton).toBeInTheDocument();
  });
});
