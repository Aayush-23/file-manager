import { useEffect, useRef } from "react";
import styles from "./ContextMenu.module.css";

interface ContextMenuItem {
  id: string;
  label: string;
  func: () => void;
}

interface ContextMenuProps {
  config: ContextMenuItem[];
  onClose?: () => void;
}

const ContextMenu = ({ config, onClose }: ContextMenuProps) => {
  const contextMenuRef = useRef<HTMLUListElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      contextMenuRef.current &&
      !contextMenuRef.current.contains(e.target as Node)
    ) {
      onClose?.();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <ul className={styles.context_menu} ref={contextMenuRef}>
      {config.map((item: ContextMenuItem) => (
        <li key={item.id} onClick={item.func} className={styles.context_item}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;
