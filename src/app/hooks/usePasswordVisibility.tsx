import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const useTogglePasswordVisibility = () => {
  const [visible, setVisible] = useState(false);

  const Icon = visible ? VisibilityIcon : VisibilityOffIcon;

  const toggleVisibility = () => {
    setVisible(prevVisible => !prevVisible);
  };

  return { visible, Icon, toggleVisibility };
};

export default useTogglePasswordVisibility;
