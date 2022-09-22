interface Props{
  text: string;
  widthButton?: number;
}

function Button({ text, widthButton }: Props) {
  const style = {
    width: widthButton
  } 
  
  return (
    <button type="submit" id="button" style={style}>{text}</button>
  )
};

export default Button;