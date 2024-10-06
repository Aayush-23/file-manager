import React from "react";

import data from "../../data";
import Folder from "../Folder";
import { FolderType } from "../../types";

const FileExplorer: React.FC = () => {
  const handleFileClick = () => {};

  return (
    <div>
      <Folder
        folderData={data as FolderType}
        selectedFile={""}
        onFileClick={handleFileClick}
      />
    </div>
  );
};

export default FileExplorer;
