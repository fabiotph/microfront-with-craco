interface IButtonProps {
  backgroundColor?: string;
  callback?: () => void | (() => {})
}

declare module "CustomButton/Button" {
  const CustomButton: React.ComponentType<IButtonProps>;
  export default CustomButton;
}
