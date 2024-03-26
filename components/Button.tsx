import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  label: string;
  variant: string;
  icon?: string;
  full?: boolean;
}
const Button = ({ type, label, variant, icon, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={`${label}-btn`} width={24} height={24} />}
      <label className="old-16 whitespace-nowrap cursor-pointer" >{label}</label>
    </button>
  )
}

export default Button