interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      className={`flex items-center justify-center border-none bg-transparent px-2 py-2 rounded-2xl ${
        isActive ? 'bg-tapBackground' : ''
      }`}
      onClick={onClick}
    >
      <span
        className={`text-[15px] font-normal ${
          isActive ? 'text-white' : 'text-lightGray'
        }`}
      >
        {label}
      </span>
    </button>
  );
}
