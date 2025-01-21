import styled from "styled-components";

export const FormContainer = styled.form`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: white;
`;

export const Textarea = styled.textarea`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: white;
  resize: none;
`;

export const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.color};
  background-color: #FF8000;

  &:hover {
    color: #000000;
    background-color: #D84B20;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.color};
`;
