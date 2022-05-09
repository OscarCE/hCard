import React, { useContext } from "react";
import { StoreContext } from "../../Store";

interface IButton {
  theme: 'primary' | 'secondary';
  caption: string;
  type: 'button' | 'file';
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const themes = {
  primary: {
    bg: 'bg-primary hover:bg-primary-hover',
    shadow: 'shadow-primary-dark',
  },
  secondary: {
    bg: 'bg-secondary hover:bg-secondary-hover',
    shadow: 'shadow-secondary-dark',
  },
};

export default function Button({ theme, type, caption, onClick }: IButton) {
  const store = useContext(StoreContext);
  const colors = themes[theme];

  return (
    <span className="h-10 flex-1 odd:mr-2.5 even:ml-2.5">
      <input
        type="button"
        className={`h-10 w-full cursor-pointer ${colors.bg} text-white rounded shadow-solid ${colors.shadow}`}
        defaultValue={caption}
        onClick={onClick}
      />
      {type === 'file' && (
        <input
          type={type}
          className={'hidden'}
          id="avatarUpload"
          name="avatarUpload"
          accept="image/png, image/gif, image/jpeg"
          onChange={store.onFileUploadChange}
        />
      )}
    </span>
  );
}
