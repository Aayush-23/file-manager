import React from "react";

import data from "../../data";
import Folder from "../Folder";
import { FolderType } from "../../types";

const FileExplorer: React.FC = () => {
  const [selectedFile, setSelectedFile] = React.useState<number | null>(null);
  const handleFileClick = (fileId: number) => {
    setSelectedFile(fileId);
  };

  return (
    <div>
      <Folder
        folderData={data as FolderType}
        selectedFile={selectedFile}
        onFileClick={handleFileClick}
      />
    </div>
  );
};

export default FileExplorer;
