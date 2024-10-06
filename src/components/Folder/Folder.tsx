import React, { useState } from "react";
import { CiFolderOn } from "react-icons/ci";

import styles from "./Folder.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import ContextMenu from "../ContextMenu";
import { FileType, FolderType } from "../../types";

interface FolderProps {
  folderData: FolderType | FileType;
  selectedFile: string;
  onFileClick: (fileName: string) => void;
}

const Folder: React.FC<FolderProps> = ({
  folderData,
  selectedFile,
  onFileClick,
}) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  const toggleOpen = () => {
    setShowChildren((prev) => !prev);
  };

  const contextMenuConfig = [
    { label: "Copy", id: "copy", func: () => console.log("Copy") },
    { label: "Delete", id: "delete", func: () => console.log("Delete") },
    { label: "Rename", id: "rename", func: () => console.log("Rename") },
  ];

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const onCloseContextMenu = () => {
    setShowContextMenu(false);
  };
  return (
    <div className={styles.folder} onContextMenu={handleRightClick}>
      <div className={styles.folder_name} onClick={toggleOpen}>
        {folderData.type === "folder" ? (
          showChildren ? (
            <MdOutlineExpandMore className={styles.arrow_icon} />
          ) : (
            <MdOutlineKeyboardArrowRight className={styles.arrow_icon} />
          )
        ) : null}
        {folderData.type === "folder" ? (
          <CiFolderOn className={styles.folder_icon} />
        ) : (
          <CiFileOn className={styles.file_icon} />
        )}
        {folderData.name}
      </div>
      {showChildren &&
        folderData.type === "folder" &&
        folderData.data.length > 0 && (
          <div className={styles.files}>
            {folderData.data.map((item) => {
              return (
                <Folder
                  key={item.name}
                  folderData={item}
                  selectedFile={selectedFile}
                  onFileClick={onFileClick}
                />
              );
            })}
          </div>
        )}
      {showContextMenu && (
        <ContextMenu
          config={contextMenuConfig}
          onClose={onCloseContextMenu}
          position={contextMenuPosition}
        />
      )}
    </div>
  );
};

export default Folder;
