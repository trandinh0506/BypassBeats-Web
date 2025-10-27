export default function AuthInput({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>
  );
}
