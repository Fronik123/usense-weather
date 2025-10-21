type Props = {
  buttonText: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const CustomButton = ({ onClick, buttonText, disabled }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};
