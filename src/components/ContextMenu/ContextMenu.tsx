import { useEffect, useRef } from "react";
import styles from "./ContextMenu.module.css";

interface ContextMenuItem {
  id: string;
  label: string;
  func: () => void;
}

interface ContextMenuProps {
  config: ContextMenuItem[];
  position: { x: number; y: number };
  onClose?: () => void;
}

const ContextMenu = ({ config, position, onClose }: ContextMenuProps) => {
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

  const handleMenuClick = (item: ContextMenuItem) => () => {
    item.func();
    onClose?.();
  };
  return (
    <ul
      className={styles.context_menu}
      ref={contextMenuRef}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      {config.map((item: ContextMenuItem) => (
        <li
          key={item.id}
          onClick={handleMenuClick(item)}
          className={styles.context_item}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;
